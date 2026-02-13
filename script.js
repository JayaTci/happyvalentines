// ── Video playback fix ──
const video = document.querySelector('.bg-video');

video.addEventListener('pause', () => {
  video.play().catch(() => {});
});

video.addEventListener('ended', () => {
  video.currentTime = 0;
  video.play().catch(() => {});
});

document.addEventListener('visibilitychange', () => {
  if (!document.hidden && video.paused) {
    video.play().catch(() => {});
  }
});

// ── Floating hearts ──
const heartsContainer = document.querySelector('.hearts-container');
const HEART_CHARS = ['♥', '❤', '♡'];

function spawnHeart() {
  const heart = document.createElement('span');
  heart.classList.add('heart');
  heart.textContent = HEART_CHARS[Math.floor(Math.random() * HEART_CHARS.length)];

  const size = Math.random() * 1.4 + 0.6; // 0.6rem – 2rem
  const left = Math.random() * 100;        // 0% – 100%
  const duration = Math.random() * 4 + 4;  // 4s – 8s
  const delay = Math.random() * 2;         // 0s – 2s

  heart.style.cssText = `
    left: ${left}%;
    font-size: ${size}rem;
    animation-duration: ${duration}s;
    animation-delay: ${delay}s;
  `;

  heartsContainer.appendChild(heart);
  heart.addEventListener('animationend', () => heart.remove());
}

setInterval(spawnHeart, 400);

// ── Music toggle ──
const audio = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');

musicBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play().catch(() => {});
    musicBtn.textContent = '♫';
    musicBtn.title = 'Mute music';
  } else {
    audio.pause();
    musicBtn.textContent = '♪';
    musicBtn.title = 'Play music';
  }
});
