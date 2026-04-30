# amirhosseinghaffari.github.io

Personal academic website of **Amirhossein Ghaffari**, doctoral researcher at the
[University of Oulu](https://www.oulu.fi/). Built with the
[al-folio](https://github.com/alshedivat/al-folio) Jekyll theme.

## What has been customized for you

- `_config.yml` — site title, name, URL, description, footer.
- `_pages/about.md` — landing-page bio.
- `_pages/cv.md`, `_data/cv.yml` — CV page rendered from structured data (rendercv format).
- `_pages/publications.md`, `_bibliography/papers.bib` — publications list (entries seeded from your `publications.tex` cite keys; **edit the bib to add real metadata**).
- `_pages/news.md`, `_news/announcement_*.md` — news items pulled from your CV.
- `_data/socials.yml` — email, LinkedIn (add Google Scholar / GitHub / ORCID).
- Navbar pruned to `about / publications / news / cv`. Other sample pages (blog, projects, books, repositories, teaching, profiles) are kept in the repo but hidden from the navbar.
- Source LaTeX files for your CV and publications list are kept under `_source_cv/` and `assets/pdf/` for reference.

## TODO before going live

1. **Profile photo** — replace `assets/img/prof_pic.jpg` with your headshot (square, ≥ 400 × 400).
2. **CV PDF** — compile `assets/pdf/Amirhossein_Ghaffari_CV.tex` and overwrite the empty `assets/pdf/Amirhossein_Ghaffari_CV.pdf`. The download button on `/cv/` points to this file.
3. **Publications** — open `_bibliography/papers.bib` and replace each placeholder entry with the real title / venue / year / DOI / pages. Add `selected={true}` on entries you want featured on the home page. Optional fields: `pdf={...}`, `code={...}`, `slides={...}`, `bibtex_show={true}`.
4. **Socials** — fill in `scholar_userid`, `github_username`, `orcid_id` in `_data/socials.yml`.
5. **Domain & URL** — edit `url:` in `_config.yml`. If you publish to `https://<username>.github.io`, leave `baseurl: ""`. If you publish to a project repo (`/repo-name/`), set `baseurl: "/repo-name"`.

## Run locally

The simplest way is Docker (no Ruby setup needed):

```bash
docker compose up
# then open http://localhost:8080
```

Or with Ruby ≥ 3.1 / Bundler:

```bash
bundle install
bundle exec jekyll serve --livereload
# then open http://localhost:4000
```

## Deploy to GitHub Pages

1. Create a new GitHub repo named **`<your-username>.github.io`** (e.g. `amirhosseinghaffari.github.io`).
2. From this directory:

   ```bash
   git init
   git add .
   git commit -m "Initial site based on al-folio"
   git branch -M main
   git remote add origin git@github.com:<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```

3. In **Settings → Pages**, choose `GitHub Actions` as the source. al-folio ships with a workflow under `.github/workflows/` that will build and deploy automatically.
4. Wait ~2 minutes; the site will be live at `https://<your-username>.github.io/`.

## Useful upstream docs

- al-folio README: <https://github.com/alshedivat/al-folio>
- Customization guide: see `CUSTOMIZE.md` in this repo.
- FAQ: see `FAQ.md`.
