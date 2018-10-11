<template>
  <div class="container">
  <Search/>
  <user-Main/>

  </div>
</template>

<script>
  import Search from './components/Search.vue'
  import Main from './components/Main.vue'
  export default {
    components: {
      Search,
      UserMain: Main
    }
  }
</script>
<style></style>
