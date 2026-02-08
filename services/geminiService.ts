
import { ChatMessage } from '../types';

export const getGeminiResponse = async (userMessage: string) => {
  try {
    // 这里的请求路径改为我们刚刚创建的 api/chat
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || '网络请求失败');
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Gemini Service Error:", error);
    return "系统响应繁忙或网络受限，请稍后再试。";
  }
};
