# Project page — Grasping and tossing of rigid objects

Static page for the thesis work: no build step, no framework. `index.html`, one
stylesheet, one script.

Visual structure from the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template),
adapted from the [Nerfies](https://nerfies.github.io/) page.

## Preview locally

```bash
python3 -m http.server 8000   # http://localhost:8000
```

## The numbers are not typed here

The evaluation table between the `NUMEROS` markers in `index.html` is generated,
like the thesis tables, from `analysis/stats.py` in `~/Projects/tossing-results`:

```bash
cd ~/Projects/tossing-results
./run -m sync.page_numbers        # rewrites only what is between the markers
```

Editing those two rows by hand is how the page and the thesis end up disagreeing.

## Still missing

- The project video (`static/videos/hero.mp4` + the commented `<video>` block in
  the teaser). The reel is ~35 MB; if it grows much past that, embed YouTube
  instead of committing the file.
- Figures in `static/images/`.
- Links to the thesis PDF and to the code, once either is public.

## Publish (GitHub Pages)

Already a git repo. To put it online:

```bash
gh auth login                                    # once
gh repo create tossing-page --public --source . --push
gh api -X POST repos/:owner/tossing-page/pages \
  -f 'source[branch]=main' -f 'source[path]=/'
```

Or, in the web UI: **Settings → Pages → Deploy from a branch → `main` → `/ (root)`**.

The URL is then `https://<user>.github.io/tossing-page/`. `.nojekyll` is committed
so GitHub serves the files as they are.
