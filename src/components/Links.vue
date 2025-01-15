<script>
import articlesData from '@/assets/data/content.json'

export default {
    name: 'Links',
    data() {
        return {
            links: articlesData.themes,
            activeLink: null, //Le lien sur lequel l'utilisateur a cliqué sous lequel vont ss'afficher les sublinks
            activeSublinks: null, //Liste des sublinks qui vont s'afficher
            activeArticle: null
        }
    },
    methods: {
        // A method to display the Articles sublinks
        displayArticlesLinks(link) {
            console.log(link);
            this.activeLink = link;
            this.activeSublinks = link.articles;
        },

        //A method to display the Article
        setActiveArticle(article) {
            console.log(article);
            this.activeArticle = article;
            this.$emit('articleSelected', article);
        }
    }
}
</script>

<template>

    <!--Links to display the articles-->
    <section class="inline-flex flex-col">
        <div v-for="link in links" :key="link.id" class="flex flex-col">

            <p @click="displayArticlesLinks(link)" class="cursor-pointer"> {{ link.title }} </p>
            
            <div v-if="activeSublinks && activeLink.id === link.id" class="pl-8 flex flex-col">
                <div v-for="sublink in activeSublinks" :key="sublink.id">
                    <p @click="setActiveArticle(sublink)" :class="['cursor-pointer', { italic : activeArticle === sublink}]"> {{ sublink.title }} </p>
                </div>
            </div>

        </div>
    </section>
    
</template> 