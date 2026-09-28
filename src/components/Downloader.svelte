<script>
  import { onDestroy } from "svelte";
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
            <span>LinkSave Downloader</span>
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
            Convert & download HD videos & audio streams instantly
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
            >Direct Stream Converter</span
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
