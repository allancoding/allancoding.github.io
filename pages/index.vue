<template>
    <title>Allan Coding!</title>
    <div>
        <canvas id="cnv"></canvas>
        <Navbar/>
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