# Grasping and tossing — academic project page

Static research page based on the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template),
adapted from [Nerfies](https://nerfies.github.io/). The centered title, author and
affiliation block, publication buttons, video, article sections, and BibTeX follow
the original layout. Cinvestav identity colors and logo are retained.

Published at https://jfaustogc.github.io/tossing-page/ through GitHub Pages
(`main`, repository root). There is no build step.

## Preview

```bash
python3 -m http.server 8000
```

Open http://localhost:8000. JavaScript is used only for copying the citation.

## Content

The page uses the current paper's title and reports its method, experimental
setup, simulation results, physical evaluation, and grasp policy analysis.
Section headings use ordinary academic labels. The video remains unchanged and
is identified as footage of an earlier evaluation.

The paper is available as `static/pdfs/paper-draft.pdf` (English, six pages),
and the full thesis as `static/pdfs/thesis.pdf` (Spanish, 96 pages). Their sources
are `../tossing-results/documents/paper/root.pdf` and
`../tossing-results/documents/tesis/Tesis.pdf`. Cover images show their first pages.
The original results excerpt remains available at its existing path.

## Results

Physical counts follow Table II of the current paper and Chapter 4 of the thesis.
They were independently checked against all 826 trials in recording session
`15de8ee141fb` in the experiment repository:

| Split | Grasp | Toss after grasp | Complete task |
|---|---|---|---|
| Seen | 400/410 (97.56%) | 349/400 (87.25%) | 349/410 (85.12%) |
| Unseen | 400/416 (96.15%) | 306/400 (76.50%) | 306/416 (73.56%) |

Simulation results follow Table I (1,720 grasp attempts per model).
`static/data/results.json` records the main counts and provenance. Update it and
the HTML tables together if the source results change. The older August bundle
is not the source for these tables.

A successful toss enters the assigned bin, including cases followed by a bounce
out. The page states this definition and the restricted evaluation domain.

## Figures

Assets under `static/images/research/` come from the paper in
`../tossing-results/documents/paper/figures/`:

| Web asset | Source |
|---|---|
| `system-overview.svg` | `system-overview.pdf`, exported with `pdftocairo -svg` |
| `setup.webp` | `setup-annotated.pdf`, rendered at 1600 px |
| `parts.webp` | `evaluation-parts-photo.pdf`, rendered at 1400 px |
| `grasp-maps.webp` | `grasp-maps.pdf`, rendered at 1400 px |

Raster figures use Poppler and ImageMagick WebP conversion. The paper's figure
README records their detailed provenance. No new imagery was generated for the
website. The setup photograph has a blurred room background, as disclosed in
its caption. The system diagram is schematic. The grasp-map caption explains
independent score normalization and the reported high-score-area fraction.

## Video

`static/videos/reel.mp4` is the existing English reel. It documents an earlier
evaluation and has narration without music. The master is
`../tossing-results/outputs/video/reel.en.publicar.mp4`. Video improvements and
YouTube hosting are separate work; the video file is unchanged.
