<script setup lang="ts">
import { computed } from 'vue'
import { useTabs } from '~/composables/useTabs'
import { useFileExplorer } from '~/composables/useFileExplorer'

const { activeTab } = useTabs()
const { getFilePath } = useFileExplorer()

const breadcrumbPath = computed(() => {
  if (!activeTab.value) return []
  return getFilePath(activeTab.value.name)
})
</script>

<template>
  <div class="h-6 flex items-center px-4 gap-1 text-xs text-ide-text opacity-60 border-b border-ide-border bg-ide-bg">
    <template v-if="breadcrumbPath.length > 0">
      <template v-for="(segment, index) in breadcrumbPath" :key="index">
        <span class="hover:text-white cursor-pointer transition-colors">{{ segment }}</span>
        <span v-if="index < breadcrumbPath.length - 1" class="material-symbols-outlined text-sm">chevron_right</span>
      </template>
    </template>
    <template v-else>
      <span>Welcome</span>
    </template>
  </div>
</template>
