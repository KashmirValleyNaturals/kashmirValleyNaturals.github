document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    document.body.style.opacity = '0.96';
    setTimeout(() => document.body.style.opacity = '1', 150);
  });
});
