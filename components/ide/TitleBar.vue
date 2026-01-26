<script setup lang="ts">
</script>

<template>
  <header class="h-8 bg-ide-activity flex items-center justify-between px-3 select-none text-xs border-b border-ide-border z-30">
    <div class="flex items-center gap-4">
      <!-- Traffic Lights -->
      <div class="flex gap-2 group">
        <div class="w-3 h-3 rounded-full bg-[#ff5f56] group-hover:bg-red-600 transition-colors cursor-pointer"></div>
        <div class="w-3 h-3 rounded-full bg-[#ffbd2e] group-hover:bg-yellow-500 transition-colors cursor-pointer"></div>
        <div class="w-3 h-3 rounded-full bg-[#27c93f] group-hover:bg-green-600 transition-colors cursor-pointer"></div>
      </div>
      <!-- Menu -->
      <div class="text-ide-text opacity-70 flex items-center gap-2">
        <span class="material-symbols-outlined text-sm cursor-pointer hover:opacity-100">menu</span>
        <span>Vu Thanh Bay - Portfolio</span>
      </div>
    </div>

    <!-- Search Bar -->
    <div class="hidden sm:flex w-1/3 max-w-md bg-[#3c3c3c] rounded-md h-5 items-center justify-center text-ide-text/50 border border-ide-border/50 cursor-pointer hover:border-ide-border transition-colors">
      <span class="material-symbols-outlined text-xs mr-2">search</span>
      <span class="text-[11px]">Search files...</span>
      <span class="ml-4 text-[10px] bg-ide-border/50 px-1 rounded">⌘K</span>
    </div>

    <!-- Right Actions -->
    <div class="flex items-center gap-4 text-ide-text opacity-60">
      <span class="hover:text-white cursor-pointer transition-colors"><i class="far fa-window-restore"></i></span>
      <span class="hover:text-white cursor-pointer transition-colors"><i class="fas fa-columns"></i></span>
      <span class="hover:text-white cursor-pointer transition-colors"><i class="far fa-window-maximize"></i></span>
    </div>
  </header>
</template>
