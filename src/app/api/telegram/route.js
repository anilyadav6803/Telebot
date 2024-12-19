import { NextResponse } from "next/server";
import { message } from "telegram/client";

const FASTAPI_URL = process.env.FASTAPI_URL || "http://127.0.0.1:8000/";

export async function POST(req) {
  try {
    const body = await req.json();
    const { phoneNumber, password, phoneCode, action, session } = body;

    console.log('Received action:', action) // Add this log

    switch (action) {
      case "sendCode":
        return await sendCode(phoneNumber);
      case "code":
        return await signIn(phoneNumber, phoneCode, body.phoneCodeHash);
      case "checkPassword":
        return await checkPassword(password, session);
      case "sendMessage":
        return await sendMessage(session);
      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error in Telegram API:", error);
    return NextResponse.json(
      { error: error.message || "An error occurred" },
      { status: 500 }
    );
  }
}

async function sendCode(phoneNumber) {
  const response = await fetch(`${FASTAPI_URL}/sendcode?phone_no=${phoneNumber}`);
  const data = await response.json();
  return NextResponse.json(data);
}

async function signIn(phoneNumber, phoneCode, phoneCodeHash) {
  const response = await fetch( `${FASTAPI_URL}/verifycode?phone_no=${phoneNumber}&phone_code=${phoneCode}` );
  const data = await response.json();
  return NextResponse.json(data);
  

  //return NextResponse.json({ success: true, message: "Signed in successfully" });
}

async function checkPassword(password, session) {
  // Implement password check logic here
  // This is a placeholder implementation
  return NextResponse.json({ success: true, message: "Password checked successfully" });
}

async function sendMessage(session) {
  // Implement send message logic here
  // This is a placeholder implementation
  return NextResponse.json({ success: true, message: "Message sent successfully" });
}

