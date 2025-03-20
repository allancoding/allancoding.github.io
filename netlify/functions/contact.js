const fetch = require('node-fetch');
const recentIPs = new Map();

exports.handler = async (event) => {
  const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
  const clientIP = event.headers['client-ip'] || 'unknown';

  const lastRequestTime = recentIPs.get(clientIP);
  if (lastRequestTime && Date.now() - lastRequestTime < 10000) { 
    return { statusCode: 429, body: JSON.stringify({ error: 'Too many requests. Try again later. :)' }) };
  }
  recentIPs.set(clientIP, Date.now());

  try {
    const { name, subject, message, email } = JSON.parse(event.body);

    if (!name || !subject || !message || !email) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) };
    }

    const MAX_NAME_LENGTH = 256;
    const MAX_SUBJECT_LENGTH = 256;
    const MAX_EMAIL_LENGTH = 256;
    const MAX_MESSAGE_LENGTH = 4096;

    if (name.length > MAX_NAME_LENGTH || subject.length > MAX_SUBJECT_LENGTH || message.length > MAX_MESSAGE_LENGTH || email.length > MAX_EMAIL_LENGTH) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Fields too long' }) };
    }

    const payload = {
      content: "Hey <@893621402496806975> Someone sent you a message on your website!",
      embeds: [
        {
          title: subject,
          description: message,
          color: 0xF4030B, // Red color (#F4030B)
          fields: [
            {
              name: "Email",
              value: email
            },
            {
              name: "IP Address",
              value: clientIP
            }
          ],
          author: {
            name: name
          },
          footer: {
            text: "Sent At"
          },
          timestamp: new Date().toISOString()
        }
      ],
      username: "Allancoding Contact Form",
      avatar_url: "https://allancoding.dev/logos/allancoding-sq.png"
    };

    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log(`Message sent: ${name} - ${email}`);
    } else if (!response.ok) {
      throw new Error(`Discord webhook error: ${response.statusText}`);
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
