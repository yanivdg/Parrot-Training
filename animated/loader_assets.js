const loader = new THREE.GLTFLoader();

function loadParrot() {
  loader.load("parrot_photoreal.glb", (gltf) => {

    const parrot = gltf.scene;

    // enable PBR shadows
    parrot.traverse((m) => {
      if (m.isMesh) {
        m.castShadow = true;
        m.receiveShadow = true;
      }
    });

    parrot.position.set(
      (Math.random() - 0.5) * 10,
      Math.random() * 3 + 2,
      (Math.random() - 0.5) * 10
    );

    scene.add(parrot);
    flock.push({
      mesh: parrot,
      velocity: new THREE.Vector3()
    });
  });
}
