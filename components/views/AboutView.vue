<script lang="ts" setup>
import { profile, experiences } from '~/data/portfolio'
</script>

<template>
  <div class="flex-1 flex overflow-hidden h-full">
    <!-- Code Editor Panel -->
    <div class="flex-1 overflow-y-auto scrollbar-thin p-2 md:p-6 font-mono text-sm leading-6 relative z-10">
      <div class="code-line">
        <span class="syntax-keyword">&#60;template&#62;</span>
      </div>
      <div class="code-line">
        <span class="ml-2 syntax-keyword">&#60;div&nbsp;</span><span class="syntax-property">class</span><span class="text-ide-text">=</span><span class="syntax-string">"profile-card"</span><span class="syntax-keyword">&#62;</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-comment">&#60;!-- Profile Header --&#62;</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-keyword">&#60;header&nbsp;</span><span class="syntax-property">class</span><span class="text-ide-text">=</span><span class="syntax-string">"flex items-center gap-4"</span><span class="syntax-keyword">&#62;</span>
      </div>
      <div class="code-line">
        <span class="ml-6 syntax-keyword">&#60;img&nbsp;</span><span class="syntax-property">:src</span><span class="text-ide-text">=</span><span class="syntax-string">"avatar"</span>&nbsp;<span class="syntax-property">class</span><span class="text-ide-text">=</span><span class="syntax-string">"w-20 h-20 rounded-full"</span>&nbsp;<span class="syntax-keyword">/&#62;</span>
      </div>
      <div class="code-line">
        <span class="ml-6 syntax-keyword">&#60;div&#62;</span>
      </div>
      <div class="code-line">
        <span class="ml-8 syntax-keyword">&#60;h1&#62;</span><span class="text-ide-text">&#123;&#123;&nbsp;name&nbsp;&#125;&#125;</span><span class="syntax-keyword">&#60;/h1&#62;</span>
      </div>
      <div class="code-line">
        <span class="ml-8 syntax-keyword">&#60;p&nbsp;</span><span class="syntax-property">class</span><span class="text-ide-text">=</span><span class="syntax-string">"text-cyan"</span><span class="syntax-keyword">&#62;</span><span class="text-ide-text">&#123;&#123;&nbsp;role&nbsp;&#125;&#125;</span><span class="syntax-keyword">&#60;/p&#62;</span>
      </div>
      <div class="code-line">
        <span class="ml-6 syntax-keyword">&#60;/div&#62;</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-keyword">&#60;/header&#62;</span>
      </div>
      <div class="code-line mb-4">
        <span class="ml-2 syntax-keyword">&#60;/div&#62;</span>
      </div>
      <div class="code-line">
        <span class="syntax-keyword">&#60;/template&#62;</span>
      </div>
      <div class="code-line mb-4"></div>

      <div class="code-line">
        <span class="syntax-keyword">&#60;script&nbsp;</span><span class="syntax-property">setup</span>&nbsp;<span class="syntax-property">lang</span><span class="text-ide-text">=</span><span class="syntax-string">"ts"</span><span class="syntax-keyword">&#62;</span>
      </div>
      <div class="code-line">
        <span class="ml-2 syntax-keyword">const&nbsp;</span><span class="syntax-variable">profile</span>&nbsp;<span class="text-ide-text">=&nbsp;</span><span class="syntax-function">reactive</span><span class="text-ide-text">(&#123;</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">name</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-string">'{{ profile.name }}'</span><span class="text-ide-text">,</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">role</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-string">'{{ profile.role }}'</span><span class="text-ide-text">,</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">location</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-string">'{{ profile.location }}'</span><span class="text-ide-text">,</span>
      </div>
      <div class="code-line">
        <span class="ml-4 syntax-property">experience</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-number">{{ profile.yearsOfExperience }}</span><span class="text-ide-text">,</span>
      </div>
      <div class="code-line">
        <span class="ml-2 text-ide-text">&#125;)</span>
      </div>
      <div class="code-line">
        <span class="syntax-keyword">&#60;/script&#62;</span>
      </div>

      <!-- Cursor -->
      <div class="code-line mt-4">
        <span class="w-2.5 h-5 bg-ide-text animate-pulse inline-block"></span>
      </div>
    </div>

    <!-- Profile Preview Panel -->
    <div class="w-96 glass-panel hidden xl:flex flex-col z-20 shadow-2xl">
      <div class="h-8 border-b border-ide-border px-4 flex items-center justify-between text-xs font-bold text-ide-text uppercase tracking-wider bg-ide-activity/30">
        <span class="flex items-center gap-2">
          <span class="material-symbols-outlined text-sm">preview</span>
          Component Preview
        </span>
      </div>

      <div class="flex-1 p-6 overflow-y-auto font-sans scrollbar-thin">
        <!-- Profile Card Preview -->
        <div class="bg-ide-activity/30 border border-ide-border rounded-lg p-6 mb-6">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-ide-cyan to-green-500 flex items-center justify-center text-2xl font-bold text-white">
              {{ profile.name.charAt(0) }}
            </div>
            <div>
              <h2 class="text-white font-bold text-lg">{{ profile.name }}</h2>
              <p class="text-ide-cyan text-sm">{{ profile.role }}</p>
              <p class="text-ide-text/60 text-xs flex items-center gap-1 mt-1">
                <span class="material-symbols-outlined text-xs">location_on</span>
                {{ profile.location }}
              </p>
            </div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-2 mb-4">
            <div class="text-center p-2 bg-ide-bg rounded">
              <div class="text-xl font-bold text-ide-cyan">{{ profile.yearsOfExperience }}+</div>
              <div class="text-[10px] text-ide-text/60">Years</div>
            </div>
            <div class="text-center p-2 bg-ide-bg rounded">
              <div class="text-xl font-bold text-green-400">50+</div>
              <div class="text-[10px] text-ide-text/60">Projects</div>
            </div>
            <div class="text-center p-2 bg-ide-bg rounded">
              <div class="text-xl font-bold text-yellow-400">100</div>
              <div class="text-[10px] text-ide-text/60">Lighthouse</div>
            </div>
          </div>

          <!-- Bio -->
          <p class="text-xs text-ide-text/70 leading-relaxed">
            {{ profile.bio }}
          </p>
        </div>

        <!-- Timeline -->
        <div>
          <h3 class="text-xs font-bold text-ide-text/40 uppercase mb-3">Career Timeline</h3>
          <div class="space-y-4">
            <div
              v-for="exp in experiences"
              :key="exp.company"
              :class="exp.isCurrent ? 'border-ide-cyan' : 'border-ide-border'"
              class="relative pl-6 border-l-2"
            >
              <div
                :class="exp.isCurrent ? 'bg-ide-cyan' : 'bg-ide-border'"
                class="absolute left-0 top-0 w-3 h-3 rounded-full -translate-x-[7px]"
              ></div>
              <div class="text-xs text-ide-text/50">{{ exp.period }}</div>
              <div class="text-sm text-white font-medium">{{ exp.company }}</div>
              <div class="text-xs text-ide-cyan">{{ exp.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
