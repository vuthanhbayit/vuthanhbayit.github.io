<script setup lang="ts">
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
</script>

<template>
  <div class="flex-1 flex overflow-hidden h-full">
    <!-- Log Output Panel -->
    <div class="flex-1 overflow-y-auto scrollbar-thin p-2 md:p-6 font-mono text-xs leading-5 relative z-10 bg-[#0d1117]">
      <div
        v-for="(log, index) in logs"
        :key="index"
        class="flex gap-4 hover:bg-white/5 px-2 py-0.5 rounded"
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
        <span class="w-2 h-4 bg-ide-text animate-pulse"></span>
      </div>
    </div>

    <!-- SEO Metrics Panel -->
    <div class="w-80 glass-panel hidden xl:flex flex-col z-20 shadow-2xl">
      <div class="h-8 border-b border-ide-border px-4 flex items-center justify-between text-xs font-bold text-ide-text uppercase tracking-wider bg-ide-activity/30">
        <span class="flex items-center gap-2">
          <span class="material-symbols-outlined text-sm">monitoring</span>
          SEO Metrics
        </span>
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
                :stroke-dasharray="`${skills.seo.seoScore * 2.83} 283`"
              />
            </svg>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-3xl font-bold text-white">{{ skills.seo.seoScore }}</span>
            </div>
          </div>
          <p class="text-xs text-ide-text/60 mt-2">Overall SEO Score</p>
        </div>

        <!-- Core Web Vitals -->
        <div class="mb-6">
          <h3 class="text-xs font-bold text-ide-text/40 uppercase mb-3 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-green-500"></span> Core Web Vitals
          </h3>
          <div class="space-y-3">
            <div class="bg-ide-activity/30 border border-ide-border rounded p-3">
              <div class="flex justify-between items-center mb-1">
                <span class="text-xs text-ide-text/70">LCP</span>
                <span class="text-xs text-green-400">1.2s</span>
              </div>
              <div class="w-full bg-ide-bg rounded-full h-1">
                <div class="bg-green-500 h-full rounded-full" style="width: 95%"></div>
              </div>
            </div>
            <div class="bg-ide-activity/30 border border-ide-border rounded p-3">
              <div class="flex justify-between items-center mb-1">
                <span class="text-xs text-ide-text/70">FID</span>
                <span class="text-xs text-green-400">12ms</span>
              </div>
              <div class="w-full bg-ide-bg rounded-full h-1">
                <div class="bg-green-500 h-full rounded-full" style="width: 98%"></div>
              </div>
            </div>
            <div class="bg-ide-activity/30 border border-ide-border rounded p-3">
              <div class="flex justify-between items-center mb-1">
                <span class="text-xs text-ide-text/70">CLS</span>
                <span class="text-xs text-green-400">0.02</span>
              </div>
              <div class="w-full bg-ide-bg rounded-full h-1">
                <div class="bg-green-500 h-full rounded-full" style="width: 98%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Lighthouse Scores -->
        <div class="mb-6">
          <h3 class="text-xs font-bold text-ide-text/40 uppercase mb-3 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-ide-cyan"></span> Lighthouse
          </h3>
          <div class="grid grid-cols-2 gap-2">
            <div class="bg-ide-activity/30 border border-ide-border rounded p-2 text-center">
              <div class="text-xl font-bold text-green-400">{{ skills.seo.coreWebVitals }}</div>
              <div class="text-[10px] text-ide-text/60">Performance</div>
            </div>
            <div class="bg-ide-activity/30 border border-ide-border rounded p-2 text-center">
              <div class="text-xl font-bold text-green-400">{{ skills.seo.accessibility }}</div>
              <div class="text-[10px] text-ide-text/60">Accessibility</div>
            </div>
            <div class="bg-ide-activity/30 border border-ide-border rounded p-2 text-center">
              <div class="text-xl font-bold text-green-400">{{ skills.seo.bestPractices }}</div>
              <div class="text-[10px] text-ide-text/60">Best Practices</div>
            </div>
            <div class="bg-ide-activity/30 border border-ide-border rounded p-2 text-center">
              <div class="text-xl font-bold text-green-400">{{ skills.seo.seoScore }}</div>
              <div class="text-[10px] text-ide-text/60">SEO</div>
            </div>
          </div>
        </div>

        <!-- Status -->
        <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-3 flex items-center gap-2">
          <span class="material-symbols-outlined text-green-400 text-sm">check_circle</span>
          <span class="text-xs text-green-400">All checks passed</span>
        </div>
      </div>
    </div>
  </div>
</template>
