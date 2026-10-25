# Learning to grasp for robotic tossing

Static research page for the current paper and Spanish thesis. Hosted at
https://jfaustogc.github.io/tossing-page/ through GitHub Pages (`main`, repository root).
No framework, build step, external font service, or JavaScript dependency is required.

## Preview

```bash
python3 -m http.server 8000
```

Open http://localhost:8000. The method, figures, results table, downloads, and
citation remain available without JavaScript. JavaScript enables the physical
metric selector and citation copying.

## Content and results

The page follows the two-stage learning method: geometric pretraining, simulated
toss-outcome refinement, and fixed grasp-policy deployment with ballistic motion
planning. The physical release-speed correction is calibrated on the robot and
held fixed during evaluation.

Results follow the current manuscript, Tables I and II, and Chapter 4 of the
thesis. The physical counts were independently checked against all 826 trials
in recording session `15de8ee141fb` in the experiment repository:

| Split | Grasp | Target entry after grasp | Full task |
|---|---|---|---|
| Seen | 400/410 = 97.56% | 349/400 = 87.25% | 349/410 = 85.12% |
| Unseen | 400/416 = 96.15% | 306/400 = 76.50% | 306/416 = 73.56% |

Simulation full-task success is 66.8% after geometric pretraining and 94.1%
after refinement (U-Net with 32 orientations; 1,720 attempts per model).
`static/data/results.json` preserves the source and numerical snapshot. If the
results change, update that snapshot, the static HTML, and `static/js/index.js`
together. Do not use the older August evaluation bundle for these results.

Success means entry into the assigned target bin, including entry followed by a
bounce out; a toss that first enters a different bin is a miss. Unseen parts are
the four held-out shapes, not arbitrary objects. All eight parts are rectilinear,
with one physical instance per shape.

## Images

All research assets come from `../tossing-results/`. No new imagery was generated
for the website redesign.

| Web asset in `static/images/research/` | Source |
|---|---|
| `system-overview.svg` | `documents/paper/figures/system-overview.pdf` |
| `training-geometric.svg`, `training-refinement.svg` | Viewport crops of the same vector system diagram, used on mobile; cross-panel arrow omitted at the cropped edges |
| `setup.webp` | `documents/paper/figures/setup-annotated.pdf` |
| `parts.webp` | `documents/paper/figures/evaluation-parts-photo.pdf` |
| `grasp-maps.webp` | `documents/paper/figures/grasp-maps.pdf` |
| `gripper.webp` | `data/photos/efector_regla.jpeg` |

SVG exports use `pdftocairo -svg`; photographic/score-map figures use
`pdftoppm -scale-to 1400 -singlefile -png` followed by ImageMagick WebP conversion.
The setup figure uses 1600 pixels. Score values, masks, and geometry are preserved.
See the paper figure README for detailed provenance. The setup photograph has a
blurred room background, as disclosed in the page caption. The system diagram
contains schematic scenes and trajectories. Grasp-map colors are independently
normalized, and the page explains the high-score-area metric.

The Cinvestav logo and identity palette are retained: official green #009383,
secondary blue #005179, and the institution's name, Center for Research and
Advanced Studies. The website uses system fonts and a serif heading stack.

## Video

The existing `static/videos/reel.mp4` remains unchanged. This English project
reel documents an earlier evaluation; the page explicitly distinguishes it from
the current paper/thesis results. Video revisions are a separate task.

The existing master is
`../tossing-results/outputs/video/reel.en.publicar.mp4`. It has narration and no
music bed. No new YouTube embed or upload has been configured.

## Downloads and citation

- `static/pdfs/paper-draft.pdf`: snapshot of `documents/paper/root.pdf`, English,
  six pages, clearly labeled as a working draft.
- `static/pdfs/thesis.pdf`: snapshot of `documents/tesis/Tesis.pdf`, Spanish,
  96 pages.

Cover images are first-page previews. BibTeX uses the thesis's actual Spanish
title. The original results excerpt and cover remain at their existing paths
for previously shared links, but the page now offers the full documents.

The previous design was adapted from the Academic Project Page Template and
Nerfies. The current layout and stylesheet were rebuilt for this research story.
