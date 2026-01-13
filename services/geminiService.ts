
import { GoogleGenAI, Type } from "@google/genai";

// Use process.env.API_KEY directly as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateProjectBlueprint = async (userRequirements: string) => {
  // Use gemini-3-pro-preview for complex technical blueprint generation
  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: `Generate a detailed technical project blueprint for: ${userRequirements}. 
               Focus on NexaForge's expertise in AI, Web, and Cloud.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          architecture: { type: Type.ARRAY, items: { type: Type.STRING } },
          techStack: { type: Type.ARRAY, items: { type: Type.STRING } },
          estimatedTimeline: { type: Type.STRING },
          estimatedComplexity: { type: Type.STRING, enum: ['Low', 'Medium', 'High'] }
        },
        required: ["title", "architecture", "techStack", "estimatedTimeline", "estimatedComplexity"]
      }
    }
  });

  try {
    return JSON.parse(response.text);
  } catch (e) {
    console.error("Failed to parse blueprint", e);
    return null;
  }
};

export const startChatSession = () => {
  // Use gemini-3-pro-preview for advanced AI agent session
  return ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: 'You are "Nexa", the advanced AI agent for NexaForge Tech. NexaForge is a leading software and AI development agency specializing in custom LLMs, scalable web platforms, and cloud-native solutions. Your goal is to help visitors understand how NexaForge can transform their business with technology. Be professional, innovative, and concise.',
    },
  });
};
