<script setup lang="ts">
  import type { NuxtError } from '#app'
  
  const props = defineProps({
    error: Object as () => NuxtError
  })

  const { $setTitle } = useNuxtApp() as unknown as { $setTitle: (title: string) => void };
  $setTitle(props.error?.statusCode?.toString() || 'Error');
</script>
<template>
  <canvas id="cnv"></canvas>
  <Navbar />
  <div class="content">
    <div class="home">
      <div class="main">
        <p class="green">{{ error?.statusCode }}, {{ error?.statusMessage }} :(&nbsp;</p>
        <UIButton :link="'/'">Go Home</UIButton>
      </div>
      <Footer/>
    </div>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

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
    top: 0;
    width: 100%;
    padding-top: 60px;
    text-align: center;
    color: #00ff00;
    text-shadow: 0 0 2px #00ff00, 0 0 10px #00ff00;
    transform: scale(1);
    transition: 0.5s all ease-in-out;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
}

.home {
    animation: fadeIn 1s forwards;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: calc(100svh - 110px);
    min-height: calc(100svh - 110px);
    padding-top: 50px;
    position: relative;
    overflow-x: auto;
    mask-image:
        linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) calc(100% - 60px), rgba(0, 0, 0, 0) 100%),
        linear-gradient(to left, black 10px, transparent 11px);
}

.main {
  flex: 1;
}
</style>