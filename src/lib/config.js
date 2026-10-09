// Configuration settings for LinkSave & ReClip Backend Integration

export const CONFIG = {
  // CnvMP3 Ad-free Converter (https://cnvmp3.com/v55)
  cnvmp3Url: 'https://cnvmp3.com/v55',
  // YT-Ai YouTube Converter (https://melamrahul.github.io/yt-ai/en/)
  ytAiUrl: 'https://melamrahul.github.io/yt-ai/en/',
  reclipUrl: import.meta?.env?.VITE_RECLIP_URL || 'https://cnvmp3.com/v55',
  
  // Integration Mode: 'api' | 'iframe' | 'local'
  mode: import.meta?.env?.VITE_INTEGRATION_MODE || 'local',

  // Adsterra Smartlink (smart-link-3466727)
  smartlinkUrl: 'https://garretebonylosing.com/jhky4egutd?key=d9ca9399efd5ec18febfadefd48f7ed5',

  // Monetag disabled to eliminate intrusive onclick and popup ads
  monetag: {
    enabled: false,
    scriptUrl: '',
    zoneId: ''
  },

  // Adsterra Display & Skyscraper Banners
  adsterra: {
    bannerKey: 'aac61e386ccb0a0d5fc7c47dfae348c5',
    skyscraperLeftKey: 'aac61e386ccb0a0d5fc7c47dfae348c5',
    skyscraperRightKey: 'aac61e386ccb0a0d5fc7c47dfae348c5',
    bottomBanners: [
      { key: '51c98c7aa5238d0b1a5c89df57d76b38', width: 468, height: 60, name: 'Standard Banner' },
      { key: 'f7e6c176369f08d9c6d9583ab92cd815', width: 300, height: 250, name: 'Medium Rectangle' },
      { key: 'f4f050a94fd8eb52f74dd6f2b2e6a7de', width: 160, height: 600, name: 'Wide Skyscraper' },
      { key: 'abd72035fe8df44719891373f6af85f8', width: 160, height: 300, name: 'Half Skyscraper' },
      { key: 'd1dfc5353b46af042f806c8c2c1108dc', width: 320, height: 50, name: 'Mobile Leaderboard' }
    ]
  },

  // Adsterra Referral Program (5% Lifetime Revenue)
  referral: {
    enabled: true,
    inviteUrl: 'https://beta.publishers.adsterra.com/referral/jd2AQmNfHi',
    banners: {
      leaderboard: {
        src: 'https://landings-cdn.adsterratech.com/referralBanners/gif/720x90_adsterra_reff.gif',
        width: 720,
        height: 90
      },
      rectangle: {
        src: 'https://landings-cdn.adsterratech.com/referralBanners/gif/300x250_adsterra_reff.gif',
        width: 300,
        height: 250
      },
      skyscraper: {
        src: 'https://landings-cdn.adsterratech.com/referralBanners/gif/160x600_adsterra_reff.gif',
        width: 160,
        height: 600
      }
    }
  },

  appName: 'LinkSave',
  version: '1.0.0-MVP'
};

