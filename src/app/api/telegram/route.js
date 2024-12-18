
import { NextResponse } from "next/server";

const apiId = parseInt(process.env.TELEGRAM_API_ID);
const apiHash = process.env.TELEGRAM_API_HASH;

export async function POST(req) {
  try {
    const body = await req.json();
    console.log(body)
    const { phoneNumber, password, phoneCode, action, session } = body;
    console.log(action)

    if (action === "sendCode") {
      console.log("here")
      FASTAPI_URL = "http://127.0.0.1:8000"
      const response = await fetch(`${FASTAPI_URL}/sendcode?phone_no=${phoneNumber}`);
      const data = await response.json();
      console.log("Data--->", data)

      return "Works" //NextResponse.json({ phoneCodeHash: result.phoneCodeHash });
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

