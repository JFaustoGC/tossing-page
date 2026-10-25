// Counts reported in Table II of the paper; verified against session 15de8ee141fb.
const physical = {
  seen: { attempts: 410, grasps: 400, hits: 349 },
  unseen: { attempts: 416, grasps: 400, hits: 306 },
};
const metrics = {
  full: { numerator: 'hits', denominator: 'attempts', unit: 'attempts', description: 'Successful target entries per grasp attempt, including failed grasps.' },
  grasp: { numerator: 'grasps', denominator: 'attempts', unit: 'attempts', description: 'Successful grasps per grasp attempt.' },
  toss: { numerator: 'hits', denominator: 'grasps', unit: 'executed tosses', description: 'Successful target entries per executed toss, after a successful grasp.' },
};
for (const input of document.querySelectorAll('input[name="metric"]')) {
  input.addEventListener('change', () => {
    if (!input.checked) return;
    const metric = metrics[input.value];
    if (!metric) return;
    document.querySelector('#metric-description').textContent = metric.description;
    for (const row of document.querySelectorAll('#physical-chart [data-cohort]')) {
      const cohort = physical[row.dataset.cohort];
      const numerator = cohort[metric.numerator];
      const denominator = cohort[metric.denominator];
      const rate = 100 * numerator / denominator;
      row.querySelector('.rate').textContent = `${rate.toFixed(2)}%`;
      row.querySelector('.bar-fill').style.setProperty('--value', `${rate}%`);
      row.querySelector('.bar-count').textContent = `${numerator} / ${denominator} ${metric.unit}`;
    }
  });
}

const copyButton = document.querySelector('#copy-bibtex');
copyButton?.addEventListener('click', async () => {
  const text = document.querySelector('#bibtex-code')?.textContent ?? '';
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(text);
    copyButton.textContent = 'Copied';
    status.textContent = 'Citation copied to clipboard.';
    window.setTimeout(() => { copyButton.textContent = 'Copy BibTeX'; status.textContent = ''; }, 2500);
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#bibtex-code'));
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Copy is unavailable in this browser. The citation is selected for manual copying.';
  }
});
