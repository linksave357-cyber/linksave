<script>
  import { CheckCircle2, ShieldAlert } from 'lucide-svelte';

  const platforms = [
    { name: 'Instagram', tag: 'Reels & Stories', bgColor: 'bg-pink-500/10 border-pink-500/20 text-pink-400', icon: '📸', formats: 'MP4 (1080p)' },
    { name: 'TikTok', tag: 'No Watermark', bgColor: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400', icon: '🎵', formats: 'HD Video & MP3' },
    { name: 'X (Twitter)', tag: 'GIFs & Videos', bgColor: 'bg-slate-500/10 border-slate-500/20 text-slate-300', icon: '𝕏', formats: 'MP4 (720p / 1080p)' },
    { name: 'Facebook', tag: 'Public Videos', bgColor: 'bg-blue-600/10 border-blue-600/20 text-blue-400', icon: '📘', formats: 'HD & SD MP4' },
    { name: 'Pinterest', tag: 'Idea Pins', bgColor: 'bg-red-600/10 border-red-600/20 text-red-400', icon: '📌', formats: 'Video Clips' },
    { name: 'Reddit', tag: 'Video & Audio', bgColor: 'bg-orange-500/10 border-orange-500/20 text-orange-400', icon: '🤖', formats: 'Merged Audio MP4' },
    { name: 'Public Web Videos', tag: 'Clips & Streams', bgColor: 'bg-red-500/10 border-red-500/20 text-red-400', icon: '▶️', formats: 'MP4 & MP3' },
    { name: 'Vimeo & Threads', tag: 'HD Clips', bgColor: 'bg-sky-500/10 border-sky-500/20 text-sky-400', icon: '🎬', formats: 'Full HD' }
  ];
</script>

<section id="platforms" class="py-16 md:py-24 bg-slate-950/60 border-y border-slate-900">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Supported Platforms
      </h2>
      <p class="mt-3 text-base text-slate-400">
        Download videos effortlessly from all popular social networks and video platforms.
      </p>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {#each platforms as item}
        <div class="group relative bg-slate-900/80 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
          <div class="flex items-start justify-between">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-slate-950 border border-slate-800 shadow-inner group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <span class="px-2.5 py-1 rounded-full text-[11px] font-bold border {item.bgColor}">
              {item.tag}
            </span>
          </div>

          <div class="mt-4">
            <h3 class="text-lg font-bold text-white flex items-center gap-1.5">
              <span>{item.name}</span>
            </h3>
            <p class="text-xs text-slate-400 mt-1 flex items-center gap-1">
              <CheckCircle2 class="w-3.5 h-3.5 text-emerald-400" />
              <span>{item.formats}</span>
            </p>
          </div>
        </div>
      {/each}
    </div>

    <div class="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5 max-w-xl mx-auto">
      <ShieldAlert class="w-4 h-4 text-slate-400 shrink-0" />
      <span>* Downloads are strictly intended for personal, copyright-compliant content and public media.</span>
    </div>
  </div>
</section>
