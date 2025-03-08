<style scoped>
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
                        <h2><span id="typing" /></h2>
                    </div>
                </div>
                <div class="page">
                    <Content>
                        <h2>About Me</h2>
                        <p>
                            I'm a software developer who loves to code! I have experience in web development, mobile development, and desktop development. I'm always learning new technologies and improving my skills. I'm passionate about creating software that makes a difference in people's lives.
                        </p>
                    </Content>
                </div>
                <Footer />
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
        strings: ["I'm a software developer", 'I love to code!', 'I know: &#8203;', 'I know: <span class="red">HTML</span>', 'I know: <span class="red">CSS</span>', 'I know: <span class="red">JavaScript</span>', 'I know: <span class="red">Java</span>', 'I know: <span class="red">Python</span>', 'I know: <span class="red">PHP</span>', 'I know: <span class="red">C++</span>', 'I know: <span class="red">Vue</span>', 'I know: <span class="red">Nuxt.js</span>', 'I know: <span class="red">Node.js</span>'],
        typeSpeed: 70,
        backSpeed: 50,
        smartBackspace: true,
        cursorChar: '<span id="cursor-red">|</span>',
        loop: true,
        onStringTyped: (arrayPos) => {
            if (arrayPos > 1 && arrayPos < 12) {
                document.querySelector('#cursor-red').classList.add('red');
            } else {
                document.querySelector('#cursor-red').classList.remove('red');
            }
        },
    })
})
</script>