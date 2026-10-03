import confetti from 'canvas-confetti';

/**
 * Fires multi-stage Diwali colorful skyshots bursting across the screen
 */
export const triggerDiwaliSkyshots = () => {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;

  // Festive vibrant palette: Gold, Rose Red, Emerald, Royal Violet, Amber
  const festiveColors = ['#f59e0b', '#ec4899', '#ef4444', '#10b981', '#8b5cf6', '#fbbf24'];

  // 1. Initial Central Big Burst (Like a launcher explosion)
  confetti({
    particleCount: 80,
    spread: 100,
    origin: { y: 0.6 },
    colors: festiveColors,
    startVelocity: 45,
    scalar: 1.2,
    shapes: ['circle', 'square'],
    zIndex: 9999,
  });

  // 2. Continuous Rising & Exploding Skyshots across the screen (Left & Right)
  const interval: any = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 40 * (timeLeft / duration);

    // Left Skyshot Rocket
    confetti({
      particleCount,
      angle: 60,
      spread: 55,
      origin: { x: 0.1, y: 0.7 },
      colors: festiveColors,
      startVelocity: 55,
      zIndex: 9999,
    });

    // Right Skyshot Rocket
    confetti({
      particleCount,
      angle: 120,
      spread: 55,
      origin: { x: 0.9, y: 0.7 },
      colors: festiveColors,
      startVelocity: 55,
      zIndex: 9999,
    });
  }, 250);
};