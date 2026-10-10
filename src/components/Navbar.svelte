<script>
  import { Download, Menu, X, Sparkles, ShieldCheck } from 'lucide-svelte';

  let mobileMenuOpen = false;

  const baseUrl = import.meta.env.BASE_URL?.endsWith('/') ? import.meta.env.BASE_URL : (import.meta.env.BASE_URL || '/') + '/';

  /**
   * @param {string} id
   */
  function scrollToSection(id) {
    mobileMenuOpen = false;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<header class="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      
      <!-- Brand Logo -->
      <a 
        href={baseUrl}
        class="flex items-center gap-3 group text-left focus:outline-none"
      >
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-500 p-0.5 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
          <div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
            <Download class="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
        <div>
          <span class="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-400 bg-clip-text text-transparent">
            LinkSave
          </span>
          <span class="block text-[10px] font-semibold text-blue-400/90 tracking-wider uppercase -mt-1">
            Video Converter
          </span>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-1 xl:gap-2">
        <a 
          href="{baseUrl}youtube-video-downloader/"
          class="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors"
        >
          Video Converter
        </a>
        <a 
          href="{baseUrl}youtube-to-mp3/"
          class="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors"
        >
          Audio (MP3)
        </a>
        <a 
          href="{baseUrl}youtube-to-mp4/"
          class="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors"
        >
          Video (MP4)
        </a>
        <a 
          href="{baseUrl}youtube-shorts-downloader/"
          class="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors"
        >
          Shorts Converter
        </a>
        <a 
          href="{baseUrl}how-to-download-youtube-videos/"
          class="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors"
        >
          Media Guide
        </a>
        <a 
          href="https://microsoftedge.microsoft.com/addons/detail/linksave-video-audio-/ipneiigdjchdffpkailbdajdihcpgigd"
          target="_blank"
          rel="noopener noreferrer"
          class="px-3 py-2 text-xs font-semibold text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-colors flex items-center gap-1"
        >
          <span>Edge Add-on</span>
        </a>
      </nav>

      <!-- CTA Button -->
      <div class="hidden sm:flex items-center gap-3">
        <div class="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
          <ShieldCheck class="w-3.5 h-3.5" />
          <span>100% Free & Safe</span>
        </div>
        <button
          on:click={() => scrollToSection('downloader')}
          class="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 cursor-pointer"
        >
          <Sparkles class="w-4 h-4" />
          <span>Convert Video</span>
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex md:hidden">
        <button
          on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
          class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          {#if mobileMenuOpen}
            <X class="w-6 h-6" />
          {:else}
            <Menu class="w-6 h-6" />
          {/if}
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu Dropdown -->
  {#if mobileMenuOpen}
    <div class="lg:hidden px-4 pt-2 pb-6 space-y-2 bg-slate-950/95 border-b border-slate-800">
      <a
        href="{baseUrl}youtube-video-downloader/"
        class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white"
      >
        Video Downloader
      </a>
      <a
        href="{baseUrl}youtube-to-mp3/"
        class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white"
      >
        YouTube to MP3
      </a>
      <a
        href="{baseUrl}youtube-to-mp4/"
        class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white"
      >
        YouTube to MP4
      </a>
      <a
        href="{baseUrl}youtube-shorts-downloader/"
        class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white"
      >
        Shorts Downloader
      </a>
      <a
        href="{baseUrl}how-to-download-youtube-videos/"
        class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white"
      >
        Guide
      </a>
      <a
        href="https://microsoftedge.microsoft.com/addons/detail/linksave-video-audio-/ipneiigdjchdffpkailbdajdihcpgigd"
        target="_blank"
        rel="noopener noreferrer"
        class="block px-4 py-3 rounded-lg text-base font-semibold text-blue-400 hover:bg-slate-900"
      >
        Edge Extension (Free)
      </a>
      <a
        href="{baseUrl}about/"
        class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white"
      >
        About Us
      </a>
      <a
        href="{baseUrl}contact/"
        class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white"
      >
        Contact Us
      </a>
      <a
        href="{baseUrl}privacy-policy/"
        class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white"
      >
        Privacy Policy
      </a>
      <a
        href="{baseUrl}terms/"
        class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white"
      >
        Terms of Service
      </a>
      <div class="pt-2">
        <button
          on:click={() => { mobileMenuOpen = false; scrollToSection('downloader'); }}
          class="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/25"
        >
          <Sparkles class="w-4 h-4" />
          <span>Save Video Now</span>
        </button>
      </div>
    </div>
  {/if}
</header>
