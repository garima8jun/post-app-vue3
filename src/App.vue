<template>
  <div id="app">
    <navbar />
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from './components/Navbar.vue'

export default Vue.extend({
  components: {Navbar }
})
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
  body {
    font-family: 'Montserrat', sans-serif !important;
  }
</style>
