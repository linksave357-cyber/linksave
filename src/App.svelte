<script>
  import Navbar from './components/Navbar.svelte';
  import Hero from './components/Hero.svelte';
  import HowItWorks from './components/HowItWorks.svelte';
  import Features from './components/Features.svelte';
  import FAQ from './components/FAQ.svelte';
  import Footer from './components/Footer.svelte';
  import AdBanner from './components/AdBanner.svelte';
  import SideBanners from './components/SideBanners.svelte';
  import LegalModal from './components/LegalModal.svelte';

  /** @type {'privacy' | 'terms' | 'about' | 'contact' | null} */
  let activeModal = null;

  /**
   * @param {'privacy' | 'terms' | 'about' | 'contact'} modalType
   */
  function openModal(modalType) {
    activeModal = modalType;
  }

  function closeModal() {
    activeModal = null;
  }
</script>

<div class="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white relative">
  <!-- Left & Right Skyscraper Side Rail Banners -->
  <SideBanners />

  <!-- Top Navigation -->
  <Navbar />

  <!-- Main Hero & Downloader Engine Focus -->
  <main>
    <Hero />

    <!-- Google AdSense Unit 1 -->
    <section class="max-w-7xl mx-auto px-4">
      <AdBanner slotType="leaderboard" />
    </section>

    <!-- 3-Step Process -->
    <HowItWorks />

    <!-- Google AdSense Unit 2 -->
    <section class="max-w-7xl mx-auto px-4">
      <AdBanner slotType="rectangle" />
    </section>

    <!-- Value Propositions & Features -->
    <Features />

    <!-- Banner Ad Unit 3 (Mid-Page Leaderboard) -->
    <section class="max-w-7xl mx-auto px-4">
      <AdBanner slotType="leaderboard" />
    </section>

    <!-- Frequently Asked Questions -->
    <FAQ />

    <!-- Banner Ad Unit 4 (Bottom-Page Rectangle) -->
    <section class="max-w-7xl mx-auto px-4">
      <AdBanner slotType="rectangle" />
    </section>
  </main>

  <!-- Footer with Legal Links -->
  <Footer onOpenModal={openModal} />

  <!-- Legal & Policy Modal (AdSense Required Compliance) -->
  <LegalModal activeModal={activeModal} onClose={closeModal} />
</div>