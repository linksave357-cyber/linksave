// LinkSave Browser Extension - Content Script
// Injects 'Download with LinkSave' button on YouTube and Instagram

(function () {
  'use strict';

  const SVG_ICON = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" x2="12" y1="15" y2="3"/>
    </svg>
  `;

  // --- YOUTUBE INJECTION ---
  function injectYouTubeButton() {
    const isWatchPage = window.location.pathname.startsWith('/watch');
    const isShortsPage = window.location.pathname.startsWith('/shorts');

    if (isWatchPage) {
      if (document.getElementById('linksave-yt-download-btn')) return;

      // Look for standard action buttons container under video
      const targetContainer =
        document.querySelector('#actions #top-level-buttons-computed') ||
        document.querySelector('#actions-inner #menu') ||
        document.querySelector('#actions ytd-menu-renderer');

      if (!targetContainer) return;

      const btn = document.createElement('button');
      btn.id = 'linksave-yt-download-btn';
      btn.className = 'linksave-yt-btn';
      btn.innerHTML = `${SVG_ICON}<span>Download</span>`;
      btn.title = 'Download HD Video or MP3 with LinkSave';

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const currentUrl = window.location.href;
        window.open(
          `https://linksaves.com/youtube-video-downloader/?url=${encodeURIComponent(currentUrl)}`,
          '_blank'
        );
      });

      targetContainer.appendChild(btn);
    } else if (isShortsPage) {
      // Shorts viewer
      const activeShort = document.querySelector('ytd-reel-video-renderer[is-active]') || document.querySelector('ytd-reel-video-renderer');
      if (!activeShort) return;

      const actionsBar = activeShort.querySelector('#actions');
      if (!actionsBar || actionsBar.querySelector('.linksave-shorts-btn')) return;

      const btn = document.createElement('button');
      btn.className = 'linksave-shorts-btn';
      btn.innerHTML = SVG_ICON;
      btn.title = 'Download Short with LinkSave';

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const currentUrl = window.location.href;
        window.open(
          `https://linksaves.com/youtube-shorts-downloader/?url=${encodeURIComponent(currentUrl)}`,
          '_blank'
        );
      });

      actionsBar.appendChild(btn);
    }
  }

  // --- INSTAGRAM INJECTION ---
  function injectInstagramButton() {
    const isReelOrPost =
      window.location.pathname.startsWith('/reel/') ||
      window.location.pathname.startsWith('/p/') ||
      window.location.pathname.startsWith('/reels/');

    if (!isReelOrPost) return;
    if (document.getElementById('linksave-ig-download-btn')) return;

    // Look for share / bookmark section in reel or post
    const actionSection =
      document.querySelector('section._aamu') ||
      document.querySelector('section:has(svg[aria-label*="Like"])') ||
      document.querySelector('section:has(svg[aria-label*="Share"])') ||
      document.querySelector('article section');

    if (!actionSection) return;

    const btn = document.createElement('button');
    btn.id = 'linksave-ig-download-btn';
    btn.className = 'linksave-ig-btn';
    btn.innerHTML = `${SVG_ICON}<span>Save Reel</span>`;
    btn.title = 'Download Instagram Reel with LinkSave';

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const currentUrl = window.location.href;
      window.open(
        `https://linksaves.com/instagram-reels-downloader/?url=${encodeURIComponent(currentUrl)}`,
        '_blank'
      );
    });

    actionSection.appendChild(btn);
  }

  function handlePageUpdates() {
    const host = window.location.hostname;
    if (host.includes('youtube.com')) {
      injectYouTubeButton();
    } else if (host.includes('instagram.com')) {
      injectInstagramButton();
    }
  }

  // Listen to SPA navigation events
  window.addEventListener('yt-navigate-finish', handlePageUpdates);
  window.addEventListener('popstate', handlePageUpdates);

  // Fallback MutationObserver to handle dynamic DOM loading
  const observer = new MutationObserver(() => {
    handlePageUpdates();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Initial trigger
  handlePageUpdates();
})();
