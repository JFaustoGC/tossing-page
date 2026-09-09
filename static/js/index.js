const copyButton = document.querySelector("#copy-bibtex");
const bibtexCode = document.querySelector("#bibtex-code");

copyButton?.addEventListener("click", async () => {
  if (!bibtexCode) return;
  await navigator.clipboard.writeText(bibtexCode.textContent ?? "");
  copyButton.textContent = "Copied";
  window.setTimeout(() => {
    copyButton.textContent = "Copy";
  }, 1600);
});
