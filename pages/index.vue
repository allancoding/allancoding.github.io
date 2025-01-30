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
                <a href="websites">Websites</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
            <a href="#home" class="logo">
                <img src="/logos/allancoding.png" id="main-logo" alt="Logo">
                Allan Coding!
            </a>
        </div>
        <div class="content">
            <div class="home">
                <h1>allancoding</h1>
                <p>Welcome to my portfolio!
                    All testing and development is done by me, Allan.
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
    useHead({
        script: [
            { src: '/js/matrixEffect.js', defer: true },
            { src: '/js/main.js', defer: true }
        ]
    })
</script>