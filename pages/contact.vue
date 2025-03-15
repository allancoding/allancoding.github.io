<style scoped>
@import url("assets/css/contact.css");
</style>

<template>
    <div class="page">
        <Content title="Contact">
            <div class="center">
                <p>Not much to see here yet. Check back later!</p>
                <p>For now, you can reach me at <a href="mailto:allancoding.dev@gmail.com">allancoding.dev@gmail.com</a>.</p>
                <UIButton :link="'/'">Go Home</UIButton>
            </div>
        </Content>
    </div>
</template>

<script setup>
const { $setTitle } = useNuxtApp();
$setTitle('Contact');
</script>