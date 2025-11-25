export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error('GEMINI_API_KEY not found in environment variables');
      return res.status(500).json({ error: 'API key not configured' });
    }

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are a MERN stack expert AI assistant. Answer questions about MongoDB, Express.js, React, Node.js, and related technologies. Keep responses helpful, accurate, and concise. User question: ${message}`
          }]
        }]
      })
    });

    if (!response.ok) {
      console.error('Gemini API error:', response.status, response.statusText);
      return res.status(500).json({ error: 'Failed to get response from AI service' });
    }

    const data = await response.json();

    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
      const botResponse = data.candidates[0].content.parts[0].text;
      return res.status(200).json({ response: botResponse });
    } else {
      console.error('Unexpected Gemini API response structure:', data);
      return res.status(500).json({ error: 'Invalid response from AI service' });
    }

  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
