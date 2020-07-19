import { prop, modelOptions, Ref } from '@typegoose/typegoose'
import { User } from './user.model'
import { Video } from './video.model'
import { Episode } from './episode.model'

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Action {
  @prop({ ref: 'User' })
  user: Ref<User>

  @prop({ enum: ['Video', 'Episode'] })
  type: string

  @prop({ refPath: 'type' })
  object: Ref<Video | Episode>

  @prop({ enum: ['like', 'upVote'] })
  name: string
}
