<script>
  import { ExternalLink, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-svelte';

  const EDGE_STORE_URL = 'https://microsoftedge.microsoft.com/addons/detail/linksave-video-audio-/ipneiigdjchdffpkailbdajdihcpgigd';
</script>

<section id="extension" class="py-12 md:py-20 bg-slate-950/80 border-t border-slate-900 relative overflow-hidden">
  <div class="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      
      <!-- Text & Value Prop -->
      <div class="lg:col-span-7 space-y-6 text-left">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold shadow-sm">
          <Sparkles class="w-3.5 h-3.5 text-blue-400" />
          <span>Official Browser Extension</span>
          <span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
        </div>

        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
          LinkSave for <span class="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">Microsoft Edge</span>
        </h2>

        <p class="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
          Prefer downloading videos with zero copy-pasting? Install our verified Microsoft Edge add-on to inject a sleek 1-click Download button directly inside YouTube and Instagram.
        </p>

        <!-- Feature Highlights -->
        <div class="space-y-3 pt-2">
          <div class="flex items-start gap-3">
            <CheckCircle2 class="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <p class="text-xs sm:text-sm text-slate-300">
              <strong class="text-white">YouTube & Shorts 1-Click Button:</strong> Adds a native blue Download button next to video actions for instant HD MP4 and MP3 audio downloads.
            </p>
          </div>

          <div class="flex items-start gap-3">
            <CheckCircle2 class="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <p class="text-xs sm:text-sm text-slate-300">
              <strong class="text-white">Instagram Reels Integration:</strong> Save reels and videos directly to your device with one tap.
            </p>
          </div>

          <div class="flex items-start gap-3">
            <CheckCircle2 class="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <p class="text-xs sm:text-sm text-slate-300">
              <strong class="text-white">100% Free & Verified:</strong> Officially approved and hosted on the Microsoft Edge Add-ons store with automatic updates.
            </p>
          </div>
        </div>

        <!-- CTA Action Row -->
        <div class="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href={EDGE_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-95 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-600/30 transition-all duration-200 cursor-pointer"
          >
            <span>Get on Microsoft Edge Add-ons</span>
            <ExternalLink class="w-4 h-4" />
          </a>

          <div class="flex items-center gap-1.5 text-xs text-slate-400">
            <ShieldCheck class="w-4 h-4 text-blue-400" />
            <span>Version 1.0.0 • Free & Safe</span>
          </div>
        </div>
      </div>

      <!-- Screenshot Preview Card -->
      <div class="lg:col-span-5">
        <a
          href={EDGE_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="block group relative rounded-2xl p-2 bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700/80 shadow-2xl hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
          title="Open LinkSave on Microsoft Edge Add-ons"
        >
          <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 pointer-events-none"></div>
          
          <div class="relative rounded-xl overflow-hidden bg-slate-950">
            <img
              src="/edge-addon-store.png"
              alt="LinkSave - Video & Audio Downloader on Microsoft Edge Add-ons Store"
              class="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-300 pointer-events-none"></div>
          </div>

          <div class="p-3 text-center flex items-center justify-between text-xs text-slate-400">
            <span class="font-medium text-slate-300 flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live on Edge Add-ons
            </span>
            <span class="text-blue-400 group-hover:text-blue-300 font-semibold flex items-center gap-1">
              <span>Install Add-on</span>
              <ExternalLink class="w-3 h-3" />
            </span>
          </div>
        </a>
      </div>

    </div>
  </div>
</section>
