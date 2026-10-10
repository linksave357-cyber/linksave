<script>
  import { Download } from 'lucide-svelte';

  export let onOpenModal = (/** @type {any} */ type) => {};

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
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      <div class="md:col-span-1 space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
            <Download class="w-5 h-5" />
          </div>
          <span class="text-xl font-extrabold text-white tracking-tight">
            LinkSave
          </span>
        </div>
        <p class="text-xs text-slate-400 leading-relaxed">
          Save Videos. Simply. Fast and free online video downloader and MP3 stream converter.
        </p>
      </div>

      <div>
        <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Navigation</h4>
        <ul class="space-y-2.5 text-xs">
          <li><button on:click={() => scrollToSection('hero')} class="hover:text-white transition">Home</button></li>
          <li><button on:click={() => scrollToSection('downloader')} class="hover:text-white transition">Downloader Engine</button></li>
          <li><button on:click={() => scrollToSection('how-it-works')} class="hover:text-white transition">How It Works</button></li>
          <li><button on:click={() => scrollToSection('features')} class="hover:text-white transition">Features</button></li>
          <li><a href="https://microsoftedge.microsoft.com/addons/detail/linksave-video-audio-/ipneiigdjchdffpkailbdajdihcpgigd" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 transition">Edge Browser Add-on</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Legal & Support</h4>
        <ul class="space-y-2.5 text-xs">
          <li><a href="https://linksaves.com/privacy-policy/" on:click|preventDefault={() => onOpenModal('privacy')} class="hover:text-white transition text-left block">Privacy Policy</a></li>
          <li><a href="https://linksaves.com/terms/" on:click|preventDefault={() => onOpenModal('terms')} class="hover:text-white transition text-left block">Terms of Service</a></li>
          <li><a href="https://linksaves.com/about/" on:click|preventDefault={() => onOpenModal('about')} class="hover:text-white transition text-left block">About LinkSave</a></li>
          <li><a href="https://linksaves.com/contact/" on:click|preventDefault={() => onOpenModal('contact')} class="hover:text-white transition text-left block">Contact Support</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Legal Disclaimer</h4>
        <p class="text-xs text-slate-500 leading-relaxed">
          LinkSave is an independent web application. All product names, logos, and brands are property of their respective owners.
        </p>
      </div>
    </div>

    <div class="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
      <p>© 2026 LinkSave. All rights reserved.</p>
      <div class="flex items-center gap-4">
        <a href="https://linksaves.com/privacy-policy/" class="hover:text-slate-300 transition">Privacy</a>
        <span>•</span>
        <a href="https://linksaves.com/terms/" class="hover:text-slate-300 transition">Terms</a>
        <span>•</span>
        <a href="https://linksaves.com/contact/" class="hover:text-slate-300 transition">Contact</a>
      </div>
    </div>
  </div>
</footer>
