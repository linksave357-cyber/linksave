<script>
  import { CONFIG } from '../lib/config.js';

  /**
   * @param {string} key
   * @param {number} width
   * @param {number} height
   */
  function generateSrcdoc(key, width, height) {
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
  <script type="text/javascript" src="https://garretebonylosing.com/${key}/invoke.js"><\/script>
</body>
</html>`;
  }
</script>

<section id="bottom-banners" class="max-w-7xl mx-auto px-4 my-10" aria-label="Sponsored Content">
  <div class="border-t border-slate-900 pt-8 mb-6 text-center">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
      <span>Advertisement & Partner Network</span>
    </div>
  </div>

  <!-- Horizontal & Compact Banners Group -->
  <div class="flex flex-wrap items-center justify-center gap-6 mb-6">
    <!-- 468x60 Standard Banner -->
    <div class="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 shadow-inner flex flex-col items-center max-w-full overflow-x-auto">
      <div class="w-full flex items-center justify-between px-2 mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
        <span>Display Banner</span>
        <span>468x60</span>
      </div>
      <div class="overflow-hidden flex justify-center items-center min-w-[468px]">
        <iframe
          srcdoc={generateSrcdoc('51c98c7aa5238d0b1a5c89df57d76b38', 468, 60)}
          title="Advertisement 468x60"
          width="468"
          height="60"
          class="border-0 overflow-hidden block"
          scrolling="no"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        ></iframe>
      </div>
    </div>

    <!-- 320x50 Mobile Leaderboard -->
    <div class="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 shadow-inner flex flex-col items-center max-w-full overflow-x-auto">
      <div class="w-full flex items-center justify-between px-2 mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
        <span>Mobile Banner</span>
        <span>320x50</span>
      </div>
      <div class="overflow-hidden flex justify-center items-center min-w-[320px]">
        <iframe
          srcdoc={generateSrcdoc('d1dfc5353b46af042f806c8c2c1108dc', 320, 50)}
          title="Advertisement 320x50"
          width="320"
          height="50"
          class="border-0 overflow-hidden block"
          scrolling="no"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        ></iframe>
      </div>
    </div>
  </div>

  <!-- Medium Rectangle & Skyscraper Group -->
  <div class="flex flex-wrap items-center justify-center gap-6">
    <!-- 300x250 Medium Rectangle -->
    <div class="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 shadow-inner flex flex-col items-center min-h-[280px] w-full sm:w-auto">
      <div class="w-full flex items-center justify-between px-2 mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
        <span>Rectangle Ad</span>
        <span>300x250</span>
      </div>
      <div class="overflow-hidden flex justify-center items-center">
        <iframe
          srcdoc={generateSrcdoc('f7e6c176369f08d9c6d9583ab92cd815', 300, 250)}
          title="Advertisement 300x250"
          width="300"
          height="250"
          class="border-0 overflow-hidden block"
          scrolling="no"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        ></iframe>
      </div>
    </div>

    <!-- 160x300 Half Skyscraper -->
    <div class="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 shadow-inner flex flex-col items-center min-h-[330px]">
      <div class="w-full flex items-center justify-between px-2 mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
        <span>Skyscraper Ad</span>
        <span>160x300</span>
      </div>
      <div class="overflow-hidden flex justify-center items-center">
        <iframe
          srcdoc={generateSrcdoc('abd72035fe8df44719891373f6af85f8', 160, 300)}
          title="Advertisement 160x300"
          width="160"
          height="300"
          class="border-0 overflow-hidden block"
          scrolling="no"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        ></iframe>
      </div>
    </div>

    <!-- 160x600 Wide Skyscraper -->
    <div class="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 shadow-inner flex flex-col items-center min-h-[630px]">
      <div class="w-full flex items-center justify-between px-2 mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
        <span>Vertical Ad</span>
        <span>160x600</span>
      </div>
      <div class="overflow-hidden flex justify-center items-center">
        <iframe
          srcdoc={generateSrcdoc('f4f050a94fd8eb52f74dd6f2b2e6a7de', 160, 600)}
          title="Advertisement 160x600"
          width="160"
          height="600"
          class="border-0 overflow-hidden block"
          scrolling="no"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        ></iframe>
      </div>
    </div>
  </div>
</section>
