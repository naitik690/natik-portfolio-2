const textArea = document.getElementById('text');
const wordCount = document.getElementById('wordCount');

textArea.addEventListener('input', () => {
  const words = textArea.value.trim().split(/\s+/);
  const count = textArea.value.trim() === '' ? 0 : words.length;
  wordCount.textContent = count;
});