<script>
  import { CONFIG } from '../lib/config.js';

  /** @type {'leaderboard' | 'rectangle' | 'banner'} */
  export let slotType = 'leaderboard';
  /** @type {'ad' | 'referral'} */
  export let type = 'ad';

  $: isRectangle = slotType === 'rectangle';
  $: isReferral = type === 'referral';
  $: width = isRectangle ? 300 : (isReferral ? 720 : 728);
  $: height = isRectangle ? 250 : 90;

  $: referralBanner = isRectangle
    ? CONFIG?.referral?.banners?.rectangle
    : CONFIG?.referral?.banners?.leaderboard;
  $: referralUrl = CONFIG?.referral?.inviteUrl || 'https://beta.publishers.adsterra.com/referral/jd2AQmNfHi';

  $: srcdoc = `<!DOCTYPE html>
<html>
<head>
  <style>
    body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background: transparent; overflow: hidden; }
  </style>
</head>
<body>
  <script type="text/javascript">
    atOptions = {
      'key' : 'aac61e386ccb0a0d5fc7c47dfae348c5',
      'format' : 'iframe',
      'height' : ${height},
      'width' : ${width},
      'params' : {}
    };
  <\/script>
  <script type="text/javascript" src="https://www.highrevenueformat.com/aac61e386ccb0a0d5fc7c47dfae348c5/invoke.js"><\/script>
</body>
</html>`;
</script>

<div class="my-6 flex justify-center text-center overflow-x-auto {isRectangle ? 'w-full sm:w-auto inline-flex' : 'w-full'}" data-slot-type={slotType} data-ad-type={type}>
  <div class="w-full {isRectangle ? 'max-w-[340px] min-w-[300px]' : 'max-w-[760px]'} bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 flex flex-col items-center justify-center {isRectangle ? 'min-h-[280px]' : 'min-h-[120px]'} shadow-inner relative overflow-hidden">
    <div class="w-full flex items-center justify-between px-2 mb-2">
      <span class="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
        {isReferral ? 'Monetization Partner' : 'Advertisement'}
      </span>
      {#if isReferral}
        <span class="text-[10px] text-amber-400 font-medium">Earn 5% Lifetime Revenue</span>
      {/if}
    </div>
    <div class="w-full flex justify-center items-center overflow-hidden">
      {#if isReferral}
        <a
          href={referralUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
          class="inline-block transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] rounded-xl overflow-hidden border border-slate-800/80 shadow-md"
        >
          <img
            src={referralBanner?.src}
            alt="Adsterra Monetization Network"
            width={width}
            height={height}
            loading="lazy"
            class="max-w-full h-auto block rounded-xl"
          />
        </a>
      {:else}
        <iframe
          {srcdoc}
          title="Advertisement"
          width={width}
          height={height}
          class="border-0 overflow-hidden max-w-full"
          scrolling="no"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        ></iframe>
      {/if}
    </div>
  </div>
</div>
