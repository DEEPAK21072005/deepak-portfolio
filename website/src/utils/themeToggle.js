/* ==========================================================================
   Theme Toggle — themeToggle.js
   Detects prefers-color-scheme, persists preference in localStorage,
   toggles data-theme on <html>
   ========================================================================== */

const STORAGE_KEY = 'atlas-theme'
const DARK = 'dark'
const LIGHT = 'light'

export function initTheme() {
  const stored = localStorage.getItem(STORAGE_KEY)
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  const initial = stored || (systemDark ? DARK : LIGHT)
  applyTheme(initial)

  // Listen for system theme changes (when no stored preference)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(e.matches ? DARK : LIGHT)
    }
  })
}

export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  document.documentElement.setAttribute('class', theme)

  // Update theme-color meta
  const metaTheme = document.querySelector('meta[name="theme-color"]')
  if (metaTheme) {
    metaTheme.setAttribute('content', theme === DARK ? '#0A0A0F' : '#F7F9FC')
  }
}

export function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || DARK
  const next = current === DARK ? LIGHT : DARK
  applyTheme(next)
  localStorage.setItem(STORAGE_KEY, next)
  return next
}

export function getCurrentTheme() {
  return document.documentElement.getAttribute('data-theme') || DARK
}
