// Generate Confetti
const confetti = document.querySelector('.confetti');

for (let i = 0; i < 100; i++) {
  const span = document.createElement('span');
  span.style.position = 'absolute';
  span.style.top = '-10px';
  span.style.left = Math.random() * 100 + 'vw';
  span.style.width = span.style.height = (Math.random() * 8 + 5) + 'px';
  span.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
  span.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
  confetti.appendChild(span);
}
