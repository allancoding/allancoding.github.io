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