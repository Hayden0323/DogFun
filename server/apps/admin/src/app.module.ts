import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DbModule } from '@libs/db'
import { UsersModule } from './users/users.module'
import { VideosModule } from './videos/videos.module'
import { EpisodesModule } from './episodes/episodes.module'
import { MulterModule } from '@nestjs/platform-express'
import { CommonModule } from '@app/common'

const MAO = require('multer-aliyun-oss')

@Module({
  imports: [
    CommonModule,
    UsersModule,
    VideosModule,
    EpisodesModule,
    MulterModule.registerAsync({
      useFactory() {
        return {
          storage: MAO({
            config: {
              region: process.env.OSS_REGION,
              accessKeyId: process.env.OSS_ACCESS_KEY_ID,
              accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
              bucket: process.env.OSS_BUCKET
            }
          })
        }
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
