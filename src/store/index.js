import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const $axios = axios.create({
  baseURL: 'http://localhost:3000',
});
export default new Vuex.Store({
  state: {
    posts: [],
    activePost: {},
    loading: false,
    snackbar: {
      show: false,
      text: 'Success !!',
    },
  },
  getters: {
  },
  mutations: {
    updateSnackBarStatus(state, payload) {
      state.snackbar = payload
    },
    updateLoading(state, payload) {
      state.loading = payload
    },
    setAllPosts(state, payload) {
      state.posts = payload
    },
    setActivePost(state, payload) {
      state.activePost = payload
    },
  },
  actions: {
    async getAllPosts({ commit }) {
      commit('updateLoading', true)
      $axios
        .get('/posts')
        .then(
          function (response) {
            commit('setAllPosts', response.data)

          },
          function (error) {
            console.log(error.statusText);
          }
        ).finally(() => {
          commit('updateLoading', false)

        });
    },
    async getPostById({ commit }, id) {
      $axios
        .get('/posts/' + id)
        .then(
          function (response) {
            commit('setActivePost', response.data)
          },
          function (error) {
            console.log(error.statusText);
          }
        );
    },
    async deletePost({ dispatch, commit }, id) {
      commit('updateLoading', true)
      $axios
        .delete('/posts/' + id)
        .then(
          function () {
            dispatch('getAllPosts')
            commit('updateSnackBarStatus', { show: true, text: 'Post deleted successfully' })

          },
          function (error) {
            console.log(error.statusText);
          }
        )
        .finally(() => {
          commit('updateLoading', false)
        });
    },
    async updatePost({ dispatch, commit }, payload) {
      $axios
        .put('/posts/' + payload.id, payload.payload)
        .then(
          function () {
            dispatch('getAllPosts')
            commit('updateSnackBarStatus', { show: true, text: 'Post updated successfully' })
          },
          function (error) {
            console.log(error.statusText);
          }
        );
    },
    async createPost({ dispatch, commit }, payload) {
      $axios
        .post('/posts/', payload)
        .then(
          function () {
            dispatch('getAllPosts')
            commit('updateSnackBarStatus', { show: true, text: 'Post created successfully' })

          },
          function (error) {
            console.log(error.statusText);
          }
        );
    }
  },
})
