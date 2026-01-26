<script lang="ts" setup>
import { experiences } from '~/data/portfolio'
</script>

<template>
  <div class="flex-1 flex overflow-hidden h-full">
    <!-- Code Editor Panel -->
    <div class="flex-1 overflow-y-auto scrollbar-thin p-2 md:p-6 font-mono text-sm leading-6 relative z-10">
      <div class="code-line">
        <span class="syntax-keyword">interface&nbsp;</span><span class="syntax-class">Experience&nbsp;</span><span class="text-ide-text">{</span>
      </div>
      <div class="code-line">
        <span class="ml-2 syntax-property">company</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-type">string</span><span class="text-ide-text">;</span>
      </div>
      <div class="code-line">
        <span class="ml-2 syntax-property">role</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-type">string</span><span class="text-ide-text">;</span>
      </div>
      <div class="code-line">
        <span class="ml-2 syntax-property">period</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-type">string</span><span class="text-ide-text">;</span>
      </div>
      <div class="code-line">
        <span class="ml-2 syntax-property">technologies</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-type">string[]</span><span class="text-ide-text">;</span>
      </div>
      <div class="code-line">
        <span class="text-ide-text">}</span>
      </div>
      <div class="code-line mb-4"></div>

      <div class="code-line">
        <span class="syntax-keyword">const&nbsp;</span><span class="syntax-variable">experiences</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-class">Experience</span><span class="text-ide-text">[]&nbsp;=&nbsp;[</span>
      </div>

      <template v-for="(exp, index) in experiences" :key="exp.company">
        <div class="code-line">
          <span class="ml-2 text-ide-text">{</span>
        </div>
        <div class="code-line">
          <span class="ml-4 syntax-property">company</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-string">"{{ exp.company }}"</span><span class="text-ide-text">,</span>
        </div>
        <div class="code-line">
          <span class="ml-4 syntax-property">role</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-string">"{{ exp.role }}"</span><span class="text-ide-text">,</span>
        </div>
        <div class="code-line">
          <span class="ml-4 syntax-property">period</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-string">"{{ exp.period }}"</span><span class="text-ide-text">,</span>
        </div>
        <div class="code-line">
          <span class="ml-4 syntax-property">isCurrent</span><span class="text-ide-text">:&nbsp;</span><span class="syntax-keyword">{{ exp.isCurrent }}</span><span class="text-ide-text">,</span>
        </div>
        <div class="code-line">
          <span class="ml-4 syntax-property">technologies</span><span class="text-ide-text">:&nbsp;[</span>
        </div>
        <div class="code-line">
          <span class="ml-6">
            <span v-for="(tech, i) in exp.technologies" :key="tech">
              <span class="syntax-string">"{{ tech }}"</span><span v-if="i < exp.technologies.length - 1" class="text-ide-text">,&nbsp;</span>
            </span>
          </span>
        </div>
        <div class="code-line">
          <span class="ml-4 text-ide-text">],</span>
        </div>
        <div class="code-line">
          <span class="ml-4 syntax-property">contributions</span><span class="text-ide-text">:&nbsp;[</span>
        </div>
        <div v-for="(contrib, i) in exp.contributions.slice(0, 3)" :key="i" class="code-line">
          <span class="ml-6 syntax-string">"{{ contrib }}"</span><span v-if="i < Math.min(exp.contributions.length, 3) - 1" class="text-ide-text">,</span>
        </div>
        <div class="code-line">
          <span class="ml-4 text-ide-text">]</span>
        </div>
        <div class="code-line">
          <span class="ml-2 text-ide-text">}</span><span v-if="index < experiences.length - 1" class="text-ide-text">,</span>
        </div>
      </template>

      <div class="code-line">
        <span class="text-ide-text">];</span>
      </div>
      <div class="code-line mb-4"></div>

      <div class="code-line">
        <span class="syntax-keyword">export&nbsp;</span><span class="syntax-keyword">default&nbsp;</span><span class="syntax-variable">experiences</span><span class="text-ide-text">;</span>
      </div>

      <!-- Cursor -->
      <div class="code-line mt-4">
        <span class="w-2.5 h-5 bg-ide-text animate-pulse inline-block"></span>
      </div>
    </div>

    <!-- Experience Preview Panel -->
    <div class="w-96 glass-panel hidden xl:flex flex-col z-20 shadow-2xl">
      <div class="h-8 border-b border-ide-border px-4 flex items-center justify-between text-xs font-bold text-ide-text uppercase tracking-wider bg-ide-activity/30">
        <span class="flex items-center gap-2">
          <span class="material-symbols-outlined text-sm">work</span>
          Experience Preview
        </span>
      </div>

      <div class="flex-1 p-6 overflow-y-auto font-sans scrollbar-thin">
        <div class="space-y-6">
          <div
            v-for="exp in experiences"
            :key="exp.company"
            class="bg-ide-activity/30 border border-ide-border rounded-lg p-4 transition-all hover:border-ide-cyan/50"
          >
            <!-- Header -->
            <div class="flex items-start justify-between mb-3">
              <div>
                <h3 class="text-white font-bold">{{ exp.company }}</h3>
                <p class="text-ide-cyan text-sm">{{ exp.role }}</p>
              </div>
              <span
                v-if="exp.isCurrent"
                class="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded border border-green-500/30"
              >
                Current
              </span>
            </div>

            <!-- Period -->
            <div class="flex items-center gap-2 text-xs text-ide-text/60 mb-3">
              <span class="material-symbols-outlined text-sm">calendar_today</span>
              {{ exp.period }}
            </div>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-1 mb-3">
              <span
                v-for="tech in exp.technologies"
                :key="tech"
                class="text-[10px] bg-ide-bg px-2 py-0.5 rounded text-ide-text/70"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Key Contributions -->
            <div class="text-xs text-ide-text/60 space-y-1">
              <div
                v-for="(contrib, i) in exp.contributions.slice(0, 2)"
                :key="i"
                class="flex items-start gap-2"
              >
                <span class="text-ide-cyan">•</span>
                <span>{{ contrib }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
