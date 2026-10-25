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
