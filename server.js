import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Log environment variables (without exposing sensitive data)
console.log('Environment loaded:', {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  HAS_API_KEY: !!process.env.VITE_OPENAI_API_KEY
});

// Initialize OpenAI with proper error handling
let openai;
try {
  openai = new OpenAI({
    apiKey: process.env.VITE_OPENAI_API_KEY,
  });
  console.log('OpenAI client initialized successfully');
} catch (error) {
  console.error('Failed to initialize OpenAI client:', error);
}

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!openai) {
      return res.status(500).json({ error: 'OpenAI client not initialized' });
    }

    console.log('Received message:', message);

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are AgriMed Assistant, a helpful AI assistant specialized in agricultural and crop disease information. Provide accurate, concise, and helpful responses about crops, diseases, and treatments."
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";
    console.log('Generated reply:', reply);

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      type: error.type
    });
    return res.status(500).json({ 
      error: 'Failed to process the request',
      details: error.message 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: err.message 
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 