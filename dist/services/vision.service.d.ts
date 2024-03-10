/// <reference types="multer" />
import { GenerativeModel } from '@google/generative-ai';
import { ChatContent } from 'src/models/chat-content';
export declare class VisionService {
    model: GenerativeModel;
    constructor();
    vision(message: string, file: Express.Multer.File): Promise<ChatContent>;
}
