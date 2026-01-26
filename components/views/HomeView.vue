<script setup lang="ts">
import { profile, experiences, skills } from '~/data/portfolio'
</script>

<template>
  <div class="h-full overflow-y-auto scrollbar-thin p-6">
    <div class="max-w-6xl mx-auto">
      <!-- Dashboard Header -->
      <div class="flex items-center justify-between mb-8">
        <div>
          <h1 class="text-2xl font-bold text-white">Dashboard</h1>
          <p class="text-ide-text/60 text-sm">Welcome back, {{ profile.name.split(' ')[0] }}</p>
        </div>
        <div class="flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1.5 rounded-full text-xs">
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          All systems operational
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="bg-ide-sidebar border border-ide-border rounded-lg p-4">
          <div class="flex items-center gap-3 mb-2">
            <span class="material-symbols-outlined text-ide-cyan">schedule</span>
            <span class="text-xs text-ide-text/60">Experience</span>
          </div>
          <div class="text-3xl font-bold text-white">{{ profile.yearsOfExperience }}+</div>
          <div class="text-xs text-ide-text/40">years</div>
        </div>
        <div class="bg-ide-sidebar border border-ide-border rounded-lg p-4">
          <div class="flex items-center gap-3 mb-2">
            <span class="material-symbols-outlined text-green-400">folder</span>
            <span class="text-xs text-ide-text/60">Projects</span>
          </div>
          <div class="text-3xl font-bold text-white">50+</div>
          <div class="text-xs text-ide-text/40">completed</div>
        </div>
        <div class="bg-ide-sidebar border border-ide-border rounded-lg p-4">
          <div class="flex items-center gap-3 mb-2">
            <span class="material-symbols-outlined text-yellow-400">speed</span>
            <span class="text-xs text-ide-text/60">Performance</span>
          </div>
          <div class="text-3xl font-bold text-white">{{ skills.seo.coreWebVitals }}</div>
          <div class="text-xs text-ide-text/40">lighthouse</div>
        </div>
        <div class="bg-ide-sidebar border border-ide-border rounded-lg p-4">
          <div class="flex items-center gap-3 mb-2">
            <span class="material-symbols-outlined text-purple-400">code</span>
            <span class="text-xs text-ide-text/60">Commits</span>
          </div>
          <div class="text-3xl font-bold text-white">1.5k+</div>
          <div class="text-xs text-ide-text/40">this year</div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Tech Stack Radar -->
        <div class="bg-ide-sidebar border border-ide-border rounded-lg p-6">
          <h2 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span class="material-symbols-outlined text-ide-cyan">radar</span>
            Tech Stack Radar
          </h2>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between text-sm mb-1">
                <span class="text-ide-text/80">Vue.js / Nuxt</span>
                <span class="text-ide-cyan">95%</span>
              </div>
              <div class="w-full bg-ide-bg rounded-full h-2 overflow-hidden">
                <div class="bg-gradient-to-r from-green-500 to-emerald-400 h-full rounded-full transition-all duration-1000" style="width: 95%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-sm mb-1">
                <span class="text-ide-text/80">TypeScript</span>
                <span class="text-ide-cyan">90%</span>
              </div>
              <div class="w-full bg-ide-bg rounded-full h-2 overflow-hidden">
                <div class="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full transition-all duration-1000" style="width: 90%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-sm mb-1">
                <span class="text-ide-text/80">TailwindCSS</span>
                <span class="text-ide-cyan">92%</span>
              </div>
              <div class="w-full bg-ide-bg rounded-full h-2 overflow-hidden">
                <div class="bg-gradient-to-r from-cyan-500 to-cyan-400 h-full rounded-full transition-all duration-1000" style="width: 92%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-sm mb-1">
                <span class="text-ide-text/80">SEO Optimization</span>
                <span class="text-ide-cyan">95%</span>
              </div>
              <div class="w-full bg-ide-bg rounded-full h-2 overflow-hidden">
                <div class="bg-gradient-to-r from-purple-500 to-purple-400 h-full rounded-full transition-all duration-1000" style="width: 95%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-sm mb-1">
                <span class="text-ide-text/80">Node.js</span>
                <span class="text-ide-cyan">75%</span>
              </div>
              <div class="w-full bg-ide-bg rounded-full h-2 overflow-hidden">
                <div class="bg-gradient-to-r from-green-600 to-green-500 h-full rounded-full transition-all duration-1000" style="width: 75%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="bg-ide-sidebar border border-ide-border rounded-lg p-6">
          <h2 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span class="material-symbols-outlined text-ide-cyan">history</span>
            Career Timeline
          </h2>
          <div class="space-y-4">
            <div
              v-for="exp in experiences"
              :key="exp.company"
              class="flex items-start gap-4 p-3 rounded-lg hover:bg-ide-activity/30 transition-colors"
            >
              <div
                class="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                :class="exp.isCurrent ? 'bg-ide-cyan' : 'bg-ide-activity'"
              >
                {{ exp.company.charAt(0) }}
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <h3 class="text-white font-medium">{{ exp.company }}</h3>
                  <span
                    v-if="exp.isCurrent"
                    class="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded"
                  >
                    Current
                  </span>
                </div>
                <p class="text-sm text-ide-cyan">{{ exp.role }}</p>
                <p class="text-xs text-ide-text/50">{{ exp.period }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <a
          :href="`mailto:${profile.email}`"
          class="bg-ide-sidebar border border-ide-border rounded-lg p-4 flex items-center gap-3 hover:border-ide-cyan transition-colors"
        >
          <span class="material-symbols-outlined text-ide-cyan">mail</span>
          <span class="text-white text-sm">Contact Me</span>
        </a>
        <a
          :href="`https://${profile.github}`"
          target="_blank"
          class="bg-ide-sidebar border border-ide-border rounded-lg p-4 flex items-center gap-3 hover:border-ide-cyan transition-colors"
        >
          <i class="fab fa-github text-ide-cyan"></i>
          <span class="text-white text-sm">GitHub</span>
        </a>
        <a
          :href="`https://${profile.linkedin}`"
          target="_blank"
          class="bg-ide-sidebar border border-ide-border rounded-lg p-4 flex items-center gap-3 hover:border-ide-cyan transition-colors"
        >
          <i class="fab fa-linkedin text-ide-cyan"></i>
          <span class="text-white text-sm">LinkedIn</span>
        </a>
        <a
          href="/cv.pdf"
          download
          class="bg-ide-sidebar border border-ide-border rounded-lg p-4 flex items-center gap-3 hover:border-ide-cyan transition-colors"
        >
          <span class="material-symbols-outlined text-ide-cyan">download</span>
          <span class="text-white text-sm">Download CV</span>
        </a>
      </div>
    </div>
  </div>
</template>
