import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { ChatService } from './services/chat.service';
import { TextService } from './services/text.service';
import { VisionService } from './services/vision.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [ChatService, TextService, VisionService],
})
export class AppModule {}
