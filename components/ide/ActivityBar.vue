<script setup lang="ts">
import { ref } from 'vue'

const activeItem = ref('explorer')

const menuItems = [
  { id: 'explorer', icon: 'file_copy', title: 'Explorer' },
  { id: 'search', icon: 'search', title: 'Search' },
  { id: 'git', icon: 'call_merge', title: 'Source Control' },
  { id: 'debug', icon: 'bug_report', title: 'Run and Debug' },
  { id: 'extensions', icon: 'extension', title: 'Extensions' }
]

const bottomItems = [
  { id: 'account', icon: 'account_circle', title: 'Account' },
  { id: 'settings', icon: 'settings', title: 'Settings' }
]
</script>

<template>
  <aside class="w-12 bg-ide-activity flex flex-col items-center py-2 gap-1 border-r border-ide-border z-20">
    <!-- Main Menu Items -->
    <div
      v-for="item in menuItems"
      :key="item.id"
      class="p-2 cursor-pointer transition-all"
      :class="[
        activeItem === item.id
          ? 'border-l-2 border-ide-text opacity-100'
          : 'border-l-2 border-transparent opacity-50 hover:opacity-100'
      ]"
      :title="item.title"
      @click="activeItem = item.id"
    >
      <span class="material-symbols-outlined text-2xl text-ide-text">{{ item.icon }}</span>
    </div>

    <!-- Spacer -->
    <div class="flex-1"></div>

    <!-- Bottom Menu Items -->
    <div
      v-for="item in bottomItems"
      :key="item.id"
      class="p-2 border-l-2 border-transparent opacity-50 hover:opacity-100 cursor-pointer transition-all"
      :title="item.title"
    >
      <span class="material-symbols-outlined text-2xl text-ide-text">{{ item.icon }}</span>
    </div>
  </aside>
</template>
