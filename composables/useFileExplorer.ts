import { ref, computed } from 'vue'
import { fileTree, type FileItem } from '~/data/portfolio'

const expandedFolders = ref<Set<string>>(new Set(['src']))
const selectedFile = ref<string | null>(null)

export function useFileExplorer() {
  const files = ref<FileItem[]>(fileTree)

  const toggleFolder = (folderName: string) => {
    if (expandedFolders.value.has(folderName)) {
      expandedFolders.value.delete(folderName)
    } else {
      expandedFolders.value.add(folderName)
    }
  }

  const isFolderExpanded = (folderName: string) => {
    return expandedFolders.value.has(folderName)
  }

  const selectFile = (fileName: string) => {
    selectedFile.value = fileName
  }

  const isFileSelected = (fileName: string) => {
    return selectedFile.value === fileName
  }

  const findFileByView = (view: string): FileItem | null => {
    const searchInTree = (items: FileItem[]): FileItem | null => {
      for (const item of items) {
        if (item.type === 'file' && item.view === view) {
          return item
        }
        if (item.children) {
          const found = searchInTree(item.children)
          if (found) return found
        }
      }
      return null
    }
    return searchInTree(files.value)
  }

  const getFilePath = (fileName: string): string[] => {
    const path: string[] = []

    const searchInTree = (items: FileItem[], currentPath: string[]): boolean => {
      for (const item of items) {
        if (item.name === fileName) {
          path.push(...currentPath, item.name)
          return true
        }
        if (item.children) {
          if (searchInTree(item.children, [...currentPath, item.name])) {
            return true
          }
        }
      }
      return false
    }

    searchInTree(files.value, [])
    return path
  }

  return {
    files,
    expandedFolders,
    selectedFile,
    toggleFolder,
    isFolderExpanded,
    selectFile,
    isFileSelected,
    findFileByView,
    getFilePath
  }
}
