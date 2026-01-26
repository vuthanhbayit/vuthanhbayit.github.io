<script setup lang="ts">
import { useTabs } from '~/composables/useTabs'

const { activeView, hasOpenTabs } = useTabs()
</script>

<template>
  <main class="flex-1 flex flex-col bg-ide-bg relative blueprint-grid overflow-hidden">
    <!-- Tab Bar -->
    <IdeTabBar />

    <!-- Breadcrumb -->
    <IdeBreadcrumb />

    <!-- Content Area -->
    <div class="flex-1 min-h-0 overflow-hidden">
      <!-- Welcome View when no tabs open -->
      <ViewsWelcomeView v-if="!hasOpenTabs" />

      <!-- Dynamic Views based on active tab -->
      <template v-else>
        <ViewsSkillsView v-if="activeView === 'skills'" />
        <ViewsEnvView v-else-if="activeView === 'env'" />
        <ViewsPackageView v-else-if="activeView === 'package'" />
        <ViewsExperienceView v-else-if="activeView === 'experience'" />
        <ViewsReadmeView v-else-if="activeView === 'readme'" />
        <ViewsHomeView v-else-if="activeView === 'home'" />
        <ViewsSeoReportView v-else-if="activeView === 'seo-report'" />
        <ViewsWelcomeView v-else />
      </template>
    </div>
  </main>
</template>
