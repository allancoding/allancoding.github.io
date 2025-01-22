
<script setup lang="ts">
  import type { NuxtError } from '#app'
  import { onMounted } from 'vue'
  
  const props = defineProps({
    error: Object as () => NuxtError
  })

  onMounted(() => {
    const script = document.createElement('script')
    script.src = '/404.js'
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
  
<style>
  /* cyrillic-ext */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_SeW4Ep0.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_QOW4Ep0.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_R-W4Ep0.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_S-W4Ep0.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_SuW4Ep0.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_ROW4.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
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
    font-family: "Roboto Mono", monospace;
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
  