<script lang="ts" setup>
import { profile, skills } from '~/data/portfolio'
</script>

<template>
  <div class="flex-1 flex overflow-hidden h-full">
    <!-- Code Editor Panel -->
    <div class="flex-1 overflow-y-auto scrollbar-thin p-2 md:p-6 font-mono text-sm leading-6 relative z-10">
      <div class="code-line">
        <span class="text-ide-text">{</span>
      </div>
      <div class="code-line">
        <span class="ml-2 syntax-property">"name"</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-string">"@vuthanhbay/portfolio"</span><span class="text-ide-text">,</span>
      </div>
      <div class="code-line">
        <span class="ml-2 syntax-property">"version"</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-string">"7.0.0"</span><span class="text-ide-text">,</span>
      </div>
      <div class="code-line">
        <span class="ml-2 syntax-property">"author"</span><span class="text-ide-text">:&nbsp;{</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">"name"</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-string">"{{ profile.name }}"</span><span class="text-ide-text">,</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">"email"</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-string">"{{ profile.email }}"</span><span class="text-ide-text">,</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">"url"</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-string">"https://{{ profile.github }}"</span>
      </div>
      <div class="code-line">
        <span class="ml-2 text-ide-text">},</span>
      </div>
      <div class="code-line">
        <span class="ml-2 syntax-property">"keywords"</span><span class="text-ide-text">:&nbsp;[</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-string">"vue.js"</span><span class="text-ide-text">,&nbsp;</span><span class="syntax-string">"nuxt.js"</span><span class="text-ide-text">,&nbsp;</span><span class="syntax-string">"typescript"</span><span class="text-ide-text">,</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-string">"frontend"</span><span class="text-ide-text">,&nbsp;</span><span class="syntax-string">"seo"</span><span class="text-ide-text">,&nbsp;</span><span class="syntax-string">"performance"</span>
      </div>
      <div class="code-line">
        <span class="ml-2 text-ide-text">],</span>
      </div>
      <div class="code-line">
        <span class="ml-2 syntax-property">"dependencies"</span><span class="text-ide-text">:&nbsp;{</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">"vue"</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-string">"^3.4.0"</span><span class="text-ide-text">,</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">"nuxt"</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-string">"^3.9.0"</span><span class="text-ide-text">,</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">"typescript"</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-string">"^5.3.0"</span><span class="text-ide-text">,</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">"tailwindcss"</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-string">"^3.4.0"</span><span class="text-ide-text">,</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">"pinia"</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-string">"^2.1.0"</span>
      </div>
      <div class="code-line">
        <span class="ml-2 text-ide-text">},</span>
      </div>
      <div class="code-line">
        <span class="ml-2 syntax-property">"devDependencies"</span><span class="text-ide-text">:&nbsp;{</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">"vitest"</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-string">"^1.2.0"</span><span class="text-ide-text">,</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">"eslint"</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-string">"^8.56.0"</span><span class="text-ide-text">,</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">"prettier"</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-string">"^3.2.0"</span>
      </div>
      <div class="code-line">
        <span class="ml-2 text-ide-text">},</span>
      </div>
      <div class="code-line">
        <span class="ml-2 syntax-property">"engines"</span><span class="text-ide-text">:&nbsp;{</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">"node"</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-string">">=18.0.0"</span>
      </div>
      <div class="code-line">
        <span class="ml-2 text-ide-text">},</span>
      </div>
      <div class="code-line">
        <span class="ml-2 syntax-property">"license"</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-string">"MIT"</span>
      </div>
      <div class="code-line">
        <span class="text-ide-text">}</span>
      </div>

      <!-- Cursor -->
      <div class="code-line mt-4">
        <span class="w-2.5 h-5 bg-ide-text animate-pulse inline-block"></span>
      </div>
    </div>

    <!-- Dependencies Panel -->
    <div class="w-80 glass-panel hidden xl:flex flex-col z-20 shadow-2xl">
      <div class="h-8 border-b border-ide-border px-4 flex items-center justify-between text-xs font-bold text-ide-text uppercase tracking-wider bg-ide-activity/30">
        <span class="flex items-center gap-2">
          <span class="material-symbols-outlined text-sm">inventory_2</span>
          Dependencies
        </span>
      </div>

      <div class="flex-1 p-6 overflow-y-auto font-sans scrollbar-thin">
        <!-- Production Dependencies -->
        <div class="mb-6">
          <h3 class="text-xs font-bold text-ide-text/40 uppercase mb-3 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-green-500"></span> Production
          </h3>
          <div class="space-y-2">
            <div class="flex items-center justify-between bg-ide-activity/30 border border-ide-border rounded px-3 py-2">
              <div class="flex items-center gap-2">
                <i class="fab fa-vuejs text-green-500"></i>
                <span class="text-xs text-white">vue</span>
              </div>
              <span class="text-[10px] text-ide-text/50">^3.4.0</span>
            </div>
            <div class="flex items-center justify-between bg-ide-activity/30 border border-ide-border rounded px-3 py-2">
              <div class="flex items-center gap-2">
                <i class="fas fa-n text-green-400"></i>
                <span class="text-xs text-white">nuxt</span>
              </div>
              <span class="text-[10px] text-ide-text/50">^3.9.0</span>
            </div>
            <div class="flex items-center justify-between bg-ide-activity/30 border border-ide-border rounded px-3 py-2">
              <div class="flex items-center gap-2">
                <i class="fab fa-js text-blue-400"></i>
                <span class="text-xs text-white">typescript</span>
              </div>
              <span class="text-[10px] text-ide-text/50">^5.3.0</span>
            </div>
            <div class="flex items-center justify-between bg-ide-activity/30 border border-ide-border rounded px-3 py-2">
              <div class="flex items-center gap-2">
                <i class="fab fa-css3-alt text-cyan-400"></i>
                <span class="text-xs text-white">tailwindcss</span>
              </div>
              <span class="text-[10px] text-ide-text/50">^3.4.0</span>
            </div>
          </div>
        </div>

        <!-- Package Stats -->
        <div class="mb-6">
          <h3 class="text-xs font-bold text-ide-text/40 uppercase mb-3 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-ide-cyan"></span> Stats
          </h3>
          <div class="bg-ide-activity/30 border border-ide-border rounded-lg p-4 space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-xs text-ide-text/70">Dependencies</span>
              <span class="text-xs text-white font-medium">5</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-xs text-ide-text/70">Dev Dependencies</span>
              <span class="text-xs text-white font-medium">3</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-xs text-ide-text/70">Bundle Size</span>
              <span class="text-xs text-green-400 font-medium">~45kb</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-xs text-ide-text/70">License</span>
              <span class="text-xs text-ide-cyan font-medium">MIT</span>
            </div>
          </div>
        </div>

        <!-- Security -->
        <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-3 flex items-center gap-2">
          <span class="material-symbols-outlined text-green-400 text-sm">verified</span>
          <span class="text-xs text-green-400">0 vulnerabilities found</span>
        </div>
      </div>
    </div>
  </div>
</template>
