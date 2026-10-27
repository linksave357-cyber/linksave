import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import { CONFIG } from './lib/config.js'

// Automatically inject Monetag verification tag & MultiTag script if configured
if (typeof document !== 'undefined' && CONFIG?.monetag?.enabled) {
  if (CONFIG.monetag.verificationCode && !document.querySelector('meta[name="monetag"]')) {
    const meta = document.createElement('meta')
    meta.name = 'monetag'
    meta.content = CONFIG.monetag.verificationCode
    document.head.appendChild(meta)
  }

  if (CONFIG.monetag.scriptUrl && !document.querySelector(`script[src="${CONFIG.monetag.scriptUrl}"]`)) {
    const script = document.createElement('script')
    script.src = CONFIG.monetag.scriptUrl
    if (CONFIG.monetag.zoneId) {
      script.setAttribute('data-zone', CONFIG.monetag.zoneId)
    }
    script.async = true
    script.setAttribute('data-cfasync', 'false')
    document.head.appendChild(script)
  }
}

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
} else {
  // Enhance static subpages with converter controls & PWA installation
  document.addEventListener('DOMContentLoaded', () => {
    /** @type {HTMLIFrameElement | null} */
    const iframe = document.querySelector('iframe.iframe-crop')
    const params = new URLSearchParams(window.location.search)
    const rawUrl = params.get('url') || ''
    const rawText = params.get('text') || ''
    const rawTitle = params.get('title') || ''
    let videoUrl = ''

    if (rawUrl && /^https?:\/\//i.test(rawUrl.trim())) {
      videoUrl = rawUrl.trim()
    } else {
      const combined = `${rawText} ${rawTitle}`
      const match = combined.match(/https?:\/\/[^\s]+/i)
      if (match) videoUrl = match[0]
      else if (rawUrl) videoUrl = rawUrl
    }

    if (iframe && videoUrl) {
      iframe.src = `https://cnvmp3.com/v55?url=${encodeURIComponent(videoUrl)}`
    }

    // Refresh Engine button
    document.querySelectorAll('button').forEach(btn => {
      if (btn.textContent.includes('Refresh Engine')) {
        btn.addEventListener('click', () => {
          if (!iframe) return
          const current = iframe.src
          iframe.src = ''
          setTimeout(() => { iframe.src = current }, 150)
        })
      }
    })

    // Expand buttons (Bitrate/Quality, MP3 / MP4)
    let expandTimer = null
    const iframeContainer = iframe?.parentElement
    if (iframeContainer) {
      const expand = () => {
        iframeContainer.classList.remove('h-[200px]', 'sm:h-[185px]')
        iframeContainer.classList.add('h-[350px]', 'sm:h-[320px]')
        if (expandTimer) clearTimeout(expandTimer)
        expandTimer = setTimeout(() => {
          iframeContainer.classList.remove('h-[350px]', 'sm:h-[320px]')
          iframeContainer.classList.add('h-[200px]', 'sm:h-[185px]')
        }, 3000)
      }

      document.querySelectorAll('button').forEach(btn => {
        const text = btn.textContent.trim()
        if (text === 'Bitrate/Quality' || text === 'MP3 / MP4' || text === 'No Watermark HD' || text === 'MP3 / Audio Only' || text === 'Quality / 1080p') {
          btn.addEventListener('click', expand)
        }
      })
    }

    // PWA Install Prompt handling
    let deferredPrompt = null
    const installBtn = document.getElementById('pwa-install-btn')
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      deferredPrompt = e
    })
    if (installBtn) {
      installBtn.addEventListener('click', async () => {
        if (deferredPrompt) {
          deferredPrompt.prompt()
          await deferredPrompt.userChoice
          deferredPrompt = null
        }
      })
    }
  })
}

if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

export default app
