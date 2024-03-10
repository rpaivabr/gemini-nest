/// <reference types="multer" />
import { ChatService } from './services/chat.service';
import { TextService } from './services/text.service';
import { ChatContent } from './models/chat-content';
import { VisionService } from './services/vision.service';
export declare class AppController {
    private readonly chatService;
    private readonly textService;
    private readonly visionService;
    constructor(chatService: ChatService, textService: TextService, visionService: VisionService);
    chat(chatContent: ChatContent): Promise<ChatContent>;
    text(chatContent: ChatContent): Promise<ChatContent>;
    uploadFile(file: Express.Multer.File, body: {
        message: string;
    }): Promise<ChatContent>;
}
