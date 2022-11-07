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
  img {
  filter: grayscale(1);
  }

  * {
  box-sizing: border-box;
}

.text {
  display: none;
  margin: 0 auto;
  text-align: center;
  font-family: "Quicksand", sans-serif;
  font-weight: 300;
  font-size: 32px;
  padding-top: 32px;
  color: rgba(0, 0, 0, 0.84);
}
@media screen and (min-width: 768px) {
  .text {
    display: flex;
  }
}

body {
  background: #fafafa;
}

.material-icons {
  color: rgba(0, 0, 0, 0.54);
}

.container {
  display: flex;
  flex-direction: column;
}

.nav {
  display: flex;
  height: 56px;
  padding: 8px;
  justify-content: space-between;
}

.nav-items {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header {
  display: flex;
  flex-direction: column;
  max-width: 530px;
  width: 100%;
  background: #fff;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.08);
  margin: 0 auto;
}
@media screen and (min-width: 768px) {
  .header {
    margin: 56px auto 0;
  }
}

.content {
  padding: 16px 30px 24px;
}

.animated {
  background-color: #f3f3f3;
  background: linear-gradient(to right, #f3f3f3 5%, #eee 20%, #f3f3f3 35%);
  -webkit-animation: placeholderShimmer 2s linear 0s infinite normal forwards;
          animation: placeholderShimmer 2s linear 0s infinite normal forwards;
}

.title {
  position: relative;
  height: 28px;
}
.title:after {
  position: absolute;
  right: 0;
  content: "";
  background: #fff;
  height: 28px;
  width: 0%;
}

.padding {
  height: 16px;
  background: #fff;
}

.parent {
  position: relative;
  height: 13px;
}
.parent:after {
  position: absolute;
  right: 0;
  content: "";
  background: #fff;
  height: 14px;
  width: 70%;
}

.followers {
  position: relative;
  height: 14px;
}
.followers:after {
  position: absolute;
  right: 0;
  content: "";
  background: #fff;
  height: 14px;
  width: 80%;
}

.description {
  position: relative;
  height: 14px;
}
.description:after {
  position: absolute;
  right: 0;
  content: "";
  background: #fff;
  height: 14px;
  width: 0%;
}

@-webkit-keyframes placeholderShimmer {
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
}

@keyframes placeholderShimmer {
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
}
</style>