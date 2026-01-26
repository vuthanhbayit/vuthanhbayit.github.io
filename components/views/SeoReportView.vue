<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { skills } from '~/data/portfolio'

const logs = [
  { time: '2024-01-15 10:23:45', level: 'INFO', message: 'Starting SEO audit...' },
  { time: '2024-01-15 10:23:46', level: 'INFO', message: 'Analyzing page structure...' },
  { time: '2024-01-15 10:23:47', level: 'SUCCESS', message: 'Meta tags: All present and optimized' },
  { time: '2024-01-15 10:23:48', level: 'SUCCESS', message: 'Open Graph tags: Configured correctly' },
  { time: '2024-01-15 10:23:49', level: 'SUCCESS', message: 'Twitter Cards: Enabled' },
  { time: '2024-01-15 10:23:50', level: 'INFO', message: 'Running Core Web Vitals analysis...' },
  { time: '2024-01-15 10:23:52', level: 'SUCCESS', message: 'LCP (Largest Contentful Paint): 1.2s ✓' },
  { time: '2024-01-15 10:23:53', level: 'SUCCESS', message: 'FID (First Input Delay): 12ms ✓' },
  { time: '2024-01-15 10:23:54', level: 'SUCCESS', message: 'CLS (Cumulative Layout Shift): 0.02 ✓' },
  { time: '2024-01-15 10:23:55', level: 'INFO', message: 'Checking structured data...' },
  { time: '2024-01-15 10:23:56', level: 'SUCCESS', message: 'JSON-LD schema: Valid' },
  { time: '2024-01-15 10:23:57', level: 'SUCCESS', message: 'Sitemap: Generated and indexed' },
  { time: '2024-01-15 10:23:58', level: 'SUCCESS', message: 'Robots.txt: Properly configured' },
  { time: '2024-01-15 10:23:59', level: 'INFO', message: 'Performance analysis complete.' },
  { time: '2024-01-15 10:24:00', level: 'SUCCESS', message: '=== FINAL SCORE: 100/100 ===' },
]

const currentLogIndex = ref(0)
const isComplete = ref(false)
let intervalId: ReturnType<typeof setInterval> | null = null

// Progress từ 0 đến 100 dựa trên số log đã hiển thị
const progress = computed(() => {
  return Math.round((currentLogIndex.value / logs.length) * 100)
})

// Các metrics dựa trên progress
const seoScore = computed(() => Math.round(progress.value))
const performanceScore = computed(() => Math.round(progress.value))
const accessibilityScore = computed(() => Math.round(progress.value * 0.95))
const bestPracticesScore = computed(() => Math.round(progress.value))

// Core Web Vitals progress
const lcpProgress = computed(() => Math.min(progress.value * 1.2, 95))
const fidProgress = computed(() => Math.min(progress.value * 1.1, 98))
const clsProgress = computed(() => Math.min(progress.value * 1.15, 98))

// LCP value (starts at 4s, goes down to 1.2s)
const lcpValue = computed(() => {
  const start = 4.0
  const end = 1.2
  const value = start - ((start - end) * (progress.value / 100))
  return value.toFixed(1)
})

// FID value (starts at 200ms, goes down to 12ms)
const fidValue = computed(() => {
  const start = 200
  const end = 12
  const value = Math.round(start - ((start - end) * (progress.value / 100)))
  return value
})

// CLS value (starts at 0.5, goes down to 0.02)
const clsValue = computed(() => {
  const start = 0.5
  const end = 0.02
  const value = start - ((start - end) * (progress.value / 100))
  return value.toFixed(2)
})

const visibleLogs = computed(() => {
  return logs.slice(0, currentLogIndex.value)
})

const startLogging = () => {
  intervalId = setInterval(() => {
    if (currentLogIndex.value < logs.length) {
      currentLogIndex.value++
    } else {
      isComplete.value = true
      if (intervalId) {
        clearInterval(intervalId)
        intervalId = null
      }
    }
  }, 300) // Mỗi 300ms thêm 1 log
}

