// app/api/auth/telegram-login/route.js
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  try {
    const { auth_token } = await request.json();

    // Verify the auth token with Telegram API
    const verificationUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/getMe`;

    const response = await axios.get(verificationUrl);

    // Assuming the response contains user data after validation
    const userData = response.data;

    // You can use user data to register the user or log them in to your app
    // For example, store user in the database or create a session
    return NextResponse.json({ success: true, user: userData });
  } catch (error) {
    console.error('Error during login verification:', error);
    return NextResponse.json({ error: 'Failed to verify login' }, { status: 500 });
  }
}
