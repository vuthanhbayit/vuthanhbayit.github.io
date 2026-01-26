<script setup lang="ts">
import { ref, onMounted } from 'vue'

const cubeRotation = ref({ x: -20, y: 45 })

onMounted(() => {
  // Animate cube rotation
  const animate = () => {
    cubeRotation.value.y += 0.5
    requestAnimationFrame(animate)
  }
  animate()
})
</script>

<template>
  <div class="h-full flex flex-col items-center justify-center p-8 text-center">
    <!-- 3D Rotating Cube -->
    <div class="perspective-[800px] mb-12">
      <div
        class="w-32 h-32 relative preserve-3d transition-transform duration-100"
        :style="{
          transform: `rotateX(${cubeRotation.x}deg) rotateY(${cubeRotation.y}deg)`
        }"
      >
        <!-- Front -->
        <div class="absolute w-full h-full bg-ide-cyan/10 border border-ide-cyan/30 flex items-center justify-center transform translateZ-[64px]">
          <i class="fab fa-vuejs text-4xl text-green-500"></i>
        </div>
        <!-- Back -->
        <div class="absolute w-full h-full bg-ide-cyan/10 border border-ide-cyan/30 flex items-center justify-center transform -translateZ-[64px] rotateY-180">
          <i class="fab fa-js text-4xl text-yellow-400"></i>
        </div>
        <!-- Right -->
        <div class="absolute w-full h-full bg-ide-cyan/10 border border-ide-cyan/30 flex items-center justify-center transform translateX-[64px] rotateY-90">
          <i class="fab fa-css3-alt text-4xl text-blue-400"></i>
        </div>
        <!-- Left -->
        <div class="absolute w-full h-full bg-ide-cyan/10 border border-ide-cyan/30 flex items-center justify-center transform -translateX-[64px] -rotateY-90">
          <i class="fab fa-node text-4xl text-green-600"></i>
        </div>
        <!-- Top -->
        <div class="absolute w-full h-full bg-ide-cyan/10 border border-ide-cyan/30 flex items-center justify-center transform translateY-[-64px] rotateX-90">
          <i class="fab fa-html5 text-4xl text-orange-500"></i>
        </div>
        <!-- Bottom -->
        <div class="absolute w-full h-full bg-ide-cyan/10 border border-ide-cyan/30 flex items-center justify-center transform translateY-[64px] -rotateX-90">
          <i class="fab fa-git-alt text-4xl text-red-500"></i>
        </div>
      </div>
    </div>

    <!-- Welcome Text -->
    <h1 class="text-3xl font-bold text-ide-text mb-4">
      Welcome to My Portfolio
    </h1>
    <p class="text-ide-text/60 mb-8 max-w-md">
      Select a file from the explorer to view details about my skills, experience, and projects.
    </p>

    <!-- Keyboard Shortcuts -->
    <div class="grid grid-cols-2 gap-4 text-left text-sm">
      <div class="flex items-center gap-3 text-ide-text/70">
        <span class="bg-ide-activity px-2 py-1 rounded text-xs font-mono">⌘ + P</span>
        <span>Quick Open</span>
      </div>
      <div class="flex items-center gap-3 text-ide-text/70">
        <span class="bg-ide-activity px-2 py-1 rounded text-xs font-mono">⌘ + B</span>
        <span>Toggle Sidebar</span>
      </div>
      <div class="flex items-center gap-3 text-ide-text/70">
        <span class="bg-ide-activity px-2 py-1 rounded text-xs font-mono">⌘ + J</span>
        <span>Toggle Terminal</span>
      </div>
      <div class="flex items-center gap-3 text-ide-text/70">
        <span class="bg-ide-activity px-2 py-1 rounded text-xs font-mono">⌘ + ,</span>
        <span>Settings</span>
      </div>
    </div>

    <!-- Quick Links -->
    <div class="mt-12 flex gap-6">
      <a
        href="https://github.com/vuthanhbayit"
        target="_blank"
        class="flex items-center gap-2 text-ide-cyan hover:text-ide-cyan/80 transition-colors"
      >
        <i class="fab fa-github text-xl"></i>
        <span>GitHub</span>
      </a>
      <a
        href="mailto:vuthanhbayit@gmail.com"
        class="flex items-center gap-2 text-ide-cyan hover:text-ide-cyan/80 transition-colors"
      >
        <span class="material-symbols-outlined">mail</span>
        <span>Email</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.preserve-3d {
  transform-style: preserve-3d;
}

.translateZ-\[64px\] {
  transform: translateZ(64px);
}

.-translateZ-\[64px\] {
  transform: translateZ(-64px);
}

.rotateY-180 {
  transform: translateZ(-64px) rotateY(180deg);
}

.translateX-\[64px\] {
  transform: translateX(64px) rotateY(90deg);
}

.-translateX-\[64px\] {
  transform: translateX(-64px) rotateY(-90deg);
}

.rotateY-90 {
  transform: translateX(64px) rotateY(90deg);
}

.-rotateY-90 {
  transform: translateX(-64px) rotateY(-90deg);
}

.translateY-\[-64px\] {
  transform: translateY(-64px) rotateX(90deg);
}

.translateY-\[64px\] {
  transform: translateY(64px) rotateX(-90deg);
}

.rotateX-90 {
  transform: translateY(-64px) rotateX(90deg);
}

.-rotateX-90 {
  transform: translateY(64px) rotateX(-90deg);
}
</style>
