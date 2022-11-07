<template>
  <div class="home">
    <users-list />
  </div>
</template>

<script lang="ts">
import UsersList from '@/components/usersList.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  components: {UsersList},
});
</script>
