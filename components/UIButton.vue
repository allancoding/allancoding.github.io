<template>
    <component :is="isExternal ? 'a' : 'router-link'" :to="isExternal ? null : link" :href="isExternal ? link : null" :target="isExternal ? linkTarget : null">
        <button :class="['button', customClass || '']" v-html="html" v-if="html"></button>
        <button :class="['button', customClass || '']" v-else><slot></slot></button>
    </component>
</template>
<script>
export default {
    props: {
        link: {
            type: String,
            required: false
        },
        linkTarget: {
            type: String,
            required: false
        },
        customClass: {
            type: String,
            required: false
        },
        html: {
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