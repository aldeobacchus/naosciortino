<script>
import { useArticleStore } from '../../stores/articleStore';

export default {
  name: 'AppHeader',
  data(){
    return {
      view: 'home'
    }
  },
  setup() {
    const articleStore = useArticleStore();
    const updateStoreArticle = (article) => {
      articleStore.updateArticle(article)
    }
    return {articleStore, updateStoreArticle}
  },
  methods :{
    updateAbout(){
      console.log("previous : " + this.view);
      if (this.view !== 'about'){
        this.view = 'about';
      } else {
        this.view = 'home';
      }
      console.log("after : " + this.view);
      this.updateView(this.view);
    },
    updateView(view){
      this.$emit('viewSelected', view);
    },
    setHome(){
      if (this.view !== 'home'){
        this.view = 'home';
      }
      this.updateStoreArticle('');
      this.updateView(this.view);
    }
  }
}

</script>

<template>
  <nav id="nav" class="sm:container sm:mx-auto">
    <!-- Header start -->
    <div class="z-10  py-6 flex justify-center items-center gap-[20%]">
        <a @click="setHome">Nao Sciortino</a>
        <div class="flex flex-row gap-8">
            <a @click="updateAbout()">About</a>
            <a>Contact</a>
        </div>
    </div>
  </nav>
   
</template>

<style scoped>

</style>
