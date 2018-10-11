<template>
<div class="row">
  <div class="card">
  <a href="https://github.com/reactjs" target="_blank">
  <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
  </a>
  <p class="card-text">reactjs</p>
  </div>
  <div class="card">
  <a href="https://github.com/reactjs" target="_blank">
  <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
  </a>
  <p class="card-text">reactjs</p>
  </div>
  <div class="card">
  <a href="https://github.com/reactjs" target="_blank">
  <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
  </a>
  <p class="card-text">reactjs</p>
  </div>
  <div class="card">
  <a href="https://github.com/reactjs" target="_blank">
  <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
  </a>
  <p class="card-text">reactjs</p>
  </div>
  <div class="card">
  <a href="https://github.com/reactjs" target="_blank">
  <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
  </a>
  <p class="card-text">reactjs</p>
  </div>
  </div>
</template>
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App1.vue'
import router from './router'

Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App}, // 映射组件标签
  template: '<App/>', // 指定需要渲染到页面的模板
  router  // 注册路由器
})
