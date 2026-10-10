<script>
  import { ChevronDown, HelpCircle } from 'lucide-svelte';

  /** @type {number | null} */
  let openIndex = 0;

  const faqs = [
    {
      q: 'How to extract audio from public links to MP3 for free?',
      a: 'Paste any public video link into LinkSave, click Convert, and choose high-quality 320kbps MP3 audio format to save the sound file instantly.'
    },
    {
      q: 'How does the online video converter work?',
      a: 'Copy the public media link from your browser or app, paste it into the LinkSave converter box, and select your preferred format.'
    },
    {
      q: 'Is LinkSave free?',
      a: 'Yes. LinkSave provides a free online interface for downloading and converting supported media links. No registration is required.'
    },
    {
      q: 'Where are downloaded videos saved on my device?',
      a: 'Downloaded files are saved in your web browser\'s default "Downloads" folder (or standard files location on iPhone / Android).'
    },
    {
      q: 'Does LinkSave work on iPhone and Android mobile browsers?',
      a: 'Absolutely! LinkSave is fully optimized for mobile devices. On iOS Safari or Android Chrome, simply paste the link and tap Download.'
    },
    {
      q: 'Do I need to install any software or browser extensions?',
      a: 'No installation is needed! LinkSave works 100% online directly inside your web browser.'
    }
  ];

  /**
   * @param {number} index
   */
  function toggleFaq(index) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<section id="faq" class="py-16 md:py-24">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
        <HelpCircle class="w-3.5 h-3.5" />
        <span>Got Questions?</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Frequently Asked Questions
      </h2>
      <p class="mt-2 text-sm text-slate-400">
        Everything you need to know about using LinkSave online video downloader.
      </p>
    </div>

    <div class="space-y-4">
      {#each faqs as faq, index}
        <div class="bg-slate-900/90 border border-slate-800/90 rounded-2xl overflow-hidden transition-all duration-200">
          <button
            on:click={() => toggleFaq(index)}
            class="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 text-white font-bold text-base sm:text-lg hover:text-blue-400 focus:outline-none"
          >
            <span>{faq.q}</span>
            <div class="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
              <ChevronDown class="w-4 h-4 text-slate-400 transition-transform duration-300 {openIndex === index ? 'rotate-180 text-blue-400' : ''}" />
            </div>
          </button>

          {#if openIndex === index}
            <div class="px-5 pb-6 sm:px-6 text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-4">
              {faq.a}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
