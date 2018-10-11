<template>
  <div>
<div v-if="!repoUrl">loading</div>
<div v-else>most star reop id <a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script>
 import axios from 'axios'
  export default {
  data (){
  return {
   repoUrl: '',
   repoName: ''
  }
  },
  mounted (){
  //发起请求
  const url = "www.baidu.com"
  this.$http.get(url).then(
  response => {
  const result = response.data
  const mostRepo = result.items[0]
  this.repoUrl = mostRepo.html_url
  this.repoName  = mostRepo.name
  },
  response => {
alert()
  }
  )
  }
  },
  axios.get(url).then(response =>{
   const result = response.data
   const mostRepo = response.items[0]
   this.repoUrl = mostRepo.html_Url
   this.repoName = mostRepo.name
  }).catch(error =>{
   alert("shi bai le ang ")
  })
</script>

<style>

</style>
