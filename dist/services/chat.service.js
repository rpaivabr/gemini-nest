"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const generative_ai_1 = require("@google/generative-ai");
let ChatService = class ChatService {
    constructor() {
        const genAI = new generative_ai_1.GoogleGenerativeAI(process.env.API_KEY);
        this.model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        this.chatSession = this.model.startChat({
            history: [
                {
                    role: 'user',
                    parts: `You're a poet. Respond to all questions with a rhyming poem.
            What is the capital of California?
          `,
                },
                {
                    role: 'model',
                    parts: 'If the capital of California is what you seek, Sacramento is where you ought to peek.',
                },
            ],
        });
    }
    async chat(chatContent) {
        const { response } = await this.chatSession.sendMessage(chatContent.message);
        const text = response.text();
        return {
            message: text,
            agent: 'chatbot',
        };
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ChatService);
//# sourceMappingURL=chat.service.js.map