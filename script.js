import { animate, inView } from 'https://cdn.jsdelivr.net/npm/motion@12.23.12/+esm';

const revealItems = document.querySelectorAll('.reveal');
const progressBar = document.querySelector('.scroll-progress');

revealItems.forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(22px)';
  inView(item, () => {
    animate(item, { opacity: 1, transform: 'translateY(0)' }, { duration: 0.65, delay: index % 3 * 0.08, easing: 'ease-out' });
  }, { amount: 0.18 });
});

window.addEventListener('scroll', () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${scrollableHeight ? window.scrollY / scrollableHeight : 0})`;
}, { passive: true });

anime({ targets: '.hero-copy > *', translateY: [18, 0], opacity: [0, 1], delay: anime.stagger(90), duration: 700, easing: 'easeOutCubic' });
anime({ targets: '.spreadsheet', rotate: [0, 4], scale: [0.94, 1], opacity: [0, 1], duration: 950, delay: 220, easing: 'easeOutElastic(1, .7)' });
anime({ targets: '.note-card', translateY: [20, 0], rotate: [-12, -7], opacity: [0, 1], duration: 700, delay: 580, easing: 'easeOutBack' });
anime({ targets: '.sheet-grid i', backgroundColor: ['#ffffff', '#d0efd9', '#ffffff'], delay: anime.stagger(80, { start: 900 }), duration: 1300, loop: true, easing: 'easeInOutSine' });
anime({ targets: '.sun', scale: [1, 1.06], opacity: [0.8, 1], duration: 2400, direction: 'alternate', loop: true, easing: 'easeInOutSine' });

document.querySelectorAll('.magnetic').forEach((button) => {
  button.addEventListener('pointermove', (event) => {
    const bounds = button.getBoundingClientRect();
    const x = (event.clientX - bounds.left - bounds.width / 2) * 0.12;
    const y = (event.clientY - bounds.top - bounds.height / 2) * 0.12;
    button.style.transform = `translate(${x}px, ${y}px)`;
  });
  button.addEventListener('pointerleave', () => { button.style.transform = ''; });
});