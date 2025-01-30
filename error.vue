
<script setup lang="ts">
  import type { NuxtError } from '#app'
  import { onMounted } from 'vue'
  
  const props = defineProps({
    error: Object as () => NuxtError
  })

  onMounted(() => {
    const script = document.createElement('script')
    script.src = '/js/404.js'
    script.defer = true
    document.body.appendChild(script)
  })
</script>

<template>
    <title>{{ error?.statusCode }} {{ error?.statusMessage }}</title>
    <div id="error" class="container">
      <div class="copy-container center-xy">
        <p class="green">{{ error?.statusCode }}, {{ error?.statusMessage }} :(&nbsp;</p>
        <span class="handle"></span>
      </div>
    </div>
</template>
  
<style scoped>
  .center-xy {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  
  .green {
    color: #30F708;
  }
  
  html, body {
    font-size: 16px;
  }
  
  html {
    box-sizing: border-box;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }
  
  body {
    background-color: #000;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  .container {
    width: 100%;
  }

  #error {
    visibility: hidden;
  }
  
  .copy-container {
    text-align: center;
  }
  
  p {
    color: #101010;
    font-size: 24px;
    letter-spacing: 0.2px;
    margin: 0;
  }
  
  .handle {
    background: #FF0000B6;
    width: 14px;
    height: 30px;
    top: 0;
    left: 0;
    margin-top: 1px;
    position: absolute;
  }
  
  #cb-replay {
    fill: #666;
    width: 20px;
    margin: 15px;
    right: 0;
    bottom: 0;
    position: absolute;
    overflow: inherit;
    cursor: pointer;
  }
  #cb-replay:hover {
    fill: #888;
  }
</style>
  