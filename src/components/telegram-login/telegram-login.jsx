'use client';
import React, { useEffect } from 'react';

const TelegramLogin = () => {
  useEffect(() => {
    // Dynamically load the Telegram widget script
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?7';
    script.async = true;
    script.setAttribute('data-telegram-login', 'Testingteleapibot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-radius', '10');
    script.setAttribute('data-auth-url', '/api/auth/telegram-login');
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h1>Login with Telegram</h1>
      {/* The Telegram Login Button will be rendered dynamically */}
    </div>
  );
};

export default TelegramLogin;
