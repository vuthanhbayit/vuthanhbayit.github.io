<script setup lang="ts">
import { useFileExplorer } from '~/composables/useFileExplorer'
import { useTabs } from '~/composables/useTabs'
import type { FileItem } from '~/data/portfolio'

const { files, toggleFolder, isFolderExpanded, selectFile, isFileSelected } = useFileExplorer()
const { openTab } = useTabs()

const handleFileClick = (file: FileItem) => {
  if (file.type === 'folder') {
    toggleFolder(file.name)
  } else {
    selectFile(file.name)
    openTab(file)
  }
}
</script>

<template>
  <aside class="w-64 bg-ide-sidebar flex flex-col border-r border-ide-border hidden md:flex font-sans text-xs select-none overflow-hidden">
    <!-- Header -->
    <div class="h-8 px-4 flex items-center justify-between text-xs text-ide-text/60 uppercase tracking-wider shrink-0">
      <span class="font-bold">Explorer</span>
      <span class="material-symbols-outlined text-sm cursor-pointer hover:text-ide-text transition-colors">more_horiz</span>
    </div>

    <!-- File Tree -->
    <div class="flex-1 overflow-y-auto scrollbar-thin">
      <div class="mt-2">
        <!-- Project Root -->
        <div class="px-2 py-1 flex items-center gap-1 hover:bg-ide-activity cursor-pointer font-bold text-ide-text">
          <span class="material-symbols-outlined text-base">expand_more</span>
          <span class="uppercase font-bold text-xs tracking-wide">PORTFOLIO</span>
        </div>

        <!-- File Tree Content -->
        <div class="pl-3">
          <template v-for="item in files" :key="item.name">
            <!-- Folder -->
            <template v-if="item.type === 'folder'">
              <div
                class="px-2 py-1 flex items-center gap-1 hover:bg-ide-activity cursor-pointer text-ide-text"
                @click="handleFileClick(item)"
              >
                <span class="material-symbols-outlined text-base text-gray-500">
                  {{ isFolderExpanded(item.name) ? 'expand_more' : 'chevron_right' }}
                </span>
                <span class="material-symbols-outlined text-base" :class="item.iconClass">folder</span>
                <span>{{ item.name }}</span>
              </div>

              <!-- Folder Children -->
              <div
                v-if="item.children && isFolderExpanded(item.name)"
                class="pl-3 border-l border-ide-border ml-3.5"
              >
                <div
                  v-for="child in item.children"
                  :key="child.name"
                  class="px-2 py-1 flex items-center gap-2 cursor-pointer text-ide-text transition-colors"
                  :class="[
                    isFileSelected(child.name)
                      ? 'bg-[#37373d] text-white'
                      : 'hover:bg-ide-activity'
                  ]"
                  @click="handleFileClick(child)"
                >
                  <i :class="[child.icon, child.iconClass]"></i>
                  <span>{{ child.name }}</span>
                </div>
              </div>
            </template>

            <!-- File -->
            <template v-else>
              <div
                class="px-2 py-1 flex items-center gap-2 ml-4 cursor-pointer text-ide-text transition-colors"
                :class="[
                  isFileSelected(item.name)
                    ? 'bg-[#37373d] text-white'
                    : 'hover:bg-ide-activity'
                ]"
                @click="handleFileClick(item)"
              >
                <i :class="[item.icon, item.iconClass]"></i>
                <span>{{ item.name }}</span>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>

    <!-- Outline Section -->
    <div class="border-t border-ide-border shrink-0">
      <div class="px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-ide-activity">
        <div class="flex items-center gap-1 text-ide-text/80 uppercase font-bold text-[10px]">
          <span class="material-symbols-outlined text-sm">expand_more</span>
          Outline
        </div>
      </div>
      <div class="px-4 pb-4 text-ide-text/70">
        <div class="flex items-center gap-2 py-0.5 hover:text-white cursor-pointer">
          <span class="material-symbols-outlined text-xs text-ide-cyan">person</span>
          <span>profile</span>
        </div>
        <div class="flex items-center gap-2 py-0.5 hover:text-white cursor-pointer">
          <span class="material-symbols-outlined text-xs text-ide-cyan">work</span>
          <span>experience</span>
        </div>
        <div class="flex items-center gap-2 py-0.5 hover:text-white cursor-pointer">
          <span class="material-symbols-outlined text-xs text-ide-cyan">code</span>
          <span>skills</span>
        </div>
      </div>
    </div>
  </aside>
</template>
