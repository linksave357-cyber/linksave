<script>
  import Downloader from './Downloader.svelte';
  import { Zap, ShieldCheck, Smartphone, Sparkles } from 'lucide-svelte';
</script>

<section id="hero" class="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
  <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-blue-400 text-xs sm:text-sm font-medium mb-6 shadow-md backdrop-blur-sm animate-fade-in">
      <Sparkles class="w-4 h-4 text-blue-400" />
      <span class="text-slate-300">Save Videos. Simply.</span>
      <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
    </div>

    <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-[1.15]">
      ONLINE VIDEO <br class="hidden sm:block" />
      <span class="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
        CONVERTER
      </span>
    </h1>

    <p class="mt-6 text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
      Fast format transcoder to convert public media and extract audio from public links effortlessly.
    </p>

    <div class="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-300">
      <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
        <Zap class="w-4 h-4 text-amber-400" />
        <span>Fast Speed</span>
      </div>
      <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
        <ShieldCheck class="w-4 h-4 text-emerald-400" />
        <span>Simple & Free</span>
      </div>
      <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
        <Smartphone class="w-4 h-4 text-blue-400" />
        <span>Mobile Friendly</span>
      </div>
    </div>

    <div class="mt-10">
      <Downloader />
    </div>
  </div>
</section>
