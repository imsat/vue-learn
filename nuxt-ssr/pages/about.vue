<template>
  <div>
    <h1>About Page</h1>
    <p>Learn more about our Nuxt SSR example!</p>
  </div>
</template>

<script setup lang="ts">

useSeoMeta({
  title: 'My Amazing Site About Page',
  ogTitle: 'My Amazing Site About Page',
  description: 'This is my amazing site, let me tell you all about it. ',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
