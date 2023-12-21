import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// Set up the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("pink")

// Set up the camera
const camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 7;

// Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);


// Create the chessboard
const boardSize = 8;
const tileSize = 1;
const chessboard = new THREE.Group();

for (let i = 0; i < boardSize; i++) {
  for (let j = 0; j < boardSize; j++) {
    const tileGeometry = new THREE.BoxGeometry(tileSize, tileSize, 0.2);
    const tileMaterial = new THREE.MeshBasicMaterial({ color: (i + j) % 2 === 0 ? 0xffffff : 0x000000 });
    const tileMesh = new THREE.Mesh(tileGeometry, tileMaterial);
    tileMesh.position.set(i - boardSize / 2 + 0.5, j - boardSize / 2 + 0.5, 0);
    chessboard.add(tileMesh);
  }
}
scene.add(chessboard);
chessboard.rotation.x = 1.57;




// Grid Helper
const gridHelper = new THREE.GridHelper();
scene.add(gridHelper);
gridHelper.position.y = -1;




// Set up lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 0, 1);
scene.add(directionalLight);


// Adjust aspect ratio and render when window is resized
window.addEventListener('resize', () => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;

  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(newWidth, newHeight);
});

//object loader
const loader = new GLTFLoader();

loader.load("models/chesspiece.glb", (gltf) => {
  const model = gltf.scene;
  chessboard.add(model);
  model.rotation.y =-1;
  model.rotation.x = 1.3;
  model.rotation.z = 2.5;



  // model.scale.set(0.2, 0.2, 0.2)
  model.position.x = 90;
  model.position.y = 0;
  model.position.z = -0.9;

});








// Animation loop
const animate = () => {
  requestAnimationFrame(animate);
  // chessboard.rotation.x += 0.01;
  // chessboard.rotation.y += 0.01;
  chessboard.rotation.z += 0.0000001;
  controls.update();

  renderer.render(scene, camera);
};

animate();







