<script>

export default {
    props: {
        article: {
        type: Object,
        required: true,
        }
    }
};

</script>

<template>

    <div class="flex flex-col mb-8">
        <h4 class="uppercase">{{article.subtitle}}</h4>
        <span class="pl-8 whitespace-pre-wrap">{{article.content}}</span>
    </div>
    
</template>