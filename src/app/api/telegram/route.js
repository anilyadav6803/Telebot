import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
import { NextResponse } from "next/server";

const apiId = parseInt(process.env.TELEGRAM_API_ID);
const apiHash = process.env.TELEGRAM_API_HASH;

export async function POST(req) {
  try {
    const body = await req.json();
    const { phoneNumber, password, phoneCode, action, session } = body;

    const stringSession = new StringSession(session || "");
    const client = new TelegramClient(stringSession, apiId, apiHash, {
      connectionRetries: 5,
    });

    if (action === "sendCode") {
      await client.connect();
      const result = await client.sendCode(
        {
          apiId,
          apiHash,
          phoneNumber: phoneNumber,
        },
        {
          dcId: 2,
          shouldThrowIfUnauthorized: false,
        }
      );
      return NextResponse.json({ phoneCodeHash: result.phoneCodeHash });
    }

    if (action === "signIn") {
      await client.connect();
      try {
        const user = await client.signIn({
          phoneNumber,
          phoneCodeHash: body.phoneCodeHash,
          phoneCode,
        });
        const newSession = client.session.save();
        return NextResponse.json({ session: newSession, user });
      } catch (error) {
        if (error.errorMessage === "SESSION_PASSWORD_NEEDED") {
          return NextResponse.json({ requiresPassword: true });
        }
        throw error;
      }
    }

    if (action === "checkPassword") {
      await client.connect();
      await client.checkPassword(password);
      const newSession = client.session.save();
      return NextResponse.json({ session: newSession });
    }

    if (action === "sendMessage") {
      await client.connect();
      await client.sendMessage("me", { message: "Hello from Next.js!" });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("Error in Telegram API:", error);
    return NextResponse.json(
      { error: error.message || "An error occurred" },
      { status: 500 }
    );
  }
}

