import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { BEAVER_SYSTEM_INSTRUCTION } from '../constants';

let client: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!client) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API_KEY not found in environment variables");
      throw new Error("API Key missing");
    }
    client = new GoogleGenAI({ apiKey });
  }
  return client;
};

export const createChatSession = (): Chat => {
  const ai = getClient();
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: BEAVER_SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I couldn't crunch that wood. Try asking again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the main office right now. Please call us directly.";
  }
};
