import { Controller } from '@nestjs/common'
import { Crud } from 'nestjs-mongoose-crud'
import { Video } from '@libs/db/models/video.model'
import { ApiTags } from '@nestjs/swagger'
import { InjectModel } from 'nestjs-typegoose'

@Crud({
  model: Video,
  routes: {
    create: false,
    update: false,
    delete: false
  }
})
@Controller('videos')
@ApiTags('视频')
export class VideosController {
  constructor(@InjectModel(Video) private model) {}
}
