<script>
import { useArticleStore } from '../../stores/articleStore';
import { useLinkStore } from '../../stores/linkStore';

export default {
  name: 'AppHeader',
  data(){
    return {
      view: 'home'
    }
  },
  setup() {
    //article store init
    const articleStore = useArticleStore();
    const updateStoreArticle = (article) => {
        articleStore.updateArticle(article)
    }
    //link store init
    const linkStore = useLinkStore();
    const updateStoreLink = (link) => {
        linkStore.updateLink(link)
    }

    return{ articleStore, updateStoreArticle, linkStore, updateStoreLink}
  },
  methods :{
    setAbout(){
      if (this.view !== 'about'){
        this.view = 'about';
      }
      this.updateView(this.view);
    },
    setHome(){
      if (this.view !== 'home'){
        this.view = 'home';
      }
      this.updateStoreArticle('');
      this.updateStoreLink('');
      this.updateView(this.view);
    },
    updateView(view){
      this.$emit('viewSelected', view);
    }
  }
}

</script>

<template>
  <nav id="nav" class="fixed top-0 left-0 w-full h-16 sm:mx-auto bg-white">
    <!-- Header start -->
    <div class="z-10  py-6 flex justify-center items-center gap-[20%]">
        <a @click="setHome">Nao Sciortino</a>
        <div class="flex flex-row gap-8">
            <a @click="setAbout">About</a>
            <a>Contact</a>
        </div>
    </div>
  </nav>
   
</template>

<style scoped>

</style>
