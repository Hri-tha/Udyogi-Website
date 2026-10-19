# Udyogi website

Static website (HTML, CSS, JS). No build step, no dependencies.

## Files
- `index.html`    page content
- `css/style.css` styling. Colors and fonts are variables at the top (`:root`)
- `js/main.js`    tabs and the "Ask Udyogi" question filter
- `robots.txt`    search engine rules

## Run locally
Open `index.html` in a browser, or run: `npx serve .`

## Things to change before going live
1. Privacy Policy and Delete account links in the footer of `index.html` (currently `#`)
2. Play Store link (search `play.google.com` in `index.html`; 3 places)
3. FAQ answers: edit the `<details>` blocks in the `#ask` section. `data-k` holds search keywords
4. Add `<link rel="canonical" href="https://yourdomain.com/">` in `<head>` once you have a domain
5. Remove any feature you do not offer yet in the "Why Udyogi" section

## Deploy (free options)
- Cloudflare Pages: Create project > Direct Upload > upload this folder
- Netlify: drag and drop this folder at app.netlify.com/drop
- GitHub Pages: push to a repo > Settings > Pages > deploy from `main` branch, root folder
- Then add your custom domain in the host's settings and follow its DNS steps (HTTPS is automatic)

## Optional later
- Add `sitemap.xml` and submit it in Google Search Console
- Add real app screenshots (put in `images/`, use `<img loading="lazy">`)
- Add privacy.html and delete-account.html pages (Play Store requires both URLs)
