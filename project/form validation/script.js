const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', () => {
  let value = phoneInput.value.replace(/\D/g, ''); // remove non-digits
  if (value.length > 10) {
    value = value.slice(0, 10);
  }
  phoneInput.value = value;
});