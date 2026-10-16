<script>
  import { Download } from 'lucide-svelte';

  /**
   * @param {string} id
   */
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<footer class="bg-slate-950 border-t border-slate-900 text-slate-400 pt-12 pb-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
            <Download class="w-5 h-5" />
          </div>
          <span class="text-xl font-extrabold text-white tracking-tight">
            LinkSave
          </span>
        </div>
        <p class="text-xs text-slate-400 leading-relaxed">
          Fast and free online video downloader and high-bitrate MP3 audio converter. Safe, browser-based media conversion with no registration and no software installation required.
        </p>
        <div class="pt-1">
          <a 
            href="https://microsoftedge.microsoft.com/addons/detail/linksave-video-audio-/ipneiigdjchdffpkailbdajdihcpgigd" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 hover:text-blue-300 transition"
          >
            <span>Official Edge Browser Add-on</span>
          </a>
        </div>
      </div>

      <div>
        <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Video Downloaders</h4>
        <ul class="space-y-2 text-xs">
          <li><a href="/youtube-video-downloader/" class="hover:text-white hover:underline transition">YouTube Video Downloader</a></li>
          <li><a href="/youtube-shorts-downloader/" class="hover:text-white hover:underline transition">YouTube Shorts Downloader</a></li>
          <li><a href="/tiktok-video-downloader-no-watermark/" class="hover:text-white hover:underline transition">TikTok Downloader (No Watermark)</a></li>
          <li><a href="/instagram-reels-downloader/" class="hover:text-white hover:underline transition">Instagram Reels Downloader</a></li>
          <li><a href="/facebook-video-downloader/" class="hover:text-white hover:underline transition">Facebook Video Downloader</a></li>
          <li><a href="/pinterest-video-downloader/" class="hover:text-white hover:underline transition">Pinterest Video Downloader</a></li>
          <li><a href="/linkedin-video-downloader/" class="hover:text-white hover:underline transition">LinkedIn Video Downloader</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Audio &amp; Converters</h4>
        <ul class="space-y-2 text-xs">
          <li><a href="/youtube-to-mp3/" class="hover:text-white hover:underline transition">YouTube to MP3 (320kbps)</a></li>
          <li><a href="/youtube-to-mp4/" class="hover:text-white hover:underline transition">YouTube to MP4 (1080p HD)</a></li>
          <li><a href="/how-to-download-youtube-videos/" class="hover:text-white hover:underline transition">Download Guide &amp; FAQ</a></li>
          <li><button on:click={() => scrollToSection('downloader')} class="hover:text-white hover:underline transition text-left cursor-pointer">Live Converter Engine</button></li>
          <li><button on:click={() => scrollToSection('platforms')} class="hover:text-white hover:underline transition text-left cursor-pointer">Supported Formats</button></li>
        </ul>
      </div>

      <div>
        <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Company &amp; Legal</h4>
        <ul class="space-y-2 text-xs">
          <li><a href="/about/" class="hover:text-white hover:underline transition block">About LinkSave</a></li>
          <li><a href="/contact/" class="hover:text-white hover:underline transition block">Contact &amp; DMCA Inquiries</a></li>
          <li><a href="/privacy-policy/" class="hover:text-white hover:underline transition block">Privacy Policy</a></li>
          <li><a href="/terms/" class="hover:text-white hover:underline transition block">Terms of Service</a></li>
        </ul>
        <p class="text-[11px] text-slate-500 leading-relaxed mt-4">
          Notice: LinkSave is an independent web utility. Downloads are intended strictly for content you legally own, fair-use education, and public domain media.
        </p>
      </div>
    </div>

    <div class="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
      <p>© 2026 LinkSave. All rights reserved.</p>
      <div class="flex items-center gap-4">
        <a href="/privacy-policy/" class="hover:text-slate-300 transition">Privacy</a>
        <span>•</span>
        <a href="/terms/" class="hover:text-slate-300 transition">Terms</a>
        <span>•</span>
        <a href="/contact/" class="hover:text-slate-300 transition">Contact</a>
      </div>
    </div>
  </div>
</footer>
