// This file is used to manage the differents variables of the projects with pinia and avoid prop drilling
import {defineStore} from 'pinia';

export const useArticleStore = defineStore('article', {
    state : () => ({
        article: null
    }),
    actions: {
        updateArticle(newArticle) {
            this.article = newArticle;
        }
    }
}); 