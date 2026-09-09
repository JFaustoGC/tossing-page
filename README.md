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
`~/Projects/tossing-results` (35 MB -> 11 MB). Render the master with the two
flags off before transcoding:

```bash
# in ~/Projects/tossing-results
./run video/render_reel.py --idioma en --sin-marca --sin-musica \
     --salida outputs/video/reel.en.publicar.mp4

ffmpeg -i reel.en.publicar.mp4 -c:v libx264 -preset slow -crf 26 \
       -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart \
       static/videos/reel.mp4
```

`--sin-marca` drops the render date burned in the corner, which is there to tell
local cuts apart and has no business being published. `--sin-musica` drops the
music bed: the bed is CC BY and would oblige us to carry the credit on this page
and anywhere the video goes, so the published cut ships without it. Both stay on
by default for local review.

`+faststart` matters: without it the browser has to fetch the whole file before
it can start playing. It has narration, so it plays with controls and sound and
does not autoplay. If a future cut goes much past ~25 MB, host it on YouTube and
embed it instead of committing the file.

## The results chapter

`static/pdfs/chapter4-results.pdf` is chapter 4 of the thesis, pulled out of the
built `Tesis.pdf` in `~/Projects/tesis-tossing`. Chapter 4 is printed pages
11-26, which are PDF pages 29-44 -- the front matter is numbered in roman, so
the offset is 18 and it has to be rechecked whenever the front matter grows:

```bash
qpdf --empty --pages Tesis.pdf 29-44 -- static/pdfs/chapter4-results.pdf
pdftoppm -r 150 -png -f 1 -l 1 -singlefile static/pdfs/chapter4-results.pdf p1
magick p1.png -resize 620x -quality 88 static/images/chapter4-cover.jpg
```

The cover image is the first page, and the page shows that instead of embedding
a PDF viewer: an `<object>` viewer puts a scrollbar inside a scrollbar and every
browser paints it differently, while an image looks the same everywhere and
whoever wants to read opens the file.

It is a draft in Spanish, and the page says so.

## Institutional identity

The page follows the Cinvestav graphic identity manual (Departamento de Difusion,
2022). What it constrains here:

- **The name.** Only three forms are permitted, and the manual says so in those
  words: "Ninguna otra variacion del nombre es permitida". They are `Cinvestav`,
  `Centro de Investigacion y de Estudios Avanzados del Instituto Politecnico
  Nacional`, and `Center for Research and Advanced Studies`. The English form
  stops at *Studies* -- the polytechnic tail exists only in Spanish, and never
  abbreviated to IPN. The acronym is never set in capitals. Credits run
  dependency, centre, postal address, and the unit is written `Campus Saltillo`.
- **The mark.** `static/images/logo-cinvestav-saltillo.png` is SAL5 from the
  official Saltillo pack that Difusion publishes at
  <https://difusion.cinvestav.mx/Funciones/Identidad-grafica>. It must not be
  redrawn, recoloured or recreated. The bare symbol without the word Cinvestav
  is ornamental only and may not stand in for the logosimbolo.
- **The palette.** `--link` is Pantone 7693 C (#005179) and `--marca` is the
  Centre's own Pantone 3285 C (#009383). The blue the template shipped with,
  #3273dc, was Bulma's and is not in the palette. #387FC2 is the colour the
  manual assigns to Saltillo for web headers.
- **The type.** Gotham for titles and Calibri for documents. Both are licensed
  and cannot be served from a web page, so the stack asks for them by name, then
  Carlito (metrically compatible with Calibri), then the system font.

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
