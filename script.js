const codeInput = document.getElementById('code');
const codeOutput = document.getElementById('codeOutput');
const languageSelector = document.getElementById('language');

codeInput.addEventListener('input', updatePreview);
languageSelector.addEventListener('change', updateLanguage);

function updatePreview() {
  const code = codeInput.value;
  codeOutput.textContent = code;
  Prism.highlightElement(codeOutput);
}

function updateLanguage() {
  const selectedLang = languageSelector.value;
  codeOutput.className = '';
  codeOutput.classList.add('language-' + selectedLang);
  updatePreview();
}

function downloadImage() {
  const capture = document.getElementById('capture');
  html2canvas(capture).then(canvas => {
    const link = document.createElement('a');
    link.download = 'code.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}

// Initial preview
updatePreview();
