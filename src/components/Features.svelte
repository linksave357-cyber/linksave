<script>
  import { Zap, ShieldCheck, Sparkles, Music, Smartphone, Infinity, Lock } from 'lucide-svelte';

  const features = [
    {
      title: 'High Definition Quality',
      description: 'Save videos in original full resolution up to 1080p Full HD, 2K, and 4K without quality loss.',
      icon: Sparkles,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10'
    },
    {
      title: 'Direct Stream Extraction',
      description: 'Extract audio from public links and convert web video streams with fast cloud processing.',
      icon: Zap,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10'
    },
    {
      title: '100% Free & Unlimited',
      description: 'No hidden subscription fees, no limits on daily video downloads, and no registration required.',
      icon: Infinity,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10'
    },
    {
      title: 'Audio MP3 Converter',
      description: 'Extract audio from public links directly into high-bitrate MP3 format with our format transcoder.',
      icon: Music,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10'
    },
    {
      title: 'Universal Device Support',
      description: 'Works seamlessly across iOS Safari, Android Chrome, Windows, macOS, Linux, and tablets.',
      icon: Smartphone,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10'
    },
    {
      title: 'Safe & Secure Processing',
      description: 'All link analysis happens securely. We do not store your download logs or track personal data.',
      icon: Lock,
      color: 'text-rose-400',
      bg: 'bg-rose-500/10'
    }
  ];
</script>

<section id="features" class="py-16 md:py-24 bg-slate-950/70 border-t border-slate-900">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <span class="text-xs font-extrabold uppercase tracking-widest text-blue-400">Why Choose LinkSave</span>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
        Designed for Speed & Simplicity
      </h2>
      <p class="mt-3 text-base text-slate-400">
        Everything you need to convert & save media videos effortlessly.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each features as feature}
        <div class="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 shadow-md">
          <div class="w-12 h-12 rounded-xl {feature.bg} flex items-center justify-center mb-5">
            <svelte:component this={feature.icon} class="w-6 h-6 {feature.color}" />
          </div>
          <h3 class="text-lg font-bold text-white tracking-tight">
            {feature.title}
          </h3>
          <p class="mt-2 text-sm text-slate-400 leading-relaxed">
            {feature.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
