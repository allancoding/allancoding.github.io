<style>
@import url("assets/css/home.css");
</style>
<template>
    <title>Allan Coding!</title>
    <div>
        <canvas id="cnv"></canvas>
        <Navbar/>
        <div class="content blur" id="content">
            <div class="home">
                <div class="columns">
                    <div class="column main-logo">
                        <img src="/logos/allancoding.png" alt="logo" />
                    </div>
                    <div class="column">
                        <h1>Hello, my name is <span class="red">Allan</span></h1>
                        <h2>I'm a Software Developer
                            <!-- <vue-typed-js :strings="['First text', 'Second Text']">
                            <h1 class="typing"></h1>
                            </vue-typed-js> -->
                        </h2>
                    </div>
                </div>
                <div>
                <p>Welcome to my portfolio!
                            All testing and development is done by me, Allan.
                        </p>
                        <p>Welcome to my portfolio!
                            All testing and development is done by me, Allan.
                        </p>
                        <p>Welcome to my portfolio!
                            All testing and development is done by me, Allan.
                        </p>
                        <p>Welcome to my portfolio!
                            All testing and development is done by me, Allan.
                        </p>
                        
                </div>
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
    // import Vue from 'vue'
    // import VueTypedJs from 'vue-typed-js'

    // Vue.use(VueTypedJs)
</script>