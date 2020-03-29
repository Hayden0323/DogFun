<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer"
                         app
                         clipped>
      <v-list dense>
        <v-list-item v-for="item in items"
                     :to="item.link"
                     :key="item.text"
                     link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1">订阅</v-subheader>
        <v-list>
          <v-list-item v-for="item in items2"
                       :key="item.text"
                       link>
            <v-list-item-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`"
                   alt="">
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text" />
          </v-list-item>
        </v-list>
        <v-list-item class="mt-4"
                     @click="isShowLoginForm = true">
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-lock</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
                             v-if="$store.state.auth.user">
            欢迎您：{{$store.state.auth.user.username}}
          </v-list-item-title>
          <v-list-item-title class="grey--text text--darken-1"
                             v-else>
            登录
          </v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Manage Subscriptions</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app
               clipped-left
               color="red"
               dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-icon class="mx-4">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">DOGFUN</span>
      </v-toolbar-title>
      <v-spacer />
      <v-row align="center"
             style="max-width: 650px">
        <v-text-field :append-icon-cb="() => {}"
                      placeholder="搜索..."
                      single-line
                      append-icon="search"
                      color="white"
                      hide-details />
      </v-row>
    </v-app-bar>

    <v-content>
      <nuxt-child></nuxt-child>
    </v-content>

    <v-dialog v-model="isShowLoginForm"
              persistent
              max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">登录</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="用户名*"
                              v-model="loginModel.username"
                              required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="密码*"
                              type="password"
                              v-model="loginModel.password"
                              required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1"
                 text
                 @click="isShowLoginForm = false">关闭</v-btn>
          <v-btn color="blue darken-1"
                 @click="login">登录</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    isShowLoginForm: false,
    loginModel: {},
    drawer: null,
    items: [
      { icon: 'home', text: '首页', link: '/' },
      { icon: 'trending_up', text: '热门视频', link: '/videos' },
      { icon: 'subscriptions', text: '热门评论', link: '/comments' },
    ],
    items2: [
      { picture: 28, text: 'Joseph' },
      { picture: 38, text: 'Apple' },
      { picture: 48, text: 'Xbox Ahoy' },
      { picture: 58, text: 'Nokia' },
      { picture: 78, text: 'MKBHD' },
    ],
  }),
  methods: {
    async login () {
      await this.$auth.loginWith('local', {
        data: this.loginModel
      })
      console.log('登录成功')
      this.isShowLoginForm = false
    }
  },
  created () {
    this.$vuetify.theme.dark = true
  },
}
</script>