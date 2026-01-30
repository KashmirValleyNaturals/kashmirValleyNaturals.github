// Smooth click feedback
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    document.body.style.opacity = '0.97';
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 150);
  });
});
