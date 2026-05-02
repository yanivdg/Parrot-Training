// === CORE ENGINE ===
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  powerPreference: "high-performance"
});

renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// === SCENE ===
const scene = new THREE.Scene();

// HDR LIGHT ENVIRONMENT (key for realism)
const pmrem = new THREE.PMREMGenerator(renderer);

// you would load HDRI here:
new THREE.RGBELoader().load("forest.hdr", (hdr) => {
  const envMap = pmrem.fromEquirectangular(hdr).texture;
  scene.environment = envMap;
  scene.background = envMap;
});

// === CAMERA ===
const camera = new THREE.PerspectiveCamera(55, innerWidth/innerHeight, 0.1, 2000);
camera.position.set(0, 2, 10);
