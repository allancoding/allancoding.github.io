const fetch = require('node-fetch');

exports.handler = async (event) => {
  const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

  if (!DISCORD_WEBHOOK_URL) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Webhook URL is missing' }),
    };
  }

  try {
    const { message } = JSON.parse(event.body);

    if (!message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Message is required' }),
      };
    }

    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: message }),
    });

    if (!response.ok) {
      throw new Error(`Discord webhook error: ${response.statusText}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
