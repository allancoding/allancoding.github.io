<template>
    <title>Allan Coding!</title>
    <div>
        <canvas id="cnv"></canvas>
        <div class="navbar blur">
            <a href="javascript:void(0);" class="icon" id="navbarIcon" onclick="toggleNavbar()">
                &#9776;
            </a>
            <div class="links" id="navbarLinks">
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
        <div class="content">
            <div class="home">
                <h1>allancoding</h1>
                <p>Welcome to my portfolio!</p>
            </div>
        </div>
    </div>
</template>
<script setup>
    useHead({
        meta: [
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: 'Allan Coding!' },
            { property: 'og:description', content: 'Allancoding is a cool coder!' },
            { property: 'og:url', content: 'https://allancoding.dev/' },
            { property: 'og:image', content: 'https://allancoding.dev/logos/allancoding.png' }
        ],
        script: [
            { src: '/js/matrixEffect.js', defer: true },
            { src: '/js/main.js', defer: true }
        ]
    })
</script>