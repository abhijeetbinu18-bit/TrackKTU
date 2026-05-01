# TrackKTU

TrackKTU is a static website for KTU students to check:

- semester SGPA
- overall CGPA
- grade-point reference

## Current structure

- [index.html](C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/index.html:1): home page
- [sgpa.html](C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/sgpa.html:1): semester SGPA page
- [cgpa.html](C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/cgpa.html:1): overall CGPA page
- [grade-chart.html](C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/grade-chart.html:1): grade chart page
- [styles.css](C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/styles.css:1): shared UI
- [app.js](C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/app.js:1): shared logic and data

## Data model

- schemes included: `2024`, `2019`
- branches included: `ECE`, `CSE`, `CPS`, `IT`, `EEE`, `ME`, `CIVIL`
- users mainly enter grades
- subjects and default credits are preloaded branch-wise and semester-wise

## Launch-ready files

- [favicon.svg](C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/favicon.svg:1)
- [site.webmanifest](C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/site.webmanifest:1)
- [robots.txt](C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/robots.txt:1)
- [sitemap.xml](C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/sitemap.xml:1)
- [netlify.toml](C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/netlify.toml:1)
- [vercel.json](C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/vercel.json:1)

## Recommended launch options

### Netlify

1. Create a new site in Netlify.
2. Drag this whole folder in, or connect the repo.
3. Publish directory: `.`
4. No build command is needed.

### Vercel

1. Import the folder or repo into Vercel.
2. Framework preset: `Other`.
3. No build command is needed.
4. Output directory: `.`

### GitHub Pages

1. Push the project to GitHub.
2. Enable GitHub Pages for the root or `main` branch.
3. Serve from the repository root.
4. Keep [.nojekyll](C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/.nojekyll:1) in the repo so GitHub Pages serves the static files directly.

## Important note before public launch

The site is static and deployable now, but some branch data is still stronger in some places than others:

- `CPS` has the strongest verification because it was checked against your grade cards and local syllabus PDF.
- some other branch/scheme presets are still based on published syllabus pages and should be treated as strong presets rather than fully official audited records.

If you want, the next step can be:

- deploy prep as a zip package
- final public-launch checklist
- help choosing between Netlify, Vercel, or GitHub Pages
