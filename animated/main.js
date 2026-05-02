import { initEngine } from 'https://cdn.jsdelivr.net/gh/yanivdg/Parrot-Training@main/animated/core_engine.js';
import { loadParrots } from 'https://cdn.jsdelivr.net/gh/yanivdg/Parrot-Training@main/animated/asset_loader_parrot.js';
import { createFlock, updateFlock } from 'https://cdn.jsdelivr.net/gh/yanivdg/Parrot-Training@main/animated/flock_system_boids.js';

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
