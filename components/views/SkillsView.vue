<script setup lang="ts">
import { skills } from '~/data/portfolio'
</script>

<template>
  <div class="flex-1 flex overflow-hidden h-full">
    <!-- Code Editor Panel -->
    <div class="flex-1 overflow-y-auto scrollbar-thin p-2 md:p-6 font-mono text-sm leading-6 relative z-10">
      <!-- CSS Variables -->
      <div class="code-line">
        <span class="syntax-comment">/* Portfolio Skills Configuration */</span>
      </div>
      <div class="code-line"></div>
      <div class="code-line">
        <span class="syntax-variable">$experience</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-unit">7years</span><span class="text-ide-text">;</span>
      </div>
      <div class="code-line">
        <span class="syntax-variable">$theme</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-value">dark</span><span class="text-ide-text">;</span>
      </div>
      <div class="code-line">
        <span class="syntax-variable">$main-color</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-value">#4ec9b0</span><span class="text-ide-text">;</span>
      </div>
      <div class="code-line mb-4"></div>

      <!-- Frontend Stack -->
      <div class="code-line">
        <span class="syntax-selector">.frontend-stack</span>&nbsp;<span class="text-ide-text">{</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">framework</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-value">{{ skills.frontend.framework }}</span><span class="text-ide-text">;</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">meta-framework</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-value">{{ skills.frontend.metaFramework }}</span><span class="text-ide-text">;</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">language</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-value">{{ skills.frontend.language }}</span><span class="text-ide-text">;</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">styling</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-value">{{ skills.frontend.styling }}</span><span class="text-ide-text">;</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">state-management</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-value">{{ skills.frontend.stateManagement }}</span><span class="text-ide-text">;</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-keyword">&amp;:hover</span>&nbsp;<span class="text-ide-text">{</span>
      </div>
      <div class="code-line">
        <span class="ml-8 syntax-property">animation</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-value">high-performance&nbsp;0.3s&nbsp;ease</span><span class="text-ide-text">;</span>
      </div>
      <div class="code-line">
        <span class="ml-4 text-ide-text">}</span>
      </div>
      <div class="code-line">
        <span class="text-ide-text">}</span>
      </div>
      <div class="code-line mb-4"></div>

      <!-- SEO Optimization -->
      <div class="code-line">
        <span class="syntax-selector">.seo-optimization</span>&nbsp;<span class="text-ide-text">{</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">core-web-vitals</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-unit">{{ skills.seo.coreWebVitals }}</span><span class="text-ide-text">;</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">performance-first</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-keyword">true</span><span class="text-ide-text">;</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">search-console</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-value">mastered</span><span class="text-ide-text">;</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">structured-data</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-function">json-ld()</span><span class="text-ide-text">;</span>
      </div>
      <div class="code-line">
        <span class="text-ide-text">}</span>
      </div>
      <div class="code-line mb-4"></div>

      <!-- Backend Tools -->
      <div class="code-line">
        <span class="syntax-selector">.backend-tools</span>&nbsp;<span class="text-ide-text">{</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">runtime</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-value">{{ skills.backend.runtime }}</span><span class="text-ide-text">;</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">api-architecture</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-value">{{ skills.backend.apiArchitecture }}</span><span class="text-ide-text">;</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">version-control</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-function">git(flow)</span><span class="text-ide-text">;</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">containerization</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-value">{{ skills.backend.containerization }}</span><span class="text-ide-text">;</span>
      </div>
      <div class="code-line">
        <span class="text-ide-text">}</span>
      </div>

      <!-- Cursor -->
      <div class="code-line mt-4">
        <span class="w-2.5 h-5 bg-ide-text animate-pulse inline-block"></span>
      </div>
    </div>

    <!-- Computed Style Panel -->
    <div class="w-96 glass-panel hidden xl:flex flex-col z-20 shadow-2xl">
      <div class="h-8 border-b border-ide-border px-4 flex items-center justify-between text-xs font-bold text-ide-text uppercase tracking-wider bg-ide-activity/30">
        <span class="flex items-center gap-2">
          <span class="material-symbols-outlined text-sm">laptop_chromebook</span>
          Computed Style
        </span>
        <span class="text-[10px] text-ide-text/50">Live Preview</span>
      </div>

      <div class="flex-1 p-6 overflow-y-auto font-sans scrollbar-thin">
        <!-- Frontend Stack -->
        <div class="mb-6">
          <h3 class="text-xs font-bold text-ide-text/40 uppercase mb-3 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-ide-cyan"></span> Frontend Stack
          </h3>
          <div class="bg-ide-activity/30 border border-ide-border rounded-lg p-4 space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <i class="fab fa-vuejs text-green-500 text-xl"></i>
                <span class="text-white font-medium">Vue.js / Nuxt</span>
              </div>
              <span class="text-xs text-ide-cyan bg-ide-cyan/10 px-2 py-0.5 rounded border border-ide-cyan/20">Expert</span>
            </div>
            <div class="w-full bg-ide-bg rounded-full h-1.5 overflow-hidden">
              <div class="bg-gradient-to-r from-green-500 to-emerald-400 h-full rounded-full" style="width: 95%"></div>
            </div>
            <div class="flex items-center justify-between mt-2">
              <div class="flex items-center gap-3">
                <i class="fab fa-js text-yellow-400 text-xl"></i>
                <span class="text-white font-medium">TypeScript</span>
              </div>
            </div>
            <div class="w-full bg-ide-bg rounded-full h-1.5 overflow-hidden">
              <div class="bg-gradient-to-r from-yellow-500 to-yellow-300 h-full rounded-full" style="width: 90%"></div>
            </div>
            <div class="flex gap-2 mt-2 pt-2 border-t border-ide-border/50 flex-wrap">
              <span class="text-[10px] text-ide-text/60 bg-ide-bg px-2 py-1 rounded">Tailwind</span>
              <span class="text-[10px] text-ide-text/60 bg-ide-bg px-2 py-1 rounded">Pinia</span>
              <span class="text-[10px] text-ide-text/60 bg-ide-bg px-2 py-1 rounded">Vite</span>
            </div>
          </div>
        </div>

        <!-- SEO Performance -->
        <div class="mb-6">
          <h3 class="text-xs font-bold text-ide-text/40 uppercase mb-3 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-purple-500"></span> SEO Performance
          </h3>
          <div class="grid grid-cols-2 gap-3">
            <div class="bg-ide-activity/30 border border-ide-border rounded-lg p-3 flex flex-col items-center justify-center relative overflow-hidden group">
              <div class="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors"></div>
              <div class="text-3xl font-mono font-bold text-green-400 mb-1">{{ skills.seo.coreWebVitals }}</div>
              <div class="text-[10px] text-ide-text/60 uppercase">Performance</div>
            </div>
            <div class="bg-ide-activity/30 border border-ide-border rounded-lg p-3 flex flex-col items-center justify-center">
              <div class="text-3xl font-mono font-bold text-ide-cyan mb-1">{{ skills.seo.seoScore }}</div>
              <div class="text-[10px] text-ide-text/60 uppercase">SEO Score</div>
            </div>
          </div>
        </div>

        <!-- Backend & Tools -->
        <div class="mb-6">
          <h3 class="text-xs font-bold text-ide-text/40 uppercase mb-3 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span> Backend & Tools
          </h3>
          <div class="bg-ide-activity/30 border border-ide-border rounded-lg p-4">
            <div class="flex flex-wrap gap-2">
              <div class="flex items-center gap-2 bg-ide-bg px-3 py-1.5 rounded border border-ide-border">
                <i class="fab fa-node text-green-600"></i>
                <span class="text-xs text-ide-text">Node.js</span>
              </div>
              <div class="flex items-center gap-2 bg-ide-bg px-3 py-1.5 rounded border border-ide-border">
                <i class="fab fa-docker text-blue-500"></i>
                <span class="text-xs text-ide-text">Docker</span>
              </div>
              <div class="flex items-center gap-2 bg-ide-bg px-3 py-1.5 rounded border border-ide-border">
                <i class="fab fa-git-alt text-red-500"></i>
                <span class="text-xs text-ide-text">Git Flow</span>
              </div>
              <div class="flex items-center gap-2 bg-ide-bg px-3 py-1.5 rounded border border-ide-border">
                <i class="fas fa-database text-purple-400"></i>
                <span class="text-xs text-ide-text">GraphQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
