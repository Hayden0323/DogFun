<template>
  <div class="pa-3">
    <v-row>
      <v-col :md="8">
        <video width="100%"
               :src="episode.file"
               controls></video>
        <h3>{{video.name}}</h3>
        <like-btn type="Video"
                  :object="video._id"></like-btn>
        <v-select v-model="currentIndex"
                  :items="video.episodes.map((v, i) => ({ text: v.name, value: i }))"></v-select>
      </v-col>
      <v-col :md="4">
        <comment-list type="Episode"
                      :object="episode._id"></comment-list>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LikeBtn from '../../components/shared/LikeBtn'
import CommentList from '../../components/shared/CommentList'

export default {
  async asyncData ({ params, $axios }) {
    const { id } = params
    const video = await $axios.$get(`videos/${params.id}`, {
      params: {
        query: { populate: 'episodes' }
      }
    })
    return {
      id,
      video
    }
  },
  components: {
    LikeBtn,
    CommentList
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  computed: {
    episode () {
      return this.video.episodes[this.currentIndex]
    }
  }
}
</script>

<style>
</style>