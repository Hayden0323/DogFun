<template>
  <v-card flat
          tile
          class="pa-3">
    <v-form @submit.prevent="send">
      <v-text-field label="发条友善的评论"
                    required
                    append-icon="mdi-send"
                    v-model="content"
                    @click:append="send">
      </v-text-field>
    </v-form>
    <v-list two-line>
      <template v-for="(item, index) in comments">
        <v-list-item :key="index">
          <v-list-item-avatar color="blue">
            <span class="white--text">{{ item.user.username[0].toUpperCase() }}</span>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ item.content }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.user.username }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ item.user.createdAt }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    object: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      comments: [],
      content: null
    }
  },
  watch: {
    object: {
      handler: 'fetch',
      immediate: true
    }
  },
  methods: {
    async send () {
      await this.$axios.$post('comments', {
        type: this.type,
        object: this.object,
        content: this.content
      })
      this.content = null
      this.fetch()
    },
    async fetch () {
      this.comments = await this.$axios.$get('comments', {
        params: {
          query: {
            where: {
              type: this.type,
              object: this.object
            }
          }
        }
      })
    }
  }
}
</script>

<style>
</style>