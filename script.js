const links = document.querySelectorAll('a[href^="#"]');

function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  const targetPosition = targetElement.offsetTop;
const inputs = document.querySelectorAll('.contact input, .contact textarea');

inputs.forEach(input => {
  const label = input.previousElementSibling;
  input.addEventListener('focus', () => {
    label.style.color = '#007bff'; /* Change label color on focus */
  });
  input.addEventListener('blur', () => {
    label.style.color = '#333'; /* Revert label color on blur */
  });
});}