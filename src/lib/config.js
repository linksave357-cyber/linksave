// Configuration settings for LinkSave & ReClip Backend Integration

export const CONFIG = {
  // CnvMP3 Ad-free Converter (https://cnvmp3.com/v55)
  cnvmp3Url: 'https://cnvmp3.com/v55',
  // YT-Ai YouTube Converter (https://melamrahul.github.io/yt-ai/en/)
  ytAiUrl: 'https://melamrahul.github.io/yt-ai/en/',
  reclipUrl: import.meta.env.VITE_RECLIP_URL || 'https://cnvmp3.com/v55',
  
  // Integration Mode: 'api' | 'iframe' | 'local'
  mode: import.meta.env.VITE_INTEGRATION_MODE || 'local',

  // Adsterra Smartlink (smart-link-3466727)
  smartlinkUrl: 'https://garretebonylosing.com/jhky4egutd?key=d9ca9399efd5ec18febfadefd48f7ed5',

  // Monetag (PropellerAds) Secondary Ad Network Settings
  monetag: {
    enabled: false,
    verificationCode: '', // Enter your Monetag verification tag here
    scriptUrl: '',        // e.g. https://alwingulla.com/88/tag.min.js
    zoneId: ''            // e.g. 1234567
  },

  appName: 'LinkSave',
  version: '1.0.0-MVP'
};

