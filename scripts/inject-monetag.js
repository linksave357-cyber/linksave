import fs from 'fs';

const files = [
  'about/index.html',
  'contact/index.html',
  'facebook-video-downloader/index.html',
  'how-to-download-youtube-videos/index.html',
  'instagram-reels-downloader/index.html',
  'linkedin-video-downloader/index.html',
  'pinterest-video-downloader/index.html',
  'privacy-policy/index.html',
  'terms/index.html',
  'tiktok-video-downloader-no-watermark/index.html',
  'youtube-shorts-downloader/index.html',
  'youtube-to-mp3/index.html',
  'youtube-to-mp4/index.html',
  'youtube-video-downloader/index.html'
];

const target = '<script src="https://garretebonylosing.com/04/83/b4/0483b49097355c10b2e0cebac7ba0b53.js"></script>';
const monetagBlock = `    <!-- Monetag (PropellerAds) MultiTag Integration -->
    <script src="https://quge5.com/88/tag.min.js" data-zone="292461" async data-cfasync="false"></script>`;

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    if (content.includes(target) && !content.includes('quge5.com')) {
      content = content.replace(target, `${target}\n\n${monetagBlock}`);
      fs.writeFileSync(f, content, 'utf8');
      console.log('Injected Monetag into:', f);
    }
  }
});
