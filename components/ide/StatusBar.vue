<script setup lang="ts">
import { computed } from 'vue'
import { useTabs } from '~/composables/useTabs'

const { activeTab } = useTabs()

const fileType = computed(() => {
  if (!activeTab.value) return 'Plain Text'
  const ext = activeTab.value.name.split('.').pop()?.toLowerCase()
  const types: Record<string, string> = {
    'vue': 'Vue',
    'ts': 'TypeScript',
    'js': 'JavaScript',
    'css': 'CSS',
    'scss': 'SCSS',
    'json': 'JSON',
    'md': 'Markdown',
    'log': 'Log',
    'local': 'Environment'
  }
  return types[ext || ''] || 'Plain Text'
})
</script>

<template>
  <div class="h-6 bg-ide-cyan flex items-center px-3 justify-between text-[11px] font-medium text-black select-none z-30">
    <div class="flex gap-4">
      <!-- Branch -->
      <div class="flex items-center gap-1 cursor-pointer hover:bg-black/10 px-1 rounded transition-colors">
        <span class="material-symbols-outlined text-sm">code</span>
        <span>main*</span>
      </div>
      <!-- Sync Status -->
      <div class="flex items-center gap-1 cursor-pointer hover:bg-black/10 px-1 rounded transition-colors">
        <span class="material-symbols-outlined text-sm">sync</span>
        <span class="hidden sm:inline">Synchronized</span>
      </div>
      <!-- Errors -->
      <div class="flex items-center gap-1 cursor-pointer hover:bg-black/10 px-1 rounded transition-colors">
        <span class="material-symbols-outlined text-sm">error</span>
        <span>0</span>
      </div>
      <!-- Warnings -->
      <div class="flex items-center gap-1 cursor-pointer hover:bg-black/10 px-1 rounded transition-colors">
        <span class="material-symbols-outlined text-sm">warning</span>
        <span>0</span>
      </div>
    </div>

    <div class="flex gap-4">
      <!-- Download CV -->
      <a
        href="/cv.pdf"
        download
        class="flex items-center gap-1 cursor-pointer hover:bg-black/10 px-2 rounded transition-colors bg-black/10"
      >
        <span class="material-symbols-outlined text-sm">download</span>
        <span>Download CV</span>
      </a>
      <!-- Line/Column -->
      <div class="hidden sm:flex items-center gap-1 cursor-pointer hover:bg-black/10 px-1 rounded transition-colors">
        <span>Ln 1, Col 1</span>
      </div>
      <!-- Encoding -->
      <div class="hidden sm:flex items-center gap-1 cursor-pointer hover:bg-black/10 px-1 rounded transition-colors">
        <span>UTF-8</span>
      </div>
      <!-- File Type -->
      <div class="flex items-center gap-1 cursor-pointer hover:bg-black/10 px-1 rounded transition-colors">
        <span>{{ fileType }}</span>
      </div>
      <!-- Notifications -->
      <div class="flex items-center gap-1 cursor-pointer hover:bg-black/10 px-1 rounded transition-colors">
        <span class="material-symbols-outlined text-sm">notifications</span>
      </div>
    </div>
  </div>
</template>
