<script>
  /** @type {'leaderboard' | 'rectangle' | 'banner'} */
  export let slotType = 'leaderboard';

  $: isRectangle = slotType === 'rectangle';
  $: width = isRectangle ? 300 : 728;
  $: height = isRectangle ? 250 : 90;

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

<div class="my-8 flex justify-center text-center overflow-x-auto w-full" data-slot-type={slotType}>
  <div class="w-full max-w-4xl bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 flex flex-col items-center justify-center {isRectangle ? 'min-h-[280px]' : 'min-h-[120px]'} shadow-inner relative overflow-hidden">
    <div class="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-2">Advertisement</div>
    <div class="w-full flex justify-center items-center overflow-hidden">
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
    </div>
  </div>
</div>
