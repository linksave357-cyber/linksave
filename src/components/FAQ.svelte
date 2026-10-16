<script>
  import { ChevronDown, HelpCircle } from 'lucide-svelte';

  /** @type {number | null} */
  let openIndex = 0;

  const faqs = [
    {
      q: 'How to use LinkSave as a YouTube to MP3 converter online?',
      a: 'To convert video to MP3, copy the YouTube video or Shorts link from your browser or mobile app, paste it into the LinkSave search box, and select the MP3 audio format. Our free online audio converter extracts high-quality 320kbps MP3 audio in seconds.'
    },
    {
      q: 'How to convert YouTube to MP4 in 1080p Full HD online?',
      a: 'Copy the YouTube video URL, paste it into LinkSave, and select MP4 format. You can download videos in original high resolutions including 1080p Full HD, 720p, or 4K with no watermark and zero compression.'
    },
    {
      q: 'How do I download YouTube Shorts on mobile phones?',
      a: 'LinkSave is an optimized YouTube video downloader for mobile. On iPhone (Safari) or Android (Chrome), tap Share on any YouTube Shorts video, select "Copy link", paste it into LinkSave, and tap Download.'
    },
    {
      q: 'Can I save my own YouTube videos for offline backup?',
      a: 'Yes! Content creators and users can easily save their own YouTube videos and download their YouTube Shorts for offline backup, archiving, or repurposing audio tracks without installing any software.'
    },
    {
      q: 'What audio bitrates are supported for YouTube to MP3 conversion?',
      a: 'LinkSave supports multiple audio bitrates up to 320kbps (studio high fidelity), as well as 256kbps, 192kbps, and 128kbps, giving you the best balance between audio quality and file size.'
    },
    {
      q: 'Is this online video converter completely free?',
      a: 'Yes. LinkSave provides an entirely free online video converter and audio extractor. There are no daily download limits, no subscription fees, and no registration required.'
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
