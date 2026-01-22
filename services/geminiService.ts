import { GoogleGenAI } from "@google/genai";

const apiKey = (process.env.GEMINI_API_KEY as unknown as string) || '';
const ai = new GoogleGenAI({ apiKey });

// System instruction to guide the AI to act as the VenTech representative
const SYSTEM_INSTRUCTION = `
You are the official AI assistant for "VenTech", a university technology entrepreneurship competition.
Your name is "مساعد فينتك" (VenTech Assistant).
You must answer strictly in Arabic.
Your tone should be professional, encouraging, technical, and helpful.

Here is the context about VenTech:
- Name: VenTech (Innovate. Validate. Launch) | (ابتكار. تحقق. انطلاق).
- Goal: Transforming university students' technical ideas into viable startups.
- Stages: 
  1. Registration (Online).
  2. Workshops (Training on business models & MVPs).
  3. Project Development (Mentorship phase).
  4. VenTech Expo (The big event with investors).
  5. Final Judging & Awards.
- Expo: A hub connecting students, manufacturers, and investors.
- Judging Criteria: Innovation, Technical Applicability, Market Impact, Technical Quality.
- Target Audience: University students, researchers, early-stage tech entrepreneurs.

If a user asks about something unrelated to the competition, politely steer them back to VenTech topics.
Keep answers concise and clear.
`;

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "عذراً، خدمة المساعد الذكي غير متوفرة حالياً (API Key missing).";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview", // Efficient model for chat
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    return response.text || "عذراً، لم أتمكن من معالجة طلبك.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "حدث خطأ أثناء الاتصال بالخادم. يرجى المحاولة لاحقاً.";
  }
};