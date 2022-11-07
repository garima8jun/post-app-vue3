<template>
  <div class="user-list" v-if="users.length">
    <div class="m-2" v-for="user in users" :key="user.id">
      <b-card no-body class="overflow-hidden p-3"  xm="12">
        <figure title="user.name">
            <figcaption>
              <img :src="`https://ui-avatars.com/api?name=${user.name}&background=random&size=90`" :alt="`${user.name}`" />
            <h3>{{ user.name }}</h3>
            <div>
              <p class="m-0"><span>Email Id:</span> {{ user.email }}</p>
              <p class="m-0"><span>Visit @</span>{{ user.website }}</p>
            </div>
            </figcaption>

        </figure>
          <b-button block @click="profile(user)" variant="primary">View Profile</b-button>
        </b-card>
    </div>
  </div>
  <div v-else class="text-center p-5">
    <!-- <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner> -->
    <b-row no-gutters class="text-center" align-h="center" align-v="center">
        <b-col sm="12" md="4">
          <div class="container">
            <div class="header">
              <div class="nav">
          <div class="nav-items">
            </div>
              </div>
              <div class="content">
                <div class="animated">
                  <div class="parent"></div>
                  <div class="padding"></div>
                  <div class="title"></div>
                  <div class="padding"></div>
                  <div class="followers"></div>
                  <div class="padding"></div>
                  <div class="description"></div>
                  <div class="padding"></div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col sm="12" md="4">
          <div class="container">
            <div class="header">
              <div class="nav">
          <div class="nav-items">
            </div>
              </div>
              <div class="content">
                <div class="animated">
                  <div class="parent"></div>
                  <div class="padding"></div>
                  <div class="title"></div>
                  <div class="padding"></div>
                  <div class="followers"></div>
                  <div class="padding"></div>
                  <div class="description"></div>
                  <div class="padding"></div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col sm="12" md="4">
          <div class="container">
            <div class="header">
              <div class="nav">
          <div class="nav-items">
            </div>
              </div>
              <div class="content">
                <div class="animated">
                  <div class="parent"></div>
                  <div class="padding"></div>
                  <div class="title"></div>
                  <div class="padding"></div>
                  <div class="followers"></div>
                  <div class="padding"></div>
                  <div class="description"></div>
                  <div class="padding"></div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row no-gutters class="text-center" align-h="center" align-v="center">
        <b-col cols="4">
          <div class="container">
            <div class="header">
              <div class="nav">
          <div class="nav-items">
            </div>
              </div>
              <div class="content">
                <div class="animated">
                  <div class="parent"></div>
                  <div class="padding"></div>
                  <div class="title"></div>
                  <div class="padding"></div>
                  <div class="followers"></div>
                  <div class="padding"></div>
                  <div class="description"></div>
                  <div class="padding"></div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col cols="4">
          <div class="container">
            <div class="header">
              <div class="nav">
          <div class="nav-items">
            </div>
              </div>
              <div class="content">
                <div class="animated">
                  <div class="parent"></div>
                  <div class="padding"></div>
                  <div class="title"></div>
                  <div class="padding"></div>
                  <div class="followers"></div>
                  <div class="padding"></div>
                  <div class="description"></div>
                  <div class="padding"></div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col cols="4">
          <div class="container">
            <div class="header">
              <div class="nav">
          <div class="nav-items">
            </div>
              </div>
              <div class="content">
                <div class="animated">
                  <div class="parent"></div>
                  <div class="padding"></div>
                  <div class="title"></div>
                  <div class="padding"></div>
                  <div class="followers"></div>
                  <div class="padding"></div>
                  <div class="description"></div>
                  <div class="padding"></div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>

  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import Vue from 'vue'
import User from '@/types/user'

export default Vue.extend({
  computed: {
    ...mapGetters(['users'])
  },
  methods: {
    profile(user: User) {
      this.$store.commit('update_user', user);
      this.$router.push(`/user/${user.id}`)
    }
  },
  mounted() {
    this.$store.dispatch('getUsers');
  }
})
</script>

<style scoped>
.user-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px 10px;
    max-width: 1146px;
    margin: 0 auto;
}

.user-list .card .row {
  flex-flow: column;
}
.user-list .card img {
  filter: grayscale(1);
  width: 100%;
  max-height: 320px;
  border-radius: 10px;
}

@media screen and (max-width: 768px) {
  .user-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 600px) {
  .user-list {
    display: block;
  }
}
</style>