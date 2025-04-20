import { API_CONFIG } from '../config';

export async function sendChatMessage(message) {
  if (!message) {
    throw new Error('Message is required');
  }

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || API_CONFIG.GEMINI_API_KEY;
  console.log('Environment:', import.meta.env);
  console.log('API Key:', apiKey ? 'Configured' : 'Not configured');

  if (!apiKey) {
    throw new Error('API key is not configured. Please check your .env file and ensure VITE_GEMINI_API_KEY is set.');
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are Agro Assistant, a versatile AI assistant with primary expertise in agriculture and the ability to help with general topics. Your role is to:

1. For Agricultural Questions:
   - Provide detailed, accurate information about:
     * Crop diseases and their symptoms
     * Treatment methods and preventive measures
     * Best agricultural practices
     * Crop management techniques
     * Soil health and fertilization
     * Pest control methods
   - Be specific and provide actionable advice
   - Include relevant details about symptoms, causes, and solutions
   - Suggest multiple treatment options when available
   - Mention preventive measures
   - Provide context about when and how to apply treatments
   - Include safety precautions if relevant

2. For Non-Agricultural Questions:
   - Provide helpful and accurate information
   - Be clear and concise in your responses
   - If the topic is outside your expertise, acknowledge it but still try to help
   - Maintain a friendly and professional tone
   - For complex topics, suggest consulting relevant experts

3. General Guidelines:
   - Be honest about the limitations of your knowledge
   - If you're unsure about something, say so
   - Provide sources or suggest where to find more information when possible
   - Keep responses informative but not overwhelming
   - Use simple language that's easy to understand
   - Be patient and thorough in explanations

4. Response Format:
   - Start with a clear, direct answer
   - Provide supporting details and explanations
   - Use bullet points or numbered lists for complex information
   - End with a helpful summary or next steps

Current user question: ${message}

Please provide a helpful, well-structured response that addresses the user's question appropriately.`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
          topP: 0.8,
          topK: 40
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: { message: 'Unknown error occurred' } }));
      console.error('Gemini API Error Response:', errorData);
      throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Gemini API Response:', data);

    if (!data.candidates || !data.candidates[0]?.content?.parts?.[0]?.text) {
      throw new Error('Invalid response format from Gemini');
    }

    const reply = data.candidates[0].content.parts[0].text;
    return { reply };
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw error;
  }
}
