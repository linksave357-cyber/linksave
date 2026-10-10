import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

// Determine if this is the root homepage where App.svelte should mount
const cleanPath = window.location.pathname.replace(/^\/linksave\/?/, '/').replace(/\/index\.html$/, '/')
const isSubpage = cleanPath !== '/' && cleanPath !== ''

let app = null

if (!isSubpage) {
  const target = document.getElementById('app') || document.body
  if (target) {
    target.innerHTML = ''
  }
  app = mount(App, {
    target,
  })
}

if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

export default app
