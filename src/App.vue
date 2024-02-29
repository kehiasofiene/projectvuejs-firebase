<template>
  <div id="app">
   <NavbarView />
    <router-view/>
  </div>
</template>

<script>
import NavbarView from './views/NavbarView.vue'
export default {
  components:{
    NavbarView
  }
    
  }
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.min.css';
</style>