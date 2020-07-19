import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CommonModule } from '@app/common'
import { VideosModule } from './videos/videos.module'
import { AuthModule } from './auth/auth.module';
import { ActionsModule } from './actions/actions.module';

@Module({
  imports: [CommonModule, VideosModule, AuthModule, ActionsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
