<script setup lang="ts">
import { profile, skills } from '~/data/portfolio'
</script>

<template>
  <div class="h-full overflow-y-auto scrollbar-thin">
    <div class="p-6 md:p-12 max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-8 pb-6 border-b border-ide-border">
      <h1 class="text-4xl font-bold text-white mb-2">
        👋 Hi, I'm {{ profile.name }}
      </h1>
      <p class="text-xl text-ide-cyan">{{ profile.role }}</p>
    </div>

    <!-- About Section -->
    <section class="mb-8">
      <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-ide-cyan">person</span>
        About Me
      </h2>
      <p class="text-ide-text/80 leading-relaxed">
        {{ profile.bio }}
      </p>
    </section>

    <!-- Tech Stack -->
    <section class="mb-8">
      <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-ide-cyan">code</span>
        Tech Stack
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div class="bg-ide-activity/30 border border-ide-border rounded-lg p-4 flex items-center gap-3">
          <i class="fab fa-vuejs text-2xl text-green-500"></i>
          <div>
            <div class="text-white font-medium">Vue.js</div>
            <div class="text-xs text-ide-text/60">Framework</div>
          </div>
        </div>
        <div class="bg-ide-activity/30 border border-ide-border rounded-lg p-4 flex items-center gap-3">
          <i class="fas fa-n text-2xl text-green-400"></i>
          <div>
            <div class="text-white font-medium">Nuxt.js</div>
            <div class="text-xs text-ide-text/60">Meta Framework</div>
          </div>
        </div>
        <div class="bg-ide-activity/30 border border-ide-border rounded-lg p-4 flex items-center gap-3">
          <i class="fab fa-js text-2xl text-blue-400"></i>
          <div>
            <div class="text-white font-medium">TypeScript</div>
            <div class="text-xs text-ide-text/60">Language</div>
          </div>
        </div>
        <div class="bg-ide-activity/30 border border-ide-border rounded-lg p-4 flex items-center gap-3">
          <i class="fab fa-css3-alt text-2xl text-cyan-400"></i>
          <div>
            <div class="text-white font-medium">TailwindCSS</div>
            <div class="text-xs text-ide-text/60">Styling</div>
          </div>
        </div>
        <div class="bg-ide-activity/30 border border-ide-border rounded-lg p-4 flex items-center gap-3">
          <i class="fab fa-node text-2xl text-green-600"></i>
          <div>
            <div class="text-white font-medium">Node.js</div>
            <div class="text-xs text-ide-text/60">Runtime</div>
          </div>
        </div>
        <div class="bg-ide-activity/30 border border-ide-border rounded-lg p-4 flex items-center gap-3">
          <i class="fab fa-docker text-2xl text-blue-500"></i>
          <div>
            <div class="text-white font-medium">Docker</div>
            <div class="text-xs text-ide-text/60">Containerization</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="mb-8">
      <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-ide-cyan">analytics</span>
        GitHub Stats
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-ide-activity/30 border border-ide-border rounded-lg p-4 text-center">
          <div class="text-3xl font-bold text-ide-cyan">{{ profile.yearsOfExperience }}+</div>
          <div class="text-xs text-ide-text/60 mt-1">Years Experience</div>
        </div>
        <div class="bg-ide-activity/30 border border-ide-border rounded-lg p-4 text-center">
          <div class="text-3xl font-bold text-green-400">50+</div>
          <div class="text-xs text-ide-text/60 mt-1">Projects</div>
        </div>
        <div class="bg-ide-activity/30 border border-ide-border rounded-lg p-4 text-center">
          <div class="text-3xl font-bold text-yellow-400">100</div>
          <div class="text-xs text-ide-text/60 mt-1">Lighthouse Score</div>
        </div>
        <div class="bg-ide-activity/30 border border-ide-border rounded-lg p-4 text-center">
          <div class="text-3xl font-bold text-purple-400">∞</div>
          <div class="text-xs text-ide-text/60 mt-1">Coffee Cups</div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="mb-8">
      <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-ide-cyan">mail</span>
        Get in Touch
      </h2>
      <div class="flex flex-wrap gap-4">
        <a
          :href="`mailto:${profile.email}`"
          class="flex items-center gap-2 bg-ide-activity/30 border border-ide-border rounded-lg px-4 py-2 hover:border-ide-cyan transition-colors"
        >
          <span class="material-symbols-outlined text-ide-cyan">mail</span>
          <span class="text-white">{{ profile.email }}</span>
        </a>
        <a
          :href="`https://${profile.github}`"
          target="_blank"
          class="flex items-center gap-2 bg-ide-activity/30 border border-ide-border rounded-lg px-4 py-2 hover:border-ide-cyan transition-colors"
        >
          <i class="fab fa-github text-ide-cyan"></i>
          <span class="text-white">GitHub</span>
        </a>
        <a
          :href="`https://${profile.linkedin}`"
          target="_blank"
          class="flex items-center gap-2 bg-ide-activity/30 border border-ide-border rounded-lg px-4 py-2 hover:border-ide-cyan transition-colors"
        >
          <i class="fab fa-linkedin text-ide-cyan"></i>
          <span class="text-white">LinkedIn</span>
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-center text-ide-text/40 text-sm pt-8 border-t border-ide-border">
      <p>Built with ❤️ using Nuxt.js + TailwindCSS</p>
      <p class="mt-1">© 2024 {{ profile.name }}. All rights reserved.</p>
    </footer>
    </div>
  </div>
</template>
