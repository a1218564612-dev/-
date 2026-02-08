
import { GoogleGenAI } from "@google/genai";

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { message } = await req.json();
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: '服务器未配置 API KEY' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: "您是'影的智能办公空间'的专属 AI 助手。该空间由王国友（影）创建并维护。您的任务是协助用户在电商、PDF处理、办公协作等领域寻找最高效的解决方案。回答必须使用简洁、专业、高级的中文，避免口语化和冗长的解释。请务必不要在回答中使用'主理人'这个词。",
      },
    });

    const text = response.text || "抱歉，暂时无法回应您的请求。";
    
    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error("API Route Error:", error);
    return new Response(JSON.stringify({ error: 'AI 响应失败，请稍后再试' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
