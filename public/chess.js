import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// console.log(THREE);



const scene = new THREE.Scene();
scene.background = new THREE.Color("green")
const camera = new THREE.PerspectiveCamera(80,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 8;
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls( camera, renderer.domElement );


const geometry = new THREE.BoxGeometry(8,0.6,8);
const material = new THREE.MeshBasicMaterial({color: "white"});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
cube.position.y = -1;

// Grid Helper
const gridHelper = new THREE.GridHelper();
scene.add(gridHelper);
gridHelper.position.y = -0.70;




//object loader
//import-models/Soldier.glb
const loader = new GLTFLoader();

loader.load( "import-models/chess_kit.glb",( gltf )=> {
     const model = gltf.scene;
    model.scale.set(0.2,0.2,0.2)
    model.position.x = -3.6
    model.position.z = -0.9


	cube.add( model );

    model.traverse( ( object )=> {
        object.color = "red";
        if ( object.isMesh ) { // object.material.color.set("red");
            object.castShadow = true; }
      } );
 
}, undefined, function ( error ) {
	console.error( "error occured abhi",error );
} );









animate();

function animate (){
    controls.update();
renderer.render(scene,camera)
    requestAnimationFrame(animate)
}

