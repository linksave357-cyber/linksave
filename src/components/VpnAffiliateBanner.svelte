<script>
  import { ShieldCheck, Zap, Globe, Lock, ExternalLink, Sparkles } from 'lucide-svelte';
  import { CONFIG } from '../lib/config.js';

  const vpn = CONFIG?.affiliate?.vpn;
  const isEnabled = vpn?.enabled ?? true;
  const targetUrl = vpn?.url || 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=105436';
</script>

{#if isEnabled}
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 text-left" aria-label="VPN & Privacy Recommendation">
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-indigo-500/30 p-6 sm:p-8 md:p-10 shadow-2xl">
      <!-- Ambient background glow effects -->
      <div class="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        <!-- Feature Description & Benefits -->
        <div class="lg:col-span-8 space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-xs font-semibold">
            <Sparkles class="w-3.5 h-3.5 text-indigo-400" />
            <span>{vpn?.badge || 'Recommended for HD Media & Privacy'}</span>
            <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
          </div>

          <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            {vpn?.title || 'Fast & Anonymous Video Downloads'}
          </h3>

          <p class="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
            {vpn?.subtitle || 'Bypass regional video blocks on YouTube & TikTok while preventing ISP download throttling on high-bitrate MP3 and 4K video streams.'}
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div class="flex items-center gap-2 text-xs text-slate-300">
              <Globe class="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Bypass Geo-Blocks</span>
            </div>
            <div class="flex items-center gap-2 text-xs text-slate-300">
              <Zap class="w-4 h-4 text-amber-400 shrink-0" />
              <span>Stop ISP Throttling</span>
            </div>
            <div class="flex items-center gap-2 text-xs text-slate-300">
              <Lock class="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Private Downloads</span>
            </div>
          </div>
        </div>

        <!-- CTA & Deal Card -->
        <div class="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
          <div class="w-full sm:w-auto min-w-[260px] p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-xl text-center space-y-3">
            <div class="flex items-center justify-between gap-2">
              <span class="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Partner Deal</span>
              <span class="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30">
                {vpn?.discount || '72% OFF'}
              </span>
            </div>

            <a
              href={targetUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              class="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-500/25 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Unlock Max Speed</span>
              <ExternalLink class="w-4 h-4" />
            </a>

            <div class="flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
              <ShieldCheck class="w-3.5 h-3.5 text-emerald-400" />
              <span>30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
{/if}
