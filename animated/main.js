import { initEngine } from 'https://yanivdg.github.io/yanivdg/animated/core_engine.js';
import { loadParrots } from 'https://yanivdg.github.io/yanivdg/animated/asset_loader_parrot.js';
import { createFlock, updateFlock } from 'https://yanivdg.github.io/yanivdg/animated/flock_system_boids.js';

// 1. Start engine
initEngine();

// 2. Load assets (parrots)
const parrots = loadParrots();

// 3. Create flock system
const flock = createFlock(parrots);

// 4. Game loop
function loop() {
  updateFlock(flock);
  requestAnimationFrame(loop);
}

loop();
