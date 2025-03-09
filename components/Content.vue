<style scoped>
    @import url("assets/css/content.css");
</style>
<template>
    <div class="module">
        <h2 v-if="title">{{ title }}</h2>
        <slot></slot>
        <button class="button" v-if="button"> {{ button }}</button>
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
        }
    }
}
</script>