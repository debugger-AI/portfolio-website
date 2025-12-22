# Deployment Guide

## Build for Production

The website is ready for deployment. Follow these steps:

### 1. Build the Project

```bash
npm run build
```

This creates a `dist` folder with all production-ready files.

### 2. Deploy to Your Hosting Provider

Upload the contents of the `dist` folder to your hosting provider.

### Popular Hosting Options:

#### **Vercel** (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the project root
3. Or connect your GitHub repo to Vercel for automatic deployments

#### **Netlify**
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy --prod --dir=dist`
3. Or drag and drop the `dist` folder to Netlify dashboard

#### **GitHub Pages**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "npm run build && gh-pages -d dist"`
3. Run: `npm run deploy`

#### **Traditional Web Hosting (cPanel, FTP, etc.)**
1. Upload all files from the `dist` folder to your `public_html` or `www` directory
2. Ensure `index.html` is in the root directory
3. Make sure your server supports client-side routing (SPA)

### 3. Important Notes

- **Base Path**: The site is configured with `base: './'` which works for most hosting providers
- **SPA Routing**: If you're using a subdirectory, update `base` in `vite.config.js` to match your path
- **HTTPS**: Ensure your domain has SSL/HTTPS enabled
- **Custom Domain**: Update DNS settings according to your hosting provider's instructions

### 4. Verify Deployment

After deployment, check:
- ✅ All pages load correctly
- ✅ 3D background is visible
- ✅ CV/Resume PDF downloads correctly
- ✅ All external links work (GitHub, Kaggle, Gmail)
- ✅ Mobile responsiveness
- ✅ Performance (use Lighthouse in Chrome DevTools)

### 5. Post-Deployment

- Submit your sitemap to Google Search Console
- Test all interactive elements
- Monitor performance and fix any issues

## Build Output

The `dist` folder contains:
- `index.html` - Main HTML file
- `assets/` - All JavaScript and CSS files (optimized and minified)
- `Jeremy-Nyende-CV.pdf` - Downloadable CV
- `vite.svg` - Favicon

Total build size: ~830 KB (gzipped: ~240 KB)

## Troubleshooting

### 404 Errors on Refresh
- Ensure your hosting provider supports SPA routing
- Configure redirect rules to point all routes to `index.html`

### Assets Not Loading
- Check that all files in `dist` are uploaded
- Verify file paths are correct (case-sensitive on some servers)

### 3D Scene Not Showing
- Check browser console for errors
- Ensure WebGL is enabled in browser
- Verify Three.js library loaded correctly

