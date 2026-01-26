<script setup lang="ts">
import { profile } from '~/data/portfolio'
</script>

<template>
  <div class="flex-1 flex overflow-hidden h-full">
    <!-- Code Editor Panel -->
    <div class="flex-1 overflow-y-auto scrollbar-thin p-2 md:p-6 font-mono text-sm leading-6 relative z-10">
      <div class="code-line">
        <span class="syntax-comment"># Personal Configuration</span>
      </div>
      <div class="code-line">
        <span class="syntax-comment"># Environment: Production</span>
      </div>
      <div class="code-line mb-4"></div>

      <div class="code-line">
        <span class="syntax-variable">DEVELOPER_NAME</span>=<span class="syntax-string">"{{ profile.name }}"</span>
      </div>
      <div class="code-line">
        <span class="syntax-variable">ROLE</span>=<span class="syntax-string">"{{ profile.role }}"</span>
      </div>
      <div class="code-line">
        <span class="syntax-variable">LOCATION</span>=<span class="syntax-string">"{{ profile.location }}"</span>
      </div>
      <div class="code-line mb-4"></div>

      <div class="code-line">
        <span class="syntax-comment"># Contact Information</span>
      </div>
      <div class="code-line">
        <span class="syntax-variable">EMAIL</span>=<span class="syntax-string">"{{ profile.email }}"</span>
      </div>
      <div class="code-line">
        <span class="syntax-variable">GITHUB_URL</span>=<span class="syntax-string">"https://{{ profile.github }}"</span>
      </div>
      <div class="code-line">
        <span class="syntax-variable">LINKEDIN_URL</span>=<span class="syntax-string">"https://{{ profile.linkedin }}"</span>
      </div>
      <div class="code-line mb-4"></div>

      <div class="code-line">
        <span class="syntax-comment"># Experience Metrics</span>
      </div>
      <div class="code-line">
        <span class="syntax-variable">YEARS_OF_EXPERIENCE</span>=<span class="syntax-number">{{ profile.yearsOfExperience }}</span>
      </div>
      <div class="code-line">
        <span class="syntax-variable">PROJECTS_COMPLETED</span>=<span class="syntax-number">50+</span>
      </div>
      <div class="code-line">
        <span class="syntax-variable">COFFEE_CONSUMED</span>=<span class="syntax-number">∞</span>
      </div>
      <div class="code-line mb-4"></div>

      <div class="code-line">
        <span class="syntax-comment"># Feature Flags</span>
      </div>
      <div class="code-line">
        <span class="syntax-variable">ENABLE_DARK_MODE</span>=<span class="syntax-keyword">true</span>
      </div>
      <div class="code-line">
        <span class="syntax-variable">ENABLE_ANIMATIONS</span>=<span class="syntax-keyword">true</span>
      </div>
      <div class="code-line">
        <span class="syntax-variable">PREFER_VUE</span>=<span class="syntax-keyword">true</span>
      </div>
      <div class="code-line">
        <span class="syntax-variable">OPEN_TO_OPPORTUNITIES</span>=<span class="syntax-keyword">true</span>
      </div>

      <!-- Cursor -->
      <div class="code-line mt-4">
        <span class="w-2.5 h-5 bg-ide-text animate-pulse inline-block"></span>
      </div>
    </div>

    <!-- Security Panel -->
    <div class="w-80 glass-panel hidden xl:flex flex-col z-20 shadow-2xl">
      <div class="h-8 border-b border-ide-border px-4 flex items-center justify-between text-xs font-bold text-ide-text uppercase tracking-wider bg-ide-activity/30">
        <span class="flex items-center gap-2">
          <span class="material-symbols-outlined text-sm">security</span>
          Security Status
        </span>
      </div>

      <div class="flex-1 p-6 overflow-y-auto font-sans scrollbar-thin">
        <!-- Status Indicators -->
        <div class="space-y-4">
          <div class="bg-ide-activity/30 border border-ide-border rounded-lg p-4">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span class="text-white font-medium text-sm">All Systems Operational</span>
            </div>
            <div class="space-y-2 text-xs text-ide-text/70">
              <div class="flex justify-between">
                <span>Environment</span>
                <span class="text-green-400">Secure</span>
              </div>
              <div class="flex justify-between">
                <span>Variables</span>
                <span class="text-ide-cyan">12 loaded</span>
              </div>
              <div class="flex justify-between">
                <span>Secrets</span>
                <span class="text-yellow-400">Hidden</span>
              </div>
            </div>
          </div>

          <!-- Quick Contact -->
          <div class="bg-ide-activity/30 border border-ide-border rounded-lg p-4">
            <h4 class="text-xs font-bold text-ide-text/40 uppercase mb-3">Quick Contact</h4>
            <div class="space-y-3">
              <a
                :href="`mailto:${profile.email}`"
                class="flex items-center gap-3 text-ide-text/70 hover:text-ide-cyan transition-colors"
              >
                <span class="material-symbols-outlined text-sm">mail</span>
                <span class="text-xs">{{ profile.email }}</span>
              </a>
              <a
                :href="`https://${profile.github}`"
                target="_blank"
                class="flex items-center gap-3 text-ide-text/70 hover:text-ide-cyan transition-colors"
              >
                <i class="fab fa-github"></i>
                <span class="text-xs">{{ profile.github }}</span>
              </a>
            </div>
          </div>

          <!-- Availability -->
          <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <div class="flex items-center gap-2 text-green-400">
              <span class="material-symbols-outlined text-sm">check_circle</span>
              <span class="text-sm font-medium">Open to Opportunities</span>
            </div>
            <p class="text-xs text-ide-text/60 mt-2">
              Available for freelance projects and full-time positions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
