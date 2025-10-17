window.addEventListener('load', () => {
  const music = document.getElementById('bg-music');
  music.volume = 0.5;
  // iOS autoplay fix
  document.body.addEventListener('click', () => {
    music.play();
  }, { once: true });
});
