<style scoped>
@import url("assets/css/portfolio.css");
</style>
<template>
    <div class="page">
        <h1>Portfolio</h1>
        <Content title="Web Projects">
            <div class="card-grid">
                <Card
                    v-for="project in projects.websites"
                    :key="project.id"
                    :title="project.title"
                    :image="project.image"
                    :discription="project.discription"
                    :buttons="project.buttons"
                />
            </div>
        </Content>
    </div>
</template>

<script setup>
const { $setTitle } = useNuxtApp();
$setTitle('Portfolio');

const projects = {
    websites: [
        {
            id: 1,
            title: 'EmulatorJS Docs',
            image: '/projects/emulatorjs.org.png',
            discription: 'The official website for the EmulatorJS project',
            buttons: [
                {
                    text: 'View Docs',
                    link: 'https://emulatorjs.org',
                    target: '_blank'
                },
                {
                    text: 'Github',
                    link: 'https://github.com/EmulatorJS/EmulatorJS',
                    target: '_blank'
                }
            ]
        },
        {
            id: 2,
            title: 'Allan Coding',
            image: '/projects/allancoding.dev.png',
            discription: 'My personal portfolio website',
            buttons: [
                {
                    text: 'Github',
                    link: 'https://github.com/allancoding/allancoding.dev',
                    target: '_blank'
                }
            ]
        }
    ]
};
</script>