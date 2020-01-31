<template>
  <div>
    <h3>{{isNew?'创建':'编辑'}}视频</h3>
    <ele-form :form-data='data'
              :form-desc='fields'>
    </ele-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class VideoList extends Vue {
  @Prop(String) id!: string;
  data = {};
  fields = {
    name: { label: "视频名称", type: "input" },
    cover: { label: "视频封面图", type: "input" }
  };

  get isNew() {
    return !this.id;
  }

  async fetch() {
    const res = await this.$http.get("videos");
    this.data = res.data;
  }

  created() {
    // this.fetch();
  }
}
</script>

<style>
</style>