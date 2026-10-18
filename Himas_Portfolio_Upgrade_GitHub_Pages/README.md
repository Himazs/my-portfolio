# Mohommad Himas — freelance portfolio upgrade

An entirely rebuilt, responsive, client-focused portfolio based on the HTML code provided by the site owner. Designed for **GitHub Pages** and does not require npm, React, a database, API keys or a build pipeline.

## Files

- `index.html` — page content, project cards, contact form markup, SEO metadata.
- `styles.css` — responsive design, animations, project-preview fallbacks.
- `script.js` — mobile navigation, portfolio filters, optional screenshot loading and contact draft actions.
- `assets/favicon.svg` — site icon.
- `robots.txt`, `sitemap.xml` — basic search crawler metadata.

## Deploy to your existing GitHub Pages portfolio

1. Open the **`Himas`** repository under your GitHub account (`Himazs`). Check its actual GitHub Pages publishing folder in **Settings → Pages** (usually the root of the publishing branch).
2. **Back up** your current site before replacing any files.
3. Put `index.html`, `styles.css`, `script.js`, `robots.txt`, `sitemap.xml` and the `assets/favicon.svg` file at that publishing location, retaining the same folder structure.
4. **Keep your existing `assets/` project screenshot folders** and root `profile.png` if you have them. If these images are missing, the portfolio displays built-in, responsive design mockups and an `MH` portrait placeholder instead of broken images.
5. Commit and push the changes. Your existing GitHub Pages URL `https://himazs.github.io/Himas/` should pick them up when GitHub Pages deploys.
6. Review the live page on desktop and mobile; verify every project's live/demo and GitHub link and update any moved destinations.

## Personal information to review **before publishing**

- Name displayed: **Mohommad Himas** (your provided preference; the old code used **Mohammed Himas**). Ensure it is the spelling you want clients to see, consistent with your other profiles.
- Personal inquiry email: `mhdhimas99@gmail.com` (from your original HTML).
- WhatsApp number: `+94 70 388 3436` (Axyntra's published number). If personal enquiries should not go to the company number, replace the WhatsApp link and number in `index.html` **and** `script.js`.
- LinkedIn: `https://www.linkedin.com/in/mohammed-himas/` (from old site). Confirm it resolves to your account.
- GitHub: `https://github.com/Himazs` (from old site).
- Business website: `https://www.axyntra.lk/`.
- Education: based on details from your old page, presented concisely. Confirm the awarding institution, campus, dates and final wording.
- **The previous CV button was removed** because the CV PDF itself was not supplied. Add the correct PDF to `assets/` before offering a download link.
- This version deliberately avoids unverified client counts, performance claims, testimonials, AI-model accuracy figures, promises of response speed and fixed service pricing.

## Project screenshots

Your original code points to these images, but *no images were included with the uploaded text file*:

```
profile.png
assets/mosque/palli.png
assets/Hitec-Shoes/hero.png
assets/Victoria/hero.png
assets/Megacity/cab.png
assets/Smart_Flood/home.png
assets/Insurance/iq.png
assets/Smart_Flood/web.png
```

When the files exist, real screenshots appear automatically. When missing, illustrated previews appear. Edit a project card's `<img class="project-shot" ...>` in `index.html` to change a screenshot path.

## How contact works (important)

GitHub Pages is static. **The contact form does NOT send information to a server.** The `Open email draft` button opens the visitor's local mail application using `mailto:`. `Send via WhatsApp` opens WhatsApp with the same message. The visitor must send it themselves; neither path stores the information on your website.

If you want fully web-based form submissions later, integrate a server-side mail endpoint or a reputable form provider with spam protection and a suitable privacy notice. Don't place private email API tokens in browser JavaScript.

## Updating services or projects

Edit the text of the HTML cards in `index.html`. `data-category="website|app|ai"` controls portfolio filtering; `data-filter` values on the filter buttons must match. Project links use explicit URLs and open in a new tab. The `07` counter is a manual label; update it if you change the count.

## Test locally

Double-clicking `index.html` works for most functionality. For an environment closer to GitHub Pages, start a local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Publishing scope

This package creates only local files. It does **not** alter your GitHub repository, publish any website, send client emails, or spend an advertising budget.
