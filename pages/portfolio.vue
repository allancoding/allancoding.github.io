<style scoped>
@import url("assets/css/portfolio.css");
</style>
<template>
    <div class="page">
        <Content title="Portfolio">
            <p>Nothing to see here yet. Check back later!</p>
        </Content>
    </div>
</template>

<script setup>
const { $setTitle } = useNuxtApp();
$setTitle('Portfolio');
</script>