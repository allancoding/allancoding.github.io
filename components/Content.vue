<style scoped>
    @import url("assets/css/content.css");
</style>

<template>
    <div class="module">
        <h2 v-if="title">{{ title }}</h2>
        <h3 class="red">{{ subText }}</h3>
        <div class="space"></div>
        <slot></slot>
        <UIButton v-if="button" :link="buttonLink">{{ button }}</UIButton>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: false
        },
        button: {
            type: String,
            required: false
        },
        buttonLink: {
            type: String,
            required: false
        },
        subText: {
            type: String,
            required: false
        }
    }
}
</script>