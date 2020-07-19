<template>
  <div class="pa-3">
    <h3>{{video.name}}</h3>
    <like-btn type="Video"
              :object="video._id"></like-btn>
    <v-select v-model="currentIndex"
              :items="video.episodes.map((v, i) => ({ text: v.name, value: i }))"></v-select>
    <video width="100%"
           :src="episode.file"
           controls></video>
  </div>
</template>

<script>
import LikeBtn from '../../components/shared/LikeBtn'
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
    LikeBtn
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