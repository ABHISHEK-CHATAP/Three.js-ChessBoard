import './style.css'
import * as THREE from 'three';
//  console.log(THREE);
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
 

const scene = new THREE.Scene();
scene.background = new THREE.Color("skybiue")
const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 6;

const controls = new OrbitControls( camera, renderer.domElement );
// ------------------------------------------------------------------------------------------------------------------------------------------

const AxisHelper = new THREE.AxesHelper()
AxisHelper.x = 2;


// const geometry = new THREE.ConeGeometry( 1, 2, 25 ); 
// // const geometryy = new THREE.BoxGeometry( 5, 0.5, 2 );
// const material = new THREE.MeshBasicMaterial( { color: 'yellow' } );
// const cone = new THREE.Mesh(geometry,material);
// scene.add( cone );





const geometry = new THREE.SphereGeometry( 1, 7, 16 ); 
const material = new THREE.MeshBasicMaterial( { color: "red" } ); 
const sphere = new THREE.Line( geometry, material ); 
scene.add( sphere );

const light = new THREE.AmbientLight( 0x404040,0.4 ); // soft white light
scene.add( light );


// cube.position.x = 4;

let flag = 0;

animate();

function animate() {
	controls.update();

	
sphere.position.x = 4*Math.sin(flag += 0.01)
	sphere.rotation.x +=0.01;
	sphere.rotation.y += 0.001;
	sphere.rotation.z += 0.001;



	renderer.render( scene, camera );
	requestAnimationFrame( animate );

}
