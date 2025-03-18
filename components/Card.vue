<style scoped>
    @import url("assets/css/card.css");
</style>

<template>
    <div class="card">
        <NuxtImg :src="image" sizes="100vw sm:300px md:500px" alt="Card image" format="webp" width="" quality="100" class="card-image" placeholder-class="card-image-blur" :placeholder="[769, 458, 50]" preload/>
        <div class="card-content">
            <h3 v-html="title"></h3>
            <p>{{ discription }}</p>
        </div>
        <div class="buttons">
            <UIButton v-for="button in buttons" :key="button.text" :link="button.link" :linkTarget="button.target" :customClass="'green green-border'" :html="button.text"></UIButton>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        discription: {
            type: String,
            required: true
        },
        buttons: {
            type: Object,
            required: false
        },
    }
}
</script>