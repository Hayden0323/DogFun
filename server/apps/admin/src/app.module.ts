import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DbModule } from '@libs/db'
import { UsersModule } from './users/users.module'
import { VideosModule } from './videos/videos.module'
import { EpisodesModule } from './episodes/episodes.module'
import { MulterModule } from '@nestjs/platform-express'

const MAO = require('multer-aliyun-oss')

@Module({
  imports: [
    DbModule,
    UsersModule,
    VideosModule,
    EpisodesModule,
    MulterModule.register({
      storage: MAO({
        config: {
          region: 'oss-cn-hangzhou',
          accessKeyId: 'LTAI4FpxwetQ5y2iZyYENr6m',
          accessKeySecret: 'MuDhfzvWdtQSSzS6ts9ND7uNBfQvHU',
          bucket: 'dog-fun'
        }
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
