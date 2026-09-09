# Project page — Grasping and tossing of rigid objects

Static page for the thesis work: no build step, no framework. `index.html`, one
stylesheet, one script.

Visual structure from the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template),
adapted from the [Nerfies](https://nerfies.github.io/) page.

## Preview locally

```bash
python3 -m http.server 8000   # http://localhost:8000
```

## The numbers

The evaluation table is written out in `index.html`. It comes from the frozen
bundle `data/eval_20260830` in `~/Projects/tossing-results`, which is not going to
change; if it ever does, print the current values and edit the two rows by hand:

```bash
cd ~/Projects/tossing-results && ./run -m analysis.stats
```

## Still missing

- Figures in `static/images/`.
- Links to the thesis PDF and to the code, once either is public.

## The video

`static/videos/reel.mp4` is the English reel, transcoded for the web from
`outputs/video/reel.en.mp4` in `~/Projects/tossing-results` (35 MB -> 11 MB):

```bash
ffmpeg -i reel.en.mp4 -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p \
       -c:a aac -b:a 96k -ac 1 -movflags +faststart static/videos/reel.mp4
```

`+faststart` matters: without it the browser has to fetch the whole file before
it can start playing. It has narration, so it plays with controls and sound and
does not autoplay. If a future cut goes much past ~25 MB, host it on YouTube and
embed it instead of committing the file.

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
