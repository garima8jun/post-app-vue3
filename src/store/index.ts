import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    userPosts: [],
    userDetail: undefined,
    error: undefined
  },
  getters: {
    users: state => state.users,
    currentUser: state => state.userDetail,
    userPosts: state => state.userPosts,
  },
  mutations: {
    update_users(state, payload) {
      state.users = payload
    },
    update_posts(state, payload) {
      state.userPosts = payload
    },
    update_error(state, payload) {
      state.error = payload
    },
    update_user(state, payload) {
      state.userDetail = payload
    }
  },
  actions: {
    getUsers(context) {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          context.commit('update_users', res.data);
        })
        .catch(err => {
          context.commit('update_error', err.response)
        })
    },
    getPostsByUserId(context, userId: string) {
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(res => {
          context.commit('update_posts', res.data);
        })
        .catch(err => {
          context.commit('update_error', err.response)
        })
    },
    async getPostById(context, postId: string) {
      return await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => {
          return res.data;
        })
        .catch(err => {
          context.commit('update_error', err.response)
          return undefined
        })
    }
  }
})
