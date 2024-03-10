import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ChatService } from './services/chat.service';
import { TextService } from './services/text.service';
import { ChatContent } from './models/chat-content';
import { VisionService } from './services/vision.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(
    private readonly chatService: ChatService,
    private readonly textService: TextService,
    private readonly visionService: VisionService
  ) {}

  @Post('chat')
  chat(@Body() chatContent: ChatContent) {
    return this.chatService.chat(chatContent);
  }

  @Post('text')
  text(@Body() chatContent: ChatContent) {
    return this.textService.generateText(chatContent.message);
  }

  @Post('vision')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body: {message: string}) {
    return this.visionService.vision(body.message, file);
  }
}