onMounted(() => {
  // Bắt đầu sau 500ms
  setTimeout(startLogging, 500)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <div class="flex-1 flex overflow-hidden h-full">
    <!-- Log Output Panel -->
    <div class="flex-1 overflow-y-auto scrollbar-thin p-2 md:p-6 font-mono text-xs leading-5 relative z-10 bg-[#0d1117]">
      <div
        v-for="(log, index) in visibleLogs"
        :key="index"
        class="flex gap-4 hover:bg-white/5 px-2 py-0.5 rounded animate-fade-in"
      >
        <span class="text-ide-text/40 shrink-0">{{ log.time }}</span>
        <span
          class="shrink-0 w-16"
          :class="{
            'text-blue-400': log.level === 'INFO',
            'text-green-400': log.level === 'SUCCESS',
            'text-yellow-400': log.level === 'WARN',
            'text-red-400': log.level === 'ERROR'
          }"
        >
          [{{ log.level }}]
        </span>
        <span
          :class="{
            'text-ide-text/70': log.level === 'INFO',
            'text-green-300': log.level === 'SUCCESS',
            'text-yellow-300': log.level === 'WARN',
            'text-red-300': log.level === 'ERROR'
          }"
        >
          {{ log.message }}
        </span>
      </div>

      <!-- Cursor -->
      <div class="flex items-center gap-2 mt-4 px-2">
        <span class="text-ide-text/40">$</span>
        <span v-if="!isComplete" class="w-2 h-4 bg-ide-text animate-pulse"></span>
        <span v-else class="text-green-400">Audit complete.</span>
      </div>
    </div>

    <!-- SEO Metrics Panel -->
    <div class="w-80 glass-panel hidden xl:flex flex-col z-20 shadow-2xl">
      <div class="h-8 border-b border-ide-border px-4 flex items-center justify-between text-xs font-bold text-ide-text uppercase tracking-wider bg-ide-activity/30">
        <span class="flex items-center gap-2">
          <span class="material-symbols-outlined text-sm">monitoring</span>
          SEO Metrics
        </span>
        <span class="text-[10px] font-normal text-ide-text/50">{{ progress }}%</span>
      </div>

      <div class="flex-1 p-6 overflow-y-auto font-sans scrollbar-thin">
        <!-- Overall Score -->
        <div class="mb-6 text-center">
          <div class="w-32 h-32 mx-auto relative">
            <svg class="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#3e3e42"
                stroke-width="8"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#4ec9b0"
                stroke-width="8"
                stroke-linecap="round"
                :stroke-dasharray="`${seoScore * 2.83} 283`"
                class="transition-all duration-300"
              />
            </svg>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-3xl font-bold text-white transition-all duration-300">{{ seoScore }}</span>
            </div>
          </div>
          <p class="text-xs text-ide-text/60 mt-2">Overall SEO Score</p>
        </div>

        <!-- Core Web Vitals -->
        <div class="mb-6">
          <h3 class="text-xs font-bold text-ide-text/40 uppercase mb-3 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full" :class="isComplete ? 'bg-green-500' : 'bg-yellow-500 animate-pulse'"></span>
            Core Web Vitals
          </h3>
          <div class="space-y-3">
            <div class="bg-ide-activity/30 border border-ide-border rounded p-3">
              <div class="flex justify-between items-center mb-1">
                <span class="text-xs text-ide-text/70">LCP</span>
                <span class="text-xs transition-colors duration-300" :class="progress >= 80 ? 'text-green-400' : 'text-yellow-400'">{{ lcpValue }}s</span>
              </div>
              <div class="w-full bg-ide-bg rounded-full h-1">
                <div
                  class="h-full rounded-full transition-all duration-300"
                  :class="progress >= 80 ? 'bg-green-500' : 'bg-yellow-500'"
                  :style="{ width: `${lcpProgress}%` }"
                ></div>
              </div>
            </div>
            <div class="bg-ide-activity/30 border border-ide-border rounded p-3">
              <div class="flex justify-between items-center mb-1">
                <span class="text-xs text-ide-text/70">FID</span>
                <span class="text-xs transition-colors duration-300" :class="progress >= 70 ? 'text-green-400' : 'text-yellow-400'">{{ fidValue }}ms</span>
              </div>
              <div class="w-full bg-ide-bg rounded-full h-1">
                <div
                  class="h-full rounded-full transition-all duration-300"
                  :class="progress >= 70 ? 'bg-green-500' : 'bg-yellow-500'"
                  :style="{ width: `${fidProgress}%` }"
                ></div>
              </div>
            </div>
            <div class="bg-ide-activity/30 border border-ide-border rounded p-3">
              <div class="flex justify-between items-center mb-1">
                <span class="text-xs text-ide-text/70">CLS</span>
                <span class="text-xs transition-colors duration-300" :class="progress >= 75 ? 'text-green-400' : 'text-yellow-400'">{{ clsValue }}</span>
              </div>
              <div class="w-full bg-ide-bg rounded-full h-1">
                <div
                  class="h-full rounded-full transition-all duration-300"
                  :class="progress >= 75 ? 'bg-green-500' : 'bg-yellow-500'"
                  :style="{ width: `${clsProgress}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Lighthouse Scores -->
        <div class="mb-6">
          <h3 class="text-xs font-bold text-ide-text/40 uppercase mb-3 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full" :class="isComplete ? 'bg-ide-cyan' : 'bg-ide-cyan/50 animate-pulse'"></span>
            Lighthouse
          </h3>
          <div class="grid grid-cols-2 gap-2">
            <div class="bg-ide-activity/30 border border-ide-border rounded p-2 text-center">
              <div
                class="text-xl font-bold transition-all duration-300"
                :class="performanceScore >= 90 ? 'text-green-400' : performanceScore >= 50 ? 'text-yellow-400' : 'text-red-400'"
              >
                {{ performanceScore }}
              </div>
              <div class="text-[10px] text-ide-text/60">Performance</div>
            </div>
            <div class="bg-ide-activity/30 border border-ide-border rounded p-2 text-center">
              <div
                class="text-xl font-bold transition-all duration-300"
                :class="accessibilityScore >= 90 ? 'text-green-400' : accessibilityScore >= 50 ? 'text-yellow-400' : 'text-red-400'"
              >
                {{ accessibilityScore }}
              </div>
              <div class="text-[10px] text-ide-text/60">Accessibility</div>
            </div>
            <div class="bg-ide-activity/30 border border-ide-border rounded p-2 text-center">
              <div
                class="text-xl font-bold transition-all duration-300"
                :class="bestPracticesScore >= 90 ? 'text-green-400' : bestPracticesScore >= 50 ? 'text-yellow-400' : 'text-red-400'"
              >
                {{ bestPracticesScore }}
              </div>
              <div class="text-[10px] text-ide-text/60">Best Practices</div>
            </div>
            <div class="bg-ide-activity/30 border border-ide-border rounded p-2 text-center">
              <div
                class="text-xl font-bold transition-all duration-300"
                :class="seoScore >= 90 ? 'text-green-400' : seoScore >= 50 ? 'text-yellow-400' : 'text-red-400'"
              >
                {{ seoScore }}
              </div>
              <div class="text-[10px] text-ide-text/60">SEO</div>
            </div>
          </div>
        </div>

        <!-- Status -->
        <div
          class="rounded-lg p-3 flex items-center gap-2 transition-all duration-300"
          :class="isComplete ? 'bg-green-500/10 border border-green-500/30' : 'bg-yellow-500/10 border border-yellow-500/30'"
        >
          <span
            class="material-symbols-outlined text-sm"
            :class="isComplete ? 'text-green-400' : 'text-yellow-400 animate-spin'"
          >
            {{ isComplete ? 'check_circle' : 'progress_activity' }}
          </span>
          <span class="text-xs" :class="isComplete ? 'text-green-400' : 'text-yellow-400'">
            {{ isComplete ? 'All checks passed' : 'Running audit...' }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
