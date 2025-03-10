<template>
    <component :is="isExternal ? 'a' : 'router-link'" :to="isExternal ? null : link" :href="isExternal ? link : null">
        <button class="button"><slot></slot></button>
    </component>
</template>
<script>
export default {
    props: {
        link: {
            type: String,
            required: false
        }
    },
    computed: {
        isExternal() {
            return this.link && (this.link.startsWith('http://') || this.link.startsWith('https://'));
        }
    }
}
</script>