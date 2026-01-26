<script setup lang="ts">
import { useTabs } from '~/composables/useTabs'

const { tabs, closeTab, setActiveTab } = useTabs()
</script>

<template>
  <div class="flex h-9 bg-ide-tab border-b border-ide-border overflow-x-auto scrollbar-hide">
    <div
      v-for="tab in tabs"
      :key="tab.id"
      class="flex items-center px-3 py-2 min-w-[140px] gap-2 border-r border-ide-border text-xs cursor-pointer group transition-colors"
      :class="[
        tab.isActive
          ? 'bg-ide-bg border-t-2 border-t-ide-cyan text-white'
          : 'bg-ide-tab text-ide-text opacity-60 hover:bg-ide-activity'
      ]"
      @click="setActiveTab(tab.id)"
    >
      <i v-if="tab.icon" :class="[tab.icon, tab.iconClass, 'text-sm']"></i>
      <span class="truncate">{{ tab.name }}</span>
      <span
        class="ml-auto rounded p-0.5 cursor-pointer material-symbols-outlined text-sm transition-opacity"
        :class="[
          tab.isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        ]"
        @click.stop="closeTab(tab.id)"
      >
        close
      </span>
    </div>

    <!-- Empty space indicator when no tabs -->
    <div v-if="tabs.length === 0" class="flex items-center px-4 text-ide-text/40 text-xs">
      No files open
    </div>
  </div>
</template>
