import * as THREE from "three";

console.log(THREE);
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Create a mesh(geometry and material)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material);
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;

mesh.position.set(0.7, -0.6, 1);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Axes Helper
const axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper);
// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);
//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
