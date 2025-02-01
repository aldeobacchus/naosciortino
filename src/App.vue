<script>
import AppHeader from './components/shared/AppHeader.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import { useArticleStore } from './stores/articleStore';

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
  setup() {
    const articleStore = useArticleStore();
    return{articleStore};
  },
  methods :{
    updateView(view){
      this.view = view;
    }
  }
}
</script>

<template>
  <div class="font-PPSupplyMono-Ultralight">
   

    <!-- App Header -->
    <AppHeader class="fixed top-0 left-0 w-full"  @viewSelected="updateView"/>

    <!--+++ THE DIFFERENTS VIEWS +++-->

    <!-- Home -->
    <Home class="pt-24" v-if="view === 'home'"/>

    <!-- About -->
    <About class="pt-24" v-else-if="view === 'about'" />

  </div>
  
</template>
