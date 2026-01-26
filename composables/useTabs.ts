import { ref, computed } from 'vue'
import type { FileItem } from '~/data/portfolio'

export interface Tab {
  id: string
  name: string
  view: string
  icon?: string
  iconClass?: string
  isActive: boolean
}

const tabs = ref<Tab[]>([])
const activeTabId = ref<string | null>(null)

export function useTabs() {
  const openTab = (file: FileItem) => {
    if (!file.view) return

    const existingTab = tabs.value.find(t => t.view === file.view)

    if (existingTab) {
      setActiveTab(existingTab.id)
      return
    }

    const newTab: Tab = {
      id: `tab-${Date.now()}`,
      name: file.name,
      view: file.view,
      icon: file.icon,
      iconClass: file.iconClass,
      isActive: false
    }

    tabs.value.push(newTab)
    setActiveTab(newTab.id)
  }

  const closeTab = (tabId: string) => {
    const index = tabs.value.findIndex(t => t.id === tabId)
    if (index === -1) return

    const wasActive = tabs.value[index].isActive
    tabs.value.splice(index, 1)

    if (wasActive && tabs.value.length > 0) {
      const newActiveIndex = Math.min(index, tabs.value.length - 1)
      setActiveTab(tabs.value[newActiveIndex].id)
    } else if (tabs.value.length === 0) {
      activeTabId.value = null
    }
  }

  const setActiveTab = (tabId: string) => {
    tabs.value.forEach(tab => {
      tab.isActive = tab.id === tabId
    })
    activeTabId.value = tabId
  }

  const activeTab = computed(() => {
    return tabs.value.find(t => t.isActive) || null
  })

  const activeView = computed(() => {
    return activeTab.value?.view || null
  })

  const hasOpenTabs = computed(() => {
    return tabs.value.length > 0
  })

  const closeAllTabs = () => {
    tabs.value = []
    activeTabId.value = null
  }

  const closeOtherTabs = (tabId: string) => {
    const keepTab = tabs.value.find(t => t.id === tabId)
    if (keepTab) {
      tabs.value = [keepTab]
      setActiveTab(keepTab.id)
    }
  }

  return {
    tabs,
    activeTabId,
    activeTab,
    activeView,
    hasOpenTabs,
    openTab,
    closeTab,
    setActiveTab,
    closeAllTabs,
    closeOtherTabs
  }
}
