# Monetag (PropellerAds) Integration Guide for LinkSave

Integrating **Monetag** (the publisher brand of PropellerAds) alongside **Adsterra** enables dual monetization: impressions and geographical traffic that Adsterra doesn't monetize will be captured by Monetag, significantly increasing your overall revenue per visitor.

---

## 3-Step Setup Guide

### Step 1: Create a Free Publisher Account
1. Go to [https://monetag.com/](https://monetag.com/)
2. Click **Sign Up** and choose **I am a Publisher**.
3. Fill in your details (Individual account, Name, Email: `linksave357@gmail.com`).
4. Verify your email to activate your account.

---

### Step 2: Add `linksaves.com` to Your Sites
1. Inside your Monetag dashboard, click **Sites** in the left menu.
2. Click **Add Site**.
3. Enter your domain: `https://linksaves.com`
4. Click **Add**.

---

### Step 3: Verify Site Ownership
Monetag will ask you to verify that you own `linksaves.com`. They offer two methods:

* **Method A (Easiest - HTML Tag or Config)**:
  Copy the verification code (content value) and paste it into [`src/lib/config.js`](file:///c:/my-projects/linksave/src/lib/config.js) under `monetag.verificationCode`:
  ```js
  monetag: {
    enabled: true,
    verificationCode: 'YOUR_VERIFICATION_CODE',
    ...
  }
  ```
  👉 Or share it with me in chat, and I will place it into `config.js`!

* **Method B (File Upload)**:
  Download the verification file (e.g., `monetag12345.html`), save it into your `c:\my-projects\linksave\public\` folder, and deploy.

Once deployed, click **Verify** on Monetag. Your site will be approved instantly!

---

### Step 4: Get Your MultiTag Script
1. Once `linksaves.com` is verified, click **Add Zone**.
2. Select **MultiTag** (Recommended: this single tag automatically serves high-CPM formats like In-Page Push, Vignette Banners, and OnClick popunders with AI fill rate optimization).
3. Copy the script tag provided by Monetag (e.g. `src="https://alwingulla.com/88/tag.min.js"` and `data-zone="1234567"`).
4. Paste the URL and zone into [`src/lib/config.js`](file:///c:/my-projects/linksave/src/lib/config.js):
  ```js
  monetag: {
    enabled: true,
    verificationCode: 'YOUR_CODE',
    scriptUrl: 'https://alwingulla.com/88/tag.min.js',
    zoneId: 'YOUR_ZONE_ID'
  }
  ```
  Our loader automatically serves it across both the homepage and all subpages!

---

## Configuration Location:
* **Config file**: [`src/lib/config.js`](file:///c:/my-projects/linksave/src/lib/config.js) under `CONFIG.monetag`.
* **Affiliate Offers**: [`src/lib/config.js`](file:///c:/my-projects/linksave/src/lib/config.js) under `CONFIG.affiliate.vpn`.
