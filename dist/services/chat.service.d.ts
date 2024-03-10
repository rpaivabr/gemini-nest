import { ChatSession, GenerativeModel } from '@google/generative-ai';
import { ChatContent } from 'src/models/chat-content';
export declare class ChatService {
    model: GenerativeModel;
    chatSession: ChatSession;
    constructor();
    chat(chatContent: ChatContent): Promise<ChatContent>;
}
