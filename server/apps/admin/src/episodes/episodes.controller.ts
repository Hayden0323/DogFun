import { Controller, Get } from '@nestjs/common'
import { Episode } from '@libs/db/models/episode.model'
import { InjectModel } from 'nestjs-typegoose'
import { ReturnModelType } from '@typegoose/typegoose'
import { Crud } from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger'
import { Video } from '@libs/db/models/video.model'

@Crud({
  model: Episode
})
@Controller('episodes')
@ApiTags('分集')
export class EpisodesController {
  constructor(
    @InjectModel(Episode)
    private readonly model: ReturnModelType<typeof Episode>,
    @InjectModel(Video)
    private readonly videoModel: ReturnModelType<typeof Video>
  ) {}

  @Get('option')
  async option() {
    const videos = (await this.videoModel.find()).map(v => ({
      label: v.name,
      value: v._id
    }))
    return {
      title: '分集管理',
      translate: false,
      column: [
        {
          prop: 'video',
          label: '所属视频',
          type: 'select',
          dicData: videos,
          row: true
        },
        { prop: 'name', label: '分集名称', span: 24 },
        {
          prop: 'file',
          label: '分集文件',
          span: 24,
          width: 120,
          listType: 'picture-img',
          type: 'upload',
          action: '/upload'
        }
      ]
    }
  }
}
