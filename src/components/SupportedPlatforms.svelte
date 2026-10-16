<script>
  import { CheckCircle2, ShieldAlert } from 'lucide-svelte';

  const platforms = [
    { name: 'YouTube to MP3', tag: '320kbps Audio', bgColor: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400', icon: '🎧', formats: '320kbps Audio Stream', url: '/youtube-to-mp3/' },
    { name: 'YouTube to MP4', tag: '1080p Full HD', bgColor: 'bg-blue-500/10 border-blue-500/20 text-blue-400', icon: '🎬', formats: 'HD & 1080p MP4', url: '/youtube-to-mp4/' },
    { name: 'YouTube Shorts', tag: 'Vertical Video', bgColor: 'bg-red-600/10 border-red-600/20 text-red-400', icon: '⚡', formats: 'Full HD Shorts', url: '/youtube-shorts-downloader/' },
    { name: 'YouTube Video', tag: 'HD & 4K MP4', bgColor: 'bg-red-500/10 border-red-500/20 text-red-400', icon: '▶️', formats: 'Up to 4K MP4', url: '/youtube-video-downloader/' },
    { name: 'TikTok', tag: 'No Watermark', bgColor: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400', icon: '🎵', formats: 'HD Video & MP3', url: '/tiktok-video-downloader-no-watermark/' },
    { name: 'Instagram', tag: 'Reels & Stories', bgColor: 'bg-pink-500/10 border-pink-500/20 text-pink-400', icon: '📸', formats: '1080p MP4', url: '/instagram-reels-downloader/' },
    { name: 'Facebook', tag: 'Public Videos', bgColor: 'bg-blue-600/10 border-blue-600/20 text-blue-400', icon: '📘', formats: 'HD & SD MP4', url: '/facebook-video-downloader/' },
    { name: 'Pinterest', tag: 'Idea Pins', bgColor: 'bg-rose-600/10 border-rose-600/20 text-rose-400', icon: '📌', formats: 'Pin Clips & GIF', url: '/pinterest-video-downloader/' }
  ];
</script>

<section id="platforms" class="py-16 md:py-24 bg-slate-950/60 border-y border-slate-900">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
        <span>Cross-Platform Media Engine</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Supported Platforms &amp; Converters
      </h2>
      <p class="mt-3 text-base text-slate-400">
        Convert and download media from any of the major video and social platforms with dedicated speed engines.
      </p>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {#each platforms as item}
        <a 
          href={item.url} 
          class="group block relative bg-slate-900/80 border border-slate-800/80 rounded-2xl p-5 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        >
          <div class="flex items-start justify-between">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-slate-950 border border-slate-800 shadow-inner group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <span class="px-2.5 py-1 rounded-full text-[11px] font-bold border {item.bgColor}">
              {item.tag}
            </span>
          </div>

          <div class="mt-4">
            <h3 class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
              <span>{item.name}</span>
            </h3>
            <p class="text-xs text-slate-400 mt-1 flex items-center gap-1">
              <CheckCircle2 class="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{item.formats}</span>
            </p>
          </div>
        </a>
      {/each}
    </div>

    <div class="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5 max-w-xl mx-auto">
      <ShieldAlert class="w-4 h-4 text-slate-400 shrink-0" />
      <span>* Downloads are strictly intended for personal, copyright-compliant content and public media.</span>
    </div>
  </div>
</section>
