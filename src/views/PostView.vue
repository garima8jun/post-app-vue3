<template>
  <div v-if="post">
    <b-card class="p-4">
      <b-button variant="primary" class="mb-3" @click="$router.go(-1)">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
      </b-button>
      <b-card-body class="px-0">
        <b-card-title class="mb-2">{{ post.title }}</b-card-title>
        <b-card-text>{{ post.body }}</b-card-text>
      </b-card-body>
    </b-card>
  </div>
  <div v-else class="text-center p-5">
    <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      post: undefined
    }
  },
  async mounted() {
    this.post = await this.$store.dispatch('getPostById', this.$route.params.postId);
  }
})
</script>
