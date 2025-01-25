<script>
import AppHeader from './components/shared/AppHeader.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    Home,
    About
  },
  data(){
    return {
      view: 'home'
    }
  },
  methods :{
    updateView(view){
      this.view = view;
    }
  }
}
</script>

<template>
  <div class="font-heros-regular">

    <!-- App Header -->
    <AppHeader @viewSelected="updateView"/>

    <!--+++ THE DIFFERENTS VIEWS +++-->

    <!-- Home -->
    <Home v-if="view === 'home'" />

    <!-- About -->
    <About v-else-if="view === 'about'" />

  </div>
  
</template>
