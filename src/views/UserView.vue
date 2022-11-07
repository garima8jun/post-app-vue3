<template>
  <div>
    <b-card class="p-4" v-if="currentUser">
      <b-button variant="primary" class="mb-3" @click="$router.go(-1)">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
      </b-button>
      <b-row no-gutters class="text-center" align-h="center" align-v="center">
        <b-col cols="12">
          <b-avatar size="150" variant="primary" :src="`https://ui-avatars.com/api?name=${currentUser.name}&background=random&size=128`"></b-avatar>
          <b-card-body :title="currentUser.name">
            <b-card-text>
              <p class="m-0">{{ currentUser.email }}</p>
              <p class="m-0">{{ currentUser.website }}</p>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <b-card class="py-4">
      <b-row no-gutters align-h="center" v-if="userPosts.length">
        <b-col sm="12" md="8">
          <h4 class="mb-4">Posts by {{ currentUser.name }}</h4>
          <b-list-group>
            <template v-for="post in userPosts">
              <b-list-group-item :key="post.id" :to="`/user/${$route.params.userId}/${post.id}`">
                <b-card>
                  <b-card-body class="px-0">
                    <b-card-title class="mb-2">{{ post.title }}</b-card-title>
                    <b-card-text>{{ post.body.slice(0, 50) }} ....</b-card-text>
                  </b-card-body>
                </b-card>
              </b-list-group-item>
            </template>
          </b-list-group>
        </b-col>
      </b-row>
      <div v-else class="text-center p-5">
        <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
      </div>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapGetters(['currentUser', 'userPosts'])
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.go(-1)
    }
    this.$store.dispatch('getPostsByUserId', this.$route.params.userId)
  }
})
</script>

