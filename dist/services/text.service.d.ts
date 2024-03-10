import { GenerativeModel } from '@google/generative-ai';
import { ChatContent } from 'src/models/chat-content';
export declare class TextService {
    model: GenerativeModel;
    constructor();
    generateText(message: string): Promise<ChatContent>;
}
