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

// ── Typewriter effect on heading ──
const titleEl = document.querySelector('.title');
const fullText = titleEl.textContent.trim();
titleEl.textContent = '';
titleEl.classList.add('typing');

let charIndex = 0;
const typeInterval = setInterval(() => {
  titleEl.textContent = fullText.slice(0, ++charIndex);
  if (charIndex >= fullText.length) {
    clearInterval(typeInterval);
    titleEl.classList.remove('typing');
    titleEl.classList.add('typed');
  }
}, 80);

// ── Floating hearts ──
const heartsContainer = document.querySelector('.hearts-container');
const HEART_CHARS = ['♥', '❤', '♡'];

function spawnHeart() {
  const heart = document.createElement('span');
  heart.classList.add('heart');
  heart.textContent = HEART_CHARS[Math.floor(Math.random() * HEART_CHARS.length)];

  const size = Math.random() * 1.4 + 0.6;
  const left = Math.random() * 100;
  const duration = Math.random() * 4 + 4;
  const delay = Math.random() * 2;

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

// ── Sparkle particles ──
const sparklesContainer = document.querySelector('.sparkles-container');

function spawnSparkle() {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');

  const left = Math.random() * 100;
  const top = Math.random() * 100;
  const duration = Math.random() * 2 + 1.5;
  const size = Math.random() * 3 + 2;

  sparkle.style.cssText = `
    left: ${left}%;
    top: ${top}%;
    width: ${size}px;
    height: ${size}px;
    animation-duration: ${duration}s;
  `;

  sparklesContainer.appendChild(sparkle);
  sparkle.addEventListener('animationend', () => sparkle.remove());
}

setInterval(spawnSparkle, 300);

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
