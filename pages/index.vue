<script setup lang="ts">
import { onMounted } from 'vue'
import { useFileExplorer } from '~/composables/useFileExplorer'
import { useTabs } from '~/composables/useTabs'

const { files, selectFile } = useFileExplorer()
const { openTab } = useTabs()

// Auto-open a default file on mount (optional)
onMounted(() => {
  // Uncomment to auto-open a file
  // const skillsFile = files.value[0]?.children?.[2]
  // if (skillsFile) {
  //   selectFile(skillsFile.name)
  //   openTab(skillsFile)
  // }
})
</script>

<template>
  <div class="flex flex-col h-screen w-screen bg-ide-bg text-ide-text font-sans text-sm overflow-hidden">
    <!-- Title Bar -->
    <IdeTitleBar />

    <!-- Main Content Area -->
    <div class="flex flex-1 overflow-hidden">
      <!-- Activity Bar -->
      <IdeActivityBar />

      <!-- Sidebar -->
      <IdeSidebar />

      <!-- Editor Area -->
      <IdeEditorArea />
    </div>

    <!-- Status Bar -->
    <IdeStatusBar />
  </div>
</template>
