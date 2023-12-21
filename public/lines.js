import * as THREE from 'three'

// console.log("Lines portion",THREE)

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);


//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial( { color: "red" } );

// After material we will need a geometry with some vertices:
const points = [];
points.push( new THREE.Vector3( - 10, 9,0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );


const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );
scene.add( line );
renderer.render( scene, camera );
