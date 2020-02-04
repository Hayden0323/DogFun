import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Video {
  @ApiProperty({ description: '视频名称' })
  @prop()
  name: string

  @ApiProperty({ description: '封面图' })
  @prop()
  cover: string
}
