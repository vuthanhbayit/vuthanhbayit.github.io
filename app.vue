<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref(true)
const showContent = ref(false)

const handleLoadingComplete = () => {
  isLoading.value = false
  setTimeout(() => {
    showContent.value = true
  }, 100)
}

onMounted(() => {
  // Check if user has visited before (skip loading on refresh)
  const hasVisited = sessionStorage.getItem('hasVisited')
  if (hasVisited) {
    isLoading.value = false
    showContent.value = true
  }
})

const onLoadingComplete = () => {
  sessionStorage.setItem('hasVisited', 'true')
  handleLoadingComplete()
}
</script>

<template>
  <div class="h-screen w-screen overflow-hidden bg-ide-bg">
    <!-- Loading Screen -->
    <Transition
      enter-active-class="transition-opacity duration-500"
      leave-active-class="transition-opacity duration-500"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <LoadingBootScreen
        v-if="isLoading"
        @complete="onLoadingComplete"
      />
    </Transition>

    <!-- Main Content -->
    <Transition
      enter-active-class="transition-opacity duration-500"
      enter-from-class="opacity-0"
    >
      <NuxtPage v-if="showContent" />
    </Transition>
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #1e1e1e;
}
</style>
