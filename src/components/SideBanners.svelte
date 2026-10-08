<script>
  import { CONFIG } from '../lib/config.js';
  import { X } from 'lucide-svelte';

  export let leftKey = CONFIG?.adsterra?.skyscraperLeftKey || CONFIG?.adsterra?.bannerKey || 'aac61e386ccb0a0d5fc7c47dfae348c5';
  export let rightKey = CONFIG?.adsterra?.skyscraperRightKey || CONFIG?.adsterra?.bannerKey || 'aac61e386ccb0a0d5fc7c47dfae348c5';
  /** @type {'ad' | 'referral'} */
  export let leftType = 'referral';
  /** @type {'ad' | 'referral'} */
  export let rightType = 'referral';
  export let width = 160;
  export let height = 600;

  let showLeft = true;
  let showRight = true;

  $: referralUrl = CONFIG?.referral?.inviteUrl || 'https://beta.publishers.adsterra.com/referral/jd2AQmNfHi';
  $: referralSkyscraperSrc = CONFIG?.referral?.banners?.skyscraper?.src || 'https://landings-cdn.adsterratech.com/referralBanners/gif/160x600_adsterra_reff.gif';

  /** @param {string} key */
  function generateSrcdoc(key) {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      overflow: hidden;
      width: ${width}px;
      height: ${height}px;
    }
  </style>
</head>
<body>
  <script type="text/javascript">
    atOptions = {
      'key' : '${key}',
      'format' : 'iframe',
      'height' : ${height},
      'width' : ${width},
      'params' : {}
    };
  <\/script>
  <script type="text/javascript" src="https://www.highrevenueformat.com/${key}/invoke.js"><\/script>
</body>
</html>`;
  }

  $: leftSrcdoc = generateSrcdoc(leftKey);
  $: rightSrcdoc = generateSrcdoc(rightKey);
</script>

<!-- Left Side Skyscraper Banner -->
{#if showLeft}
  <aside
    class="side-banner-rail side-banner-left"
    aria-label="Left Skyscraper Advertisement"
  >
    <div class="banner-card">
      <div class="banner-header">
        <span class="banner-tag">{leftType === 'referral' ? 'Partner' : 'Ad'}</span>
        <button
          type="button"
          class="banner-close"
          aria-label="Close left advertisement"
          on:click={() => (showLeft = false)}
        >
          <X class="w-3 h-3" />
        </button>
      </div>
      <div class="banner-body">
        {#if leftType === 'referral'}
          <a
            href={referralUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            class="block w-[160px] h-[600px] hover:opacity-90 transition-opacity"
          >
            <img
              src={referralSkyscraperSrc}
              alt="Join Adsterra Monetization Network"
              width={width}
              height={height}
              loading="lazy"
              class="w-[160px] h-[600px] object-cover block"
            />
          </a>
        {:else}
          <iframe
            srcdoc={leftSrcdoc}
            title="Left Skyscraper Advertisement"
            width={width}
            height={height}
            class="ad-iframe"
            scrolling="no"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          ></iframe>
        {/if}
      </div>
    </div>
  </aside>
{/if}

<!-- Right Side Skyscraper Banner -->
{#if showRight}
  <aside
    class="side-banner-rail side-banner-right"
    aria-label="Right Skyscraper Advertisement"
  >
    <div class="banner-card">
      <div class="banner-header">
        <span class="banner-tag">{rightType === 'referral' ? 'Partner' : 'Ad'}</span>
        <button
          type="button"
          class="banner-close"
          aria-label="Close right advertisement"
          on:click={() => (showRight = false)}
        >
          <X class="w-3 h-3" />
        </button>
      </div>
      <div class="banner-body">
        {#if rightType === 'referral'}
          <a
            href={referralUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            class="block w-[160px] h-[600px] hover:opacity-90 transition-opacity"
          >
            <img
              src={referralSkyscraperSrc}
              alt="Join Adsterra Monetization Network"
              width={width}
              height={height}
              loading="lazy"
              class="w-[160px] h-[600px] object-cover block"
            />
          </a>
        {:else}
          <iframe
            srcdoc={rightSrcdoc}
            title="Right Skyscraper Advertisement"
            width={width}
            height={height}
            class="ad-iframe"
            scrolling="no"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          ></iframe>
        {/if}
      </div>
    </div>
  </aside>
{/if}

<style>
  .side-banner-rail {
    display: none;
    position: fixed;
    top: 96px;
    z-index: 25;
    pointer-events: auto;
    transition: opacity 0.2s ease;
  }

  /* Only display on desktop displays with adequate width and height */
  @media (min-width: 1440px) and (min-height: 700px) {
    .side-banner-rail {
      display: flex;
      flex-direction: column;
    }
  }

  .side-banner-left {
    left: 12px;
  }

  .side-banner-right {
    right: 12px;
    top: 140px; /* Clears top-right floating social bar notifications */
  }

  @media (min-width: 1536px) {
    .side-banner-left {
      left: 20px;
    }
    .side-banner-right {
      right: 20px;
    }
  }

  @media (min-width: 1800px) {
    .side-banner-left {
      left: 36px;
    }
    .side-banner-right {
      right: 36px;
    }
  }

  .banner-card {
    background: rgba(15, 23, 42, 0.85);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(51, 65, 85, 0.8);
    border-radius: 14px;
    padding: 6px;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.6), 0 8px 10px -6px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .banner-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4px 4px 4px;
  }

  .banner-tag {
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #64748b;
  }

  .banner-close {
    background: transparent;
    border: none;
    color: #64748b;
    cursor: pointer;
    padding: 2px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.15s ease, background-color 0.15s ease;
  }

  .banner-close:hover {
    color: #f87171;
    background-color: rgba(239, 68, 68, 0.1);
  }

  .banner-body {
    width: 160px;
    height: 600px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: rgba(2, 6, 23, 0.5);
  }

  .ad-iframe {
    border: 0;
    width: 160px;
    height: 600px;
    overflow: hidden;
    display: block;
  }
</style>
