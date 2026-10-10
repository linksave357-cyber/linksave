<script>
  import { onMount, onDestroy } from "svelte";
  import { Sparkles, RefreshCw, ShieldAlert } from "lucide-svelte";
  import { CONFIG } from "../lib/config.js";

  let videoUrl = "";
  let customReclipUrl = CONFIG.cnvmp3Url || CONFIG.reclipUrl;
  let isAutoRefreshing = false;
  let isExpanded = false;
  /** @type {ReturnType<typeof setTimeout> | null} */
  let expandTimer = null;

  /** @type {HTMLIFrameElement | null} */
  let iframeRef = null;

  /** @type {any} */
  let deferredPrompt = null;
  let isInstalled = false;
  let showIosInstructions = false;
  let isEdgeUser = false;

  onMount(() => {
    if (typeof window !== "undefined") {
      isEdgeUser = /Edg\//i.test(navigator.userAgent);
      const params = new URLSearchParams(window.location.search);
      const rawUrl = params.get("url") || "";
      const rawText = params.get("text") || "";
      const rawTitle = params.get("title") || "";

      if (rawUrl && /^https?:\/\//i.test(rawUrl.trim())) {
        videoUrl = rawUrl.trim();
      } else {
        const combined = `${rawText} ${rawTitle}`;
        const match = combined.match(/https?:\/\/[^\s]+/i);
        if (match) {
          videoUrl = match[0];
        } else if (rawUrl) {
          videoUrl = rawUrl;
        }
      }

      if (
        window.matchMedia('(display-mode: standalone)').matches ||
        /** @type {any} */ (window.navigator).standalone === true
      ) {
        isInstalled = true;
      }

      const onBeforeInstall = (/** @type {{ preventDefault: () => void; }} */ e) => {
        e.preventDefault();
        deferredPrompt = e;
      };

      const onAppInstalled = () => {
        isInstalled = true;
        deferredPrompt = null;
      };

      window.addEventListener('beforeinstallprompt', onBeforeInstall);
      window.addEventListener('appinstalled', onAppInstalled);

      return () => {
        window.removeEventListener('beforeinstallprompt', onBeforeInstall);
        window.removeEventListener('appinstalled', onAppInstalled);
      };
    }
  });

  async function handleInstallClick() {
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const choice = await deferredPrompt.userChoice;
        if (choice && choice.outcome === 'accepted') {
          isInstalled = true;
        }
        deferredPrompt = null;
      } catch (err) {
        console.error(err);
      }
    } else {
      showIosInstructions = !showIosInstructions;
    }
  }

  function triggerExpand() {
    isExpanded = true;
    if (expandTimer) clearTimeout(expandTimer);
    expandTimer = setTimeout(() => {
      isExpanded = false;
    }, 2500);
  }

  function refreshIframe() {
    if (iframeRef) {
      isAutoRefreshing = true;
      const currentSrc = iframeSrc;
      iframeRef.src = "";
      setTimeout(() => {
        if (iframeRef) iframeRef.src = currentSrc;
        isAutoRefreshing = false;
      }, 150);
    }
  }

  onDestroy(() => {
    if (expandTimer) clearTimeout(expandTimer);
  });

  $: iframeSrc = videoUrl
    ? `${customReclipUrl}${customReclipUrl.includes("?") ? "&" : "?"}url=${encodeURIComponent(videoUrl)}`
    : customReclipUrl;
</script>

<section
  id="downloader"
  class="relative max-w-4xl mx-auto px-0 sm:px-4 pt-3 sm:pt-6 pb-6 sm:pb-12 w-full"
>
  <div
    class="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-25"
  ></div>

  <div
    class="relative bg-slate-900/90 border border-slate-800/90 rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl w-full"
  >
    <div
      class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800/80"
    >
      <div class="flex items-center gap-2.5">
        <div
          class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0"
        >
          <Sparkles class="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </div>
        <div>
          <h2
            class="text-sm sm:text-lg font-extrabold text-white leading-tight flex flex-wrap items-center gap-2"
          >
            <span>LinkSave Converter</span>
            <span
              class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold"
            >
              <span
                class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
              ></span>
              <span>Pro Engine Active</span>
            </span>
          </h2>
          <p class="text-[11px] sm:text-xs text-slate-400">
            Format transcoder &amp; audio extractor for public links
          </p>
        </div>
      </div>
    </div>

    <div class="space-y-3 sm:space-y-4 animate-fade-in">
      <div
        class="flex items-center justify-between text-xs text-slate-400 px-3 py-2 bg-slate-950/60 rounded-xl border border-slate-800/80 gap-2"
      >
        <div class="flex items-center gap-2 min-w-0">
          <span
            class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"
          ></span>
          <span
            class="font-semibold text-slate-200 text-[11px] sm:text-xs truncate"
            >Format Transcoder Engine</span
          >
        </div>

        <button
          on:click={refreshIframe}
          class="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-[10px] sm:text-xs font-medium transition border border-slate-700 hover:bg-slate-700 shrink-0"
        >
          <RefreshCw
            class="w-3 h-3 sm:w-3.5 sm:h-3.5 {isAutoRefreshing
              ? 'animate-spin text-blue-400'
              : ''}"
          />
          <span>Refresh Engine</span>
        </button>
      </div>

      <div
        class="relative w-full {isExpanded ? 'h-[350px] sm:h-[320px]' : 'h-[200px] sm:h-[185px]'} rounded-2xl overflow-hidden bg-[#0A0F1D] border border-slate-800 shadow-2xl group transition-all duration-300 ease-in-out"
      >
        <!-- Seamless top cap bar overlay to blend top edge cleanly into LinkSave design -->
        <div
          class="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-[#0A0F1D] to-transparent z-10 pointer-events-none"
        ></div>

        <iframe
          bind:this={iframeRef}
          src={iframeSrc}
          title="LinkSave Media Engine"
          scrolling="no"
          class="w-full border-0 absolute left-0 overflow-hidden iframe-crop"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups"
          allow="clipboard-write; clipboard-read"
        ></iframe>

        <!-- Seamless bottom cap bar overlay to cover server costs banner -->
        <div
          class="absolute bottom-0 left-0 right-0 h-10 sm:h-12 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/90 to-transparent z-10 pointer-events-none"
        ></div>
      </div>

      <!-- Quick Dropdown Expand Buttons -->
      <div class="grid grid-cols-2 gap-3 pt-1">
        <button
          on:click={triggerExpand}
          type="button"
          class="w-full py-2.5 px-3 rounded-xl border-2 border-cyan-400 bg-slate-950/80 hover:bg-cyan-500/10 text-white font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center active:scale-95 shadow-lg shadow-cyan-500/10 cursor-pointer"
        >
          Bitrate/Quality
        </button>

        <button
          on:click={triggerExpand}
          type="button"
          class="w-full py-2.5 px-3 rounded-xl border-2 border-emerald-500 bg-slate-950/80 hover:bg-emerald-500/10 text-white font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center active:scale-95 shadow-lg shadow-emerald-500/10 cursor-pointer"
        >
          MP3 / MP4
        </button>
      </div>

      <!-- Install LinkSave as App Banner (<1mb size only) -->
      {#if !isInstalled}
        <div
          class="mt-3 p-4 sm:p-5 rounded-2xl bg-black/70 border border-slate-800 shadow-xl text-left transition-all"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 class="text-white font-bold text-sm sm:text-base tracking-tight">
              Install LinkSave as App (<span class="text-emerald-400">&lt;1mb</span> size only)
            </h3>
            <button
              type="button"
              on:click={handleInstallClick}
              class="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#16a34a] hover:bg-[#15803d] active:scale-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-900/30 transition-all cursor-pointer shrink-0"
            >
              Add to Home Screen
            </button>
          </div>

          <div class="border-t border-slate-800/80 my-3"></div>

          <p class="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Install LinkSave on your device for instant access, a full-screen experience, and faster loading times without opening your browser.
          </p>

          {#if showIosInstructions}
            <div
              class="mt-3 p-3 rounded-xl bg-slate-900 border border-slate-700/80 text-xs text-slate-300 flex items-start gap-2.5 animate-fade-in"
            >
              <span class="text-emerald-400 text-base leading-none">📱</span>
              <div>
                <span class="font-semibold text-white">How to Install:</span>
                Tap your browser menu (or the <strong class="text-white">Share</strong> button in Safari), then select <strong class="text-emerald-400">"Add to Home Screen"</strong>.
              </div>
            </div>
          {/if}
        </div>
      {/if}

      <!-- Detected Microsoft Edge Callout Banner -->
      {#if isEdgeUser}
        <div
          class="mt-3 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-950/70 via-slate-900/90 to-indigo-950/70 border border-blue-500/40 shadow-xl text-left transition-all"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                <svg class="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" x2="12" y1="15" y2="3"/>
                </svg>
              </div>
              <div>
                <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider mb-1">
                  Detected Microsoft Edge
                </span>
                <h3 class="text-white font-bold text-sm sm:text-base tracking-tight">
                  Download Videos with 1-Click using LinkSave Extension
                </h3>
              </div>
            </div>

            <a
              href="https://microsoftedge.microsoft.com/addons/detail/linksave-video-audio-/ipneiigdjchdffpkailbdajdihcpgigd"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-600/30 transition-all cursor-pointer shrink-0"
            >
              <span>Get on Edge Add-ons</span>
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>

          <div class="border-t border-slate-800/80 my-3"></div>

          <p class="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Adds a native "Download" button right on YouTube and Instagram videos so you never have to copy-paste URLs.
          </p>
        </div>
      {/if}
    </div>

    <div
      class="mt-4 pt-3 border-t border-slate-800/60 text-center flex items-center justify-center gap-2 text-[10px] sm:text-[11px] text-slate-400"
    >
      <ShieldAlert class="w-3.5 h-3.5 text-amber-400 shrink-0" />
      <span
        >Notice: Please only download media you own or have explicit
        authorization to download.</span
      >
    </div>
  </div>
</section>

<style>
  .iframe-crop {
    top: -418px;
    height: 950px;
    width: 100%;
  }

  @media (max-width: 640px) {
    .iframe-crop {
      top: -310px;
      height: 800px;
      width: 130%;
      transform: scale(0.76);
      transform-origin: top left;
    }
  }
</style>
