<template>
  <div v-if="users.length">
    <div class="m-2" v-for="user in users" :key="user.id">
      <b-card no-body class="overflow-hidden p-3">
        <b-row no-gutters align-h="center" align-v="center">
          <b-col sm="12" md="2" style="width:100px">
            <b-avatar size="100" variant="primary" :src="`https://ui-avatars.com/api?name=${user.name}&background=random&size=128`"></b-avatar>
          </b-col>
          <b-col sm="12" md="8">
            <b-card-body :title="user.name">
              <b-card-text>
                <p class="m-0">{{ user.email }}</p>
                <p class="m-0">{{ user.website }}</p>
              </b-card-text>
            </b-card-body>
          </b-col>
          <b-col sm="12" md="2" class="text-center">
            <b-button block @click="profile(user)" variant="primary">view profile</b-button>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
  <div v-else class="text-center p-5">
    <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
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