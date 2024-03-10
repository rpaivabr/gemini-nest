import { Injectable } from '@nestjs/common';
import { GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';
import { ChatContent } from 'src/models/chat-content';

@Injectable()
export class TextService {
  model: GenerativeModel;

  constructor() {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    this.model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  }

  async generateText(message: string): Promise<ChatContent> {
    const { response } = await this.model.generateContent(message);
    const text = response.text();

    return {
      message: text,
      agent: 'chatbot',
    };
  }
}
