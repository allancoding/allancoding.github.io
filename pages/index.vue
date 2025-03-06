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
                        <h2><span id="typing"/></h2>
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
    const typed = useTypedJs()
    onMounted(() => {
    typed('#typing', {
        strings: ["I'm a software developer", 'I love to code!', 'I know: HTML', 'I know: CSS', 'I know: JavaScript', 'I know: JAVA', 'I know: Python', 'I know: PHP', 'I know C++', 'I know: Vue', 'I know: Nuxt.js', 'I know: Node.js'],
        typeSpeed: 90,
        backSpeed: 60,
        smartBackspace: true,
        backDelay: 1000,
        loop: true,
    })
    })
</script>