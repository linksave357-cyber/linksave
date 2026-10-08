import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [svelte(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        youtubeVideoDownloader: resolve(__dirname, 'youtube-video-downloader/index.html'),
        youtubeToMp3: resolve(__dirname, 'youtube-to-mp3/index.html'),
        youtubeToMp4: resolve(__dirname, 'youtube-to-mp4/index.html'),
        youtubeShortsDownloader: resolve(__dirname, 'youtube-shorts-downloader/index.html'),
        howToDownloadYoutubeVideos: resolve(__dirname, 'how-to-download-youtube-videos/index.html'),
        about: resolve(__dirname, 'about/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy/index.html'),
        terms: resolve(__dirname, 'terms/index.html'),
        instagramReelsDownloader: resolve(__dirname, 'instagram-reels-downloader/index.html'),
        tiktokVideoDownloader: resolve(__dirname, 'tiktok-video-downloader-no-watermark/index.html'),
        pinterestVideoDownloader: resolve(__dirname, 'pinterest-video-downloader/index.html'),
        facebookVideoDownloader: resolve(__dirname, 'facebook-video-downloader/index.html'),
        linkedinVideoDownloader: resolve(__dirname, 'linkedin-video-downloader/index.html')
      }
    }
  }
})
