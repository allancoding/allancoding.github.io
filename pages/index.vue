<template>
    <title>Allan Coding!</title>
    <div>
      <canvas id="cnv"></canvas>
      <div class="content">
        <h1>allancoding</h1>
        <p>Welcome to my portfolio!</p>
      </div>
    </div>
  </template>
  <script setup>
    import "~/css/main.css"
    useHead({
        meta: [
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: 'Allan Coding!' },
            { property: 'og:description', content: 'Allancoding is a cool coder!' },
            { property: 'og:url', content: 'https://allancoding.dev/' },
            { property: 'og:image', content: 'https://allancoding.dev/logos/allancoding.png' }
        ],
        script: [
            { src: '/matrixEffect.js', defer: true }
        ]
    })
    </script>
  <style scoped>
  #cnv {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    pointer-events: none;
  }
  
  .content {
    position: fixed;
    z-index: 1;
    text-align: center;
    color: #00ff00;
    text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.65);
  }
  </style>