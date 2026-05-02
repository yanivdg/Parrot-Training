function updateFlock() {
  for (let i = 0; i < flock.length; i++) {
    let bird = flock[i];

    let separation = new THREE.Vector3();
    let alignment = new THREE.Vector3();
    let cohesion = new THREE.Vector3();

    let count = 0;

    for (let j = 0; j < flock.length; j++) {
      if (i === j) continue;

      let other = flock[j];
      let dist = bird.mesh.position.distanceTo(other.mesh.position);

      if (dist < 2) {
        separation.add(
          bird.mesh.position.clone().sub(other.mesh.position).normalize().divideScalar(dist)
        );
      }

      alignment.add(other.velocity);
      cohesion.add(other.mesh.position);
      count++;
    }

    if (count > 0) {
      alignment.divideScalar(count);
      cohesion.divideScalar(count).sub(bird.mesh.position);
    }

    bird.velocity.add(separation.multiplyScalar(1.5));
    bird.velocity.add(alignment.multiplyScalar(0.05));
    bird.velocity.add(cohesion.multiplyScalar(0.02));

    bird.mesh.position.add(bird.velocity);
  }
}
