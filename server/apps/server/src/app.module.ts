import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CommonModule } from '@app/common'
import { VideosModule } from './videos/videos.module'

@Module({
  imports: [CommonModule, VideosModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
