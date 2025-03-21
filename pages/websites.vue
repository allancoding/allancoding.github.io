<style scoped>
@import url("assets/css/websites.css");
</style>

<template>
    <div class="page">
        <Content title="Websites">
            <div class="center">
                <p>Not much to see here yet. Check back later!<br>
                My list of websites are not found yet. :)</p>
                <UIButton :link="'/'">Go Home</UIButton>
            </div>
        </Content>
    </div>
</template>

<script setup>
const { $setTitle } = useNuxtApp();
$setTitle('Websites');
</script>