export default async function Object(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      console.warn("GEMINI_API_KEY está ausente no servidor Vercel.");
      return res.status(500).json({ error: 'Server validation configuration missing' });
    }

    const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    
    // We expect the body to contain { prompt: "..." }
    // Or we simply forward the raw body
    const { contents } = req.body;
    
    if (!contents) {
       return res.status(400).json({ error: 'Missing contents in request body' });
    }

    const response = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents })
    });

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error("Erro na Vercel Function (Gemini):", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
