<style scoped>
    @import url("assets/css/card.css");
</style>

<template>
    <div class="card">
        <img :src="image" alt="Card image" class="card-image" />
        <div class="card-content">
            <h3>{{ title }}</h3>
            <p>{{ discription }}</p>
        </div>
        <div class="buttons">
            <UIButton v-for="button in buttons" :key="button.text" :link="button.link" :linkTarget="button.target" :customClass="'green green-border'">{{ button.text }}</UIButton>
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