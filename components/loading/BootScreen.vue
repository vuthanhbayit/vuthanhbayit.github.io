<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import * as THREE from 'three'

const emit = defineEmits<{
  complete: []
}>()

const progress = ref(0)
const currentLogIndex = ref(0)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const isComplete = ref(false)

const logs = [
  '> Initializing render pipeline...',
  '> Loading Vue ecosystem modules...',
  '> Compiling experience.ts...',
  '> Optimizing bundle size...',
  '> Running performance audit...',
  '> Establishing secure connection to mainframe'
]

let animationId: number | null = null
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let globe: THREE.Mesh
let particles: THREE.Points

const initThreeJS = () => {
  if (!canvasRef.value) return

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
  camera.position.z = 2.5

  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    alpha: true,
    antialias: true
  })
  renderer.setSize(300, 300)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Create wireframe globe
  const geometry = new THREE.IcosahedronGeometry(1, 2)
  const material = new THREE.MeshBasicMaterial({
    color: 0x13ec5b,
    wireframe: true,
    transparent: true,
    opacity: 0.6
  })
  globe = new THREE.Mesh(geometry, material)
  scene.add(globe)

  // Create particles
  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = 500
  const posArray = new Float32Array(particlesCount * 3)

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 5
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: 0x13ec5b,
    transparent: true,
    opacity: 0.5
  })

  particles = new THREE.Points(particlesGeometry, particlesMaterial)
  scene.add(particles)

  animate()
}

const animate = () => {
  animationId = requestAnimationFrame(animate)

  if (globe) {
    globe.rotation.x += 0.003
    globe.rotation.y += 0.005
  }

  if (particles) {
    particles.rotation.y += 0.001
  }

  renderer.render(scene, camera)
}

const startProgressAnimation = () => {
  gsap.to(progress, {
    value: 100,
    duration: 4,
    ease: 'power2.out',
    onUpdate: () => {
      const newIndex = Math.floor((progress.value / 100) * logs.length)
      if (newIndex !== currentLogIndex.value && newIndex < logs.length) {
        currentLogIndex.value = newIndex
      }
    },
    onComplete: () => {
      isComplete.value = true
      setTimeout(() => {
        emit('complete')
      }, 500)
    }
  })
}

onMounted(() => {
  initThreeJS()
  startProgressAnimation()
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  if (renderer) {
    renderer.dispose()
  }
})
</script>

<template>
  <div class="relative flex h-screen w-full flex-col bg-background-dark text-white font-display overflow-hidden selection:bg-primary selection:text-black">
    <!-- Background Layer with Tech Grid -->
    <div class="absolute inset-0 z-0 tech-grid opacity-60"></div>

    <!-- Vignette & Glow Overlay -->
    <div class="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050a07_90%)] pointer-events-none"></div>

    <!-- Scanline Effect Overlay -->
    <div class="absolute inset-0 z-50 scanlines pointer-events-none opacity-40"></div>

    <!-- Main Content Wrapper -->
    <div class="layout-container relative z-10 flex h-full grow flex-col justify-between p-6 md:p-12 lg:px-24">
      <!-- Header Section -->
      <header class="flex justify-center w-full">
        <div class="flex items-center gap-3 border border-primary/20 bg-surface-dark/50 backdrop-blur-sm px-6 py-2 rounded-full">
          <span class="material-symbols-outlined text-primary text-sm animate-pulse">terminal</span>
          <h1 class="text-primary/90 tracking-[0.2em] text-xs font-bold">SYSTEM_BOOT // V_T_B_PORTFOLIO</h1>
        </div>
      </header>

      <!-- Center Visual Section (3D Globe) -->
      <main class="flex flex-1 flex-col items-center justify-center relative w-full my-8">
        <!-- Decorative Background Glow -->
        <div class="absolute w-[300px] h-[300px] bg-primary/5 rounded-full blur-[60px] animate-pulse-fast"></div>

        <!-- Rotating HUD Elements -->
        <div class="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
          <!-- Outer Ring -->
          <div class="absolute inset-0 rounded-full border border-dashed border-primary/20 animate-spin-slow"></div>

          <!-- Inner Ring -->
          <div class="absolute inset-8 rounded-full border border-primary/10 animate-spin-reverse-slow border-t-transparent border-l-transparent"></div>

          <!-- Crosshairs -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-full h-[1px] bg-primary/10"></div>
            <div class="h-full w-[1px] bg-primary/10 absolute"></div>
          </div>

          <!-- 3D Globe Canvas -->
          <div class="relative w-32 h-32 md:w-40 md:h-40 z-10 animate-flicker">
            <canvas ref="canvasRef" class="w-full h-full"></canvas>
          </div>

          <!-- Floating Data Points -->
          <div class="absolute -right-12 top-0 flex flex-col items-end gap-1 opacity-60 hidden md:flex">
            <span class="text-[10px] text-primary font-mono">POLY_COUNT: 4,096</span>
            <span class="text-[10px] text-primary/70 font-mono">RENDER_TIME: 12ms</span>
          </div>
          <div class="absolute -left-12 bottom-0 flex flex-col items-start gap-1 opacity-60 hidden md:flex">
            <span class="text-[10px] text-primary font-mono">X: 192.44</span>
            <span class="text-[10px] text-primary/70 font-mono">Y: 884.01</span>
          </div>
        </div>

        <!-- Profile Stats (RAM/CPU) -->
        <div class="flex flex-wrap gap-4 mt-12 justify-center">
          <div class="flex flex-col gap-1 border-l-2 border-primary/30 pl-3">
            <p class="text-white tracking-widest text-lg font-bold leading-none">64GB <span class="text-primary text-xs align-top">OK</span></p>
            <p class="text-primary/50 text-[10px] font-mono leading-none">MEMORY_ALLOCATION</p>
          </div>
          <div class="flex flex-col gap-1 border-l-2 border-primary/30 pl-3">
            <p class="text-white tracking-widest text-lg font-bold leading-none">OPTIMIZED</p>
            <p class="text-primary/50 text-[10px] font-mono leading-none">CPU_THREADS</p>
          </div>
        </div>
      </main>

      <!-- Bottom Loading Section -->
      <footer class="flex flex-col gap-6 w-full max-w-3xl mx-auto">
        <!-- Terminal Output Log -->
        <div class="flex flex-col justify-end h-24 font-mono text-sm pl-2 border-l border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-4 rounded-r-lg">
          <template v-for="(log, index) in logs" :key="index">
            <p
              v-if="index < currentLogIndex"
              class="leading-tight transition-opacity duration-300"
              :class="[
                index < currentLogIndex - 2 ? 'text-primary/30' :
                index < currentLogIndex - 1 ? 'text-primary/50' : 'text-primary/70'
              ]"
            >
              {{ log }}
            </p>
          </template>
          <div v-if="currentLogIndex < logs.length" class="flex items-center gap-2 text-primary leading-tight font-bold mt-1">
            <span class="material-symbols-outlined text-[14px]">chevron_right</span>
            <span>{{ logs[currentLogIndex] }}</span>
            <span class="w-2 h-4 bg-primary animate-pulse ml-1"></span>
          </div>
        </div>

        <!-- Progress Bar Component -->
        <div class="flex flex-col gap-2">
          <div class="flex gap-6 justify-between items-end px-1">
            <p class="text-white text-xs tracking-[0.2em] font-medium leading-normal opacity-80">LOADING_SEQUENCE</p>
            <p class="text-primary text-xl font-bold leading-none font-mono">{{ Math.round(progress) }}%</p>
          </div>
          <!-- Custom Glowing Progress Bar -->
          <div class="relative h-1.5 w-full bg-[#1c2e22] rounded overflow-hidden">
            <div
              class="absolute top-0 left-0 h-full bg-primary shadow-[0_0_15px_#13ec5b] transition-all duration-300 ease-out"
              :style="{ width: `${progress}%` }"
            >
              <div class="absolute right-0 top-0 bottom-0 w-1 bg-white opacity-80 shadow-[0_0_10px_white]"></div>
            </div>
          </div>
        </div>

        <!-- Footer Meta -->
        <div class="flex justify-between items-center pt-2 border-t border-primary/10">
          <p class="text-[#9db9a6] text-[10px] font-normal tracking-wider">v1.0.4 - SECURE CONNECTION ESTABLISHED</p>
          <div class="flex gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
            <span class="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
            <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
