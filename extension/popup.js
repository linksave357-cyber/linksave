// LinkSave Extension - Popup Logic

document.addEventListener('DOMContentLoaded', async () => {
  const urlInput = document.getElementById('video-url');
  const downloadBtn = document.getElementById('download-btn');

  // Auto-detect current active tab URL
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab && tab.url) {
      const url = tab.url;
      if (
        url.includes('youtube.com') ||
        url.includes('youtu.be') ||
        url.includes('instagram.com') ||
        url.includes('tiktok.com') ||
        url.includes('facebook.com') ||
        url.includes('pinterest.com') ||
        url.includes('linkedin.com')
      ) {
        urlInput.value = url;
      }
    }
  } catch (err) {
    console.warn('Could not read active tab URL:', err);
  }

  function handleDownload() {
    const rawUrl = urlInput.value.trim();
    let target = 'https://linksaves.com/';

    if (rawUrl) {
      if (rawUrl.includes('instagram.com')) {
        target = `https://linksaves.com/instagram-reels-downloader/?url=${encodeURIComponent(rawUrl)}`;
      } else if (rawUrl.includes('tiktok.com')) {
        target = `https://linksaves.com/tiktok-video-downloader-no-watermark/?url=${encodeURIComponent(rawUrl)}`;
      } else if (rawUrl.includes('pinterest.com')) {
        target = `https://linksaves.com/pinterest-video-downloader/?url=${encodeURIComponent(rawUrl)}`;
      } else if (rawUrl.includes('facebook.com')) {
        target = `https://linksaves.com/facebook-video-downloader/?url=${encodeURIComponent(rawUrl)}`;
      } else if (rawUrl.includes('youtube.com/shorts')) {
        target = `https://linksaves.com/youtube-shorts-downloader/?url=${encodeURIComponent(rawUrl)}`;
      } else if (rawUrl.includes('youtube.com') || rawUrl.includes('youtu.be')) {
        target = `https://linksaves.com/youtube-video-downloader/?url=${encodeURIComponent(rawUrl)}`;
      } else {
        target = `https://linksaves.com/?url=${encodeURIComponent(rawUrl)}`;
      }
    }

    chrome.tabs.create({ url: target });
  }

  downloadBtn.addEventListener('click', handleDownload);
  urlInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleDownload();
  });
});
