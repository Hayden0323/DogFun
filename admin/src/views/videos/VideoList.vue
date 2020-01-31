<template>
  <div>
    <h3>视频列表</h3>
    <el-table :data="data.data"
              border
              stripe>
      <el-table-column v-for="(field,name) in fields"
                       :prop="name"
                       :key="name"
                       :label="field.label">
      </el-table-column>
    </el-table>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class VideoList extends Vue {
  data = {};
  fields = {
    _id: { label: "ID" },
    name: { label: "视频名称" },
    cover: { label: "视频封面图" }
  };

  async fetch() {
    const res = await this.$http.get("videos");
    this.data = res.data;
  }

  created() {
    this.fetch();
  }
}
</script>

<style>
</style>