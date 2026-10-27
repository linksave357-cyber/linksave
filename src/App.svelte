<script>
  import Navbar from './components/Navbar.svelte';
  import Hero from './components/Hero.svelte';
  import EdgeExtensionSection from './components/EdgeExtensionSection.svelte';
  import HowItWorks from './components/HowItWorks.svelte';
  import Features from './components/Features.svelte';
  import SupportedPlatforms from './components/SupportedPlatforms.svelte';
  import FAQ from './components/FAQ.svelte';
  import Footer from './components/Footer.svelte';
  import AdBanner from './components/AdBanner.svelte';
  import SideBanners from './components/SideBanners.svelte';
  import BottomBanners from './components/BottomBanners.svelte';
  import LegalModal from './components/LegalModal.svelte';
  import VpnAffiliateBanner from './components/VpnAffiliateBanner.svelte';

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

    <!-- High-Yield VPN Affiliate Recommendation -->
    <VpnAffiliateBanner />

    <!-- Official Microsoft Edge Extension Showcase -->
    <EdgeExtensionSection />

    <!-- Top Banner: Dynamic Leaderboard -->
    <section class="max-w-7xl mx-auto px-4">
      <AdBanner slotType="leaderboard" type="ad" />
    </section>

    <!-- 3-Step Process -->
    <HowItWorks />

    <!-- Partner Banner: 720x90 Animated GIF Referral Unit -->
    <section class="max-w-7xl mx-auto px-4">
      <AdBanner slotType="leaderboard" type="referral" />
    </section>

    <!-- Value Propositions & Features -->
    <Features />

    <!-- Dedicated Platform Converters Grid (Internal Crawl & User Discovery) -->
    <SupportedPlatforms />

    <!-- Content Banner: Dynamic Rectangle -->
    <section class="max-w-7xl mx-auto px-4">
      <AdBanner slotType="rectangle" type="ad" />
    </section>

    <!-- Mid-Page Banner: Dynamic Leaderboard -->
    <section class="max-w-7xl mx-auto px-4">
      <AdBanner slotType="leaderboard" type="ad" />
    </section>

    <!-- Frequently Asked Questions -->
    <FAQ />

    <!-- Bottom Adsterra Banner Units -->
    <BottomBanners />
  </main>

  <!-- Footer with Legal & Internal Tool Links -->
  <Footer />

  <!-- Legal & Policy Modal (Fallback) -->
  {#if activeModal}
    <LegalModal {activeModal} onClose={closeModal} />
  {/if}
</div>