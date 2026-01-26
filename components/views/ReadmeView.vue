<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { profile, experiences } from '~/data/portfolio'

const activeSection = ref('intro')
const contentRef = ref<HTMLElement | null>(null)

const sections = [
  { id: 'intro', label: profile.name },
  { id: 'competencies', label: 'Core Competencies' },
  { id: 'roadmap', label: 'Career Roadmap' },
  { id: 'setup', label: 'Project Setup' },
  { id: 'contact', label: 'Contact' }
]

const handleScroll = () => {
  if (!contentRef.value) return

  const scrollTop = contentRef.value.scrollTop
  const offset = 150

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i].id)
    if (section) {
      const sectionTop = section.offsetTop - offset
      if (scrollTop >= sectionTop) {
        activeSection.value = sections[i].id
        break
      }
    }
  }
}

const scrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (section && contentRef.value) {
    contentRef.value.scrollTo({
      top: section.offsetTop - 80,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  if (contentRef.value) {
    contentRef.value.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  if (contentRef.value) {
    contentRef.value.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <div class="flex-1 flex overflow-hidden h-full">
    <!-- Markdown Content Panel -->
    <div
      ref="contentRef"
      class="flex-1 overflow-y-auto scrollbar-thin p-8 md:px-12 lg:px-16 max-w-5xl mx-auto w-full"
    >
      <div class="markdown-content">
        <!-- Title -->
        <h1 id="intro"># {{ profile.name }} - {{ profile.role }}</h1>

        <!-- Blockquote -->
        <blockquote>
          Passionate about creating performant, scalable, and visually stunning web applications. Dedicated to clean code, component-driven architecture, and exceptional user experiences.
        </blockquote>

        <!-- Description -->
        <p>
          With <strong>{{ profile.yearsOfExperience }}+ years of experience</strong> in the frontend ecosystem, I specialize in building complex single-page applications and interactive dashboards. My approach combines technical precision with a designer's eye for detail.
        </p>

        <!-- Core Competencies -->
        <h2 id="competencies">Core Competencies</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
          <li><strong class="text-ide-cyan font-mono">Vue.js Ecosystem:</strong> Vue 2/3, Nuxt.js, Pinia, Vuex</li>
          <li><strong class="text-ide-cyan font-mono">Languages:</strong> TypeScript, JavaScript (ES6+), HTML5, CSS3</li>
          <li><strong class="text-ide-cyan font-mono">Styling:</strong> Tailwind CSS, SCSS, Styled Components</li>
          <li><strong class="text-ide-cyan font-mono">Performance:</strong> Core Web Vitals, Lazy Loading, SSR/SSG</li>
          <li><strong class="text-ide-cyan font-mono">Testing:</strong> Jest, Cypress, Vitest</li>
          <li><strong class="text-ide-cyan font-mono">Tools:</strong> Git, Webpack, Vite, Docker, Figma</li>
        </ul>

        <!-- Career Roadmap -->
        <h2 id="roadmap">Career Roadmap</h2>
        <div class="space-y-6 mt-6 ml-2">
          <div
            v-for="(exp, index) in experiences"
            :key="exp.company"
            class="relative pl-8 border-l border-ide-border"
          >
            <div
              :class="[
                index === 0 ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' :
                index === 1 ? 'bg-ide-keyword' : 'bg-ide-string'
              ]"
              class="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full"
            ></div>
            <h3 class="text-lg font-bold text-white font-sans">{{ exp.role }} @ {{ exp.company }}</h3>
            <div class="text-xs text-ide-text/60 font-mono mb-2">{{ exp.period }}</div>
            <p class="text-sm">{{ exp.description }}</p>
          </div>
        </div>

        <!-- Project Setup -->
        <h2 id="setup">Project Setup</h2>
        <p>To view this portfolio locally with full IDE simulation:</p>
        <pre>
<span class="text-ide-comment"># Clone the repository</span>
<span class="text-ide-function">git</span> clone https://github.com/vuthanhbayit/vuthanhbayit.github.io.git

<span class="text-ide-comment"># Navigate to directory</span>
<span class="text-ide-function">cd</span> vuthanhbayit.github.io

<span class="text-ide-comment"># Install dependencies</span>
<span class="text-ide-function">npm</span> install

<span class="text-ide-comment"># Start development server</span>
<span class="text-ide-function">npm</span> run dev
        </pre>

        <!-- Contact -->
        <h2 id="contact">Contact</h2>
        <p>Open for opportunities and interesting collaborations.</p>
        <div class="flex flex-wrap gap-4 mt-6">
          <!-- Download CV Button -->
          <a
            class="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 rounded hover:bg-emerald-500 border border-emerald-500 transition-all no-underline group shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
            download="Vu_Thanh_Bay_CV.pdf"
            href="/cv.pdf"
          >
            <i class="fas fa-download text-white group-hover:animate-bounce transition-colors"></i>
            <span class="font-mono text-sm text-white font-semibold">Download CV</span>
          </a>
          <a
            v-if="profile.email"
            :href="`mailto:${profile.email}`"
            class="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] rounded hover:bg-[#3d3d3d] border border-ide-border transition-colors no-underline group"
          >
            <i class="far fa-envelope text-ide-string group-hover:text-emerald-400 transition-colors"></i>
            <span class="font-mono text-sm">{{ profile.email }}</span>
          </a>
          <a
            class="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] rounded hover:bg-[#3d3d3d] border border-ide-border transition-colors no-underline group"
            href="https://www.linkedin.com/in/vu-thanh-bay"
            target="_blank"
          >
            <i class="fab fa-linkedin text-ide-keyword group-hover:text-white transition-colors"></i>
            <span class="font-mono text-sm">linkedin.com/in/vu-thanh-bay</span>
          </a>
          <a
            class="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] rounded hover:bg-[#3d3d3d] border border-ide-border transition-colors no-underline group"
            href="https://github.com/vuthanhbayit/vuthanhbayit.github.io"
            target="_blank"
          >
            <i class="fab fa-github text-ide-text group-hover:text-white transition-colors"></i>
            <span class="font-mono text-sm">github.com/vuthanhbayit</span>
          </a>
        </div>

        <div class="h-20"></div>
      </div>
    </div>

    <!-- Outline Panel -->
    <aside class="hidden xl:block w-64 bg-ide-sidebar border-l border-ide-border flex-shrink-0">
      <div class="h-full flex flex-col">
        <div class="h-8 flex items-center px-4 text-xs font-bold text-ide-text/60 uppercase tracking-wider select-none">
          Outline
        </div>
        <div class="flex-1 overflow-y-auto p-2 scrollbar-thin">
          <div class="text-xs space-y-0.5 font-mono text-ide-text/70">
            <div
              v-for="section in sections"
              :key="section.id"
              :class="[
                activeSection === section.id
                  ? 'bg-white/5 text-emerald-400 font-bold border-l-2 border-emerald-500'
                  : 'hover:bg-ide-activity border-l-2 border-transparent pl-6',
              ]"
              class="px-2 py-1 rounded cursor-pointer transition-all"
              @click="scrollToSection(section.id)"
            >
              {{ section.label }}
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.markdown-content h1 {
  @apply text-3xl font-bold mb-6 pb-2 border-b border-ide-border text-emerald-400 mt-2 font-mono tracking-tight;
}

.markdown-content h2 {
  @apply text-xl font-bold mt-10 mb-4 text-emerald-400 flex items-center gap-2 font-mono;
}

.markdown-content h2::before {
  content: '##';
  @apply text-ide-comment text-sm font-mono opacity-50;
}

.markdown-content p {
  @apply mb-4 leading-7 text-ide-text/90 font-sans;
}

.markdown-content ul {
  @apply list-disc list-inside mb-6 space-y-2 ml-2;
}

.markdown-content li {
  @apply text-ide-text/90 font-sans;
}

.markdown-content li::marker {
  @apply text-emerald-500;
}

.markdown-content pre {
  @apply bg-[#161616] p-4 rounded-md overflow-x-auto mb-6 border border-ide-border font-mono text-sm shadow-inner;
}

.markdown-content code {
  @apply font-mono text-sm bg-[#2d2d2d] px-1.5 py-0.5 rounded text-orange-300 mx-1;
}

.markdown-content pre code {
  @apply bg-transparent p-0 text-ide-text block mx-0;
}

.markdown-content blockquote {
  @apply border-l-4 border-emerald-500/50 pl-4 py-2 my-6 bg-white/5 italic text-ide-text/80 rounded-r-lg;
}

.markdown-content a {
  @apply text-ide-keyword hover:underline hover:text-ide-cyan transition-colors;
}
</style>
