import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DragControls } from 'three/examples/jsm/controls/DragControls'


//  scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x85ccbd)

// camera
const camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = 7;

//  renderer
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
chessboard.rotation.x = 1.6;

const axisHelper = new THREE.AxesHelper(5)
scene.add(axisHelper);

// Grid Helper
const gridHelper = new THREE.GridHelper()
scene.add(gridHelper);
gridHelper.position.y = -1;



// Set up lights
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
// ambientLight.visible = false;
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 0, 1);
// directionalLight.visible = false;
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
//import-models/Soldier.glb
const loader = new GLTFLoader();

// Chess-Pawn Black   ---------------------- -----------------------------------------------------------------------------------------------------------------------
function PawnControls(a,b,c, model) {
    model.rotation.x = a;
    model.position.x = b;
    model.position.y = c;
    const controlss = new DragControls([model], camera, renderer.domElement);
    controlss.addEventListener("dragstart", (event) => { controls.enabled = false; });
    controlss.addEventListener("dragend", (event) => { controls.enabled = true; })
}

loader.load("models/chess_pawn.glb", (gltf) => {
    const model = gltf.scene;
    chessboard.add(model);
    PawnControls(-1.6,2.5,0.5,model);
});

loader.load("models/chess_pawn.glb", (gltf) => {
    const model1 = gltf.scene;
    chessboard.add(model1);
    PawnControls(-1.6,2.5,1.5,model1)
});

loader.load("models/chess_pawn.glb", (gltf) => {
    const model2 = gltf.scene;
    chessboard.add(model2);
    PawnControls(-1.6,2.5,2.5,model2)
});

loader.load("models/chess_pawn.glb", (gltf) => {
    const model3 = gltf.scene;
    chessboard.add(model3);
    PawnControls(-1.6,2.5,3.5,model3)
});

loader.load("models/chess_pawn.glb", (gltf) => {
    const model4 = gltf.scene;
    chessboard.add(model4);
    PawnControls(-1.6,2.5,-1.5,model4)
});

loader.load("models/chess_pawn.glb", (gltf) => {
    const model5 = gltf.scene;
    chessboard.add(model5);
    PawnControls(-1.6,2.5,-2.5,model5)
});

loader.load("models/chess_pawn.glb", (gltf) => {
    const model6 = gltf.scene;
    chessboard.add(model6);
    PawnControls(-1.6,2.5,-3.5,model6)
});

loader.load("models/chess_pawn.glb", (gltf) => {
    const model7 = gltf.scene;
    chessboard.add(model7);
    PawnControls(-1.6,2.5,-0.5,model7)
});
// Chess-Pawn Black ------------------------------------  END

//  Black  king , queen , bishop, knight, rook ------------------------------------

function BlackAll(a,b,c,d,e,name){
    name.scale.set(a,a,a)
    name.rotation.x = b;
    name.position.x = c;// aage piche
    name.position.y = d;// left -right
    name.position.z = e;// up-down
    const controlss = new DragControls([name], camera, renderer.domElement);
    controlss.addEventListener("dragstart", (event) => { controls.enabled = false; });
    controlss.addEventListener("dragend", (event) => { controls.enabled = true; })
}

loader.load("models/black_king.glb", (gltf) => {
    const king = gltf.scene;
    chessboard.add(king);
    BlackAll(0.4,-1.6,3,0.3,0.6,king)
});

loader.load("models/black_queen.glb", (gltf) => {
    const queen = gltf.scene;
    chessboard.add(queen);
    BlackAll(0.4,-1.6,4,-0.7,0.6,queen)
});
//ROOK - BLACK-----------------------
loader.load("models/rook_chess_piece.glb", (gltf) => {
    const Rook = gltf.scene;
    chessboard.add(Rook);
    BlackAll(0.6,-1.6,3.5,-3.5,-0.1,Rook)
});
loader.load("models/rook_chess_piece.glb", (gltf) => {
    const Roo1 = gltf.scene;
    chessboard.add(Roo1);
    BlackAll(0.6,-1.6,3.5,3.5,-0.1,Roo1)
});
//ROOK - BLACK----------------------- End
//KING - BLACK-----------------------
loader.load("models/chess_knight.glb", (gltf) => {
    const knight = gltf.scene;
    chessboard.add(knight);
    BlackAll(0.5,-1.6,3,2.5,-1.1,knight)
});

loader.load("models/chess_knight.glb", (gltf) => {
    const knight1 = gltf.scene;
    chessboard.add(knight1);
    BlackAll(0.5,-1.6,3,-2.5,-1.1,knight1)
});
//Knight - BLACK----------------------- End
//BIsHOP - BLACK-----------------------
loader.load("models/black_bishop.glb", (gltf) => {
    const Bishop = gltf.scene;
    chessboard.add(Bishop);
    BlackAll(0.5,-1.6,1.7,1.2,1.1,Bishop)
});
loader.load("models/black_bishop.glb", (gltf) => {
    const Bishop1 = gltf.scene;
    chessboard.add(Bishop1);
    BlackAll(0.5,-1.6,1.7,-1.8,1.1,Bishop1)
});

//BISHOP- BLACK----------------------- End
//   ---------------------- -----------------------   Chess Black END      -------------------------------------------------------------------------------------------


//   ---------------------- ----------------------    Chess White Start    -----------------------------------------------------------------------------------------------

//Pawn - White----------------------- -------------------------

function WhitePawn(a,b,c,model){
    model.scale.set(0.3, 0.3, 0.3)
    model.rotation.x = a;
    model.position.x = b;  // aage piche
    model.position.y = c;
    const controlss = new DragControls([model], camera, renderer.domElement);
    controlss.addEventListener("dragstart", (event) => { controls.enabled = false });
    controlss.addEventListener("dragend", (event) => { controls.enabled = true });
}

loader.load("white-models/chess_pawnn.glb", (gltf) => {
    const whiteModel = gltf.scene;
    chessboard.add(whiteModel);
    WhitePawn(-1.6,-2.5,0.5,whiteModel);
});

loader.load("white-models/chess_pawnn.glb", (gltf) => {
    const whiteModel2 = gltf.scene;
    chessboard.add(whiteModel2);
    WhitePawn(-1.6,-2.5,1.5,whiteModel2)
});

loader.load("white-models/chess_pawnn.glb", (gltf) => {
    const whiteModel3 = gltf.scene;
    chessboard.add(whiteModel3);
    WhitePawn(-1.6,-2.5,2.5,whiteModel3)
});

loader.load("white-models/chess_pawnn.glb", (gltf) => {
    const whiteModel4 = gltf.scene;
    chessboard.add(whiteModel4);
    WhitePawn(-1.6,-2.5,3.5,whiteModel4)
});

loader.load("white-models/chess_pawnn.glb", (gltf) => {
    const whiteModel5 = gltf.scene;
    chessboard.add(whiteModel5);
    WhitePawn(-1.6,-2.5,-0.5,whiteModel5)
});

loader.load("white-models/chess_pawnn.glb", (gltf) => {
    const whiteModel6 = gltf.scene;
    chessboard.add(whiteModel6);
    WhitePawn(-1.6,-2.5,-1.5,whiteModel6)
});

loader.load("white-models/chess_pawnn.glb", (gltf) => {
    const whiteModel7 = gltf.scene;
    chessboard.add(whiteModel7);
    WhitePawn(-1.6,-2.5,-2.5,whiteModel7)
});
loader.load("white-models/chess_pawnn.glb", (gltf) => {
    const whiteModel8 = gltf.scene;
    chessboard.add(whiteModel8);
    WhitePawn(-1.6,-2.5,-3.5,whiteModel8)
});
//Pawn - White- END    ---------------------- -------------------------

loader.load("white-models/chess_king.glb", (gltf) => {
    const whiteKing = gltf.scene;
    chessboard.add(whiteKing);
    whiteKing.scale.set(0.5, 0.5, 0.5)
    whiteKing.rotation.x = -1.6;
    whiteKing.position.x = -1.8; // aage piche
    whiteKing.position.z = -1.1;  // up-down
    whiteKing.position.y = -0.5; // left -right
    const controlss = new DragControls([whiteKing], camera, renderer.domElement);
    controlss.addEventListener("dragstart", (event) => { controls.enabled = false; });
    controlss.addEventListener("dragend", (event) => { controls.enabled = true; })
});

loader.load("white-models/chess_piece_queen.glb", (gltf) => {
    const whiteQueen = gltf.scene;
    chessboard.add(whiteQueen);
    whiteQueen.scale.set(0.2, 0.18, 0.2)
    whiteQueen.rotation.x = -1.6;
    whiteQueen.position.x = -3.5; // aage piche
    // whiteQueen.position.z = -0.9;  // up-down
    whiteQueen.position.y = 0.5; // left -right
    const controlss = new DragControls([whiteQueen], camera, renderer.domElement);
    controlss.addEventListener("dragstart", (event) => { controls.enabled = false; });
    controlss.addEventListener("dragend", (event) => { controls.enabled = true; })
});


//BIsHOP - white-----------------------
loader.load("white-models/lp_bishop.glb", (gltf) => {
    const whiteBishop = gltf.scene;
    chessboard.add(whiteBishop);
    whiteBishop.scale.set(0.2, 0.25, 0.2)
    whiteBishop.rotation.x = -1.6;
    whiteBishop.position.x = -3.5; // aage piche
    whiteBishop.position.y = 2; // left -right
    whiteBishop.position.z = 0;  // up-down
    const controlss = new DragControls([whiteBishop], camera, renderer.domElement);
    controlss.addEventListener("dragstart", (event) => { controls.enabled = false; });
    controlss.addEventListener("dragend", (event) => { controls.enabled = true; })
});

loader.load("white-models/lp_bishop.glb", (gltf) => {
    const whiteBishop1 = gltf.scene;
    chessboard.add(whiteBishop1);
    whiteBishop1.scale.set(0.2, 0.25, 0.2)
    whiteBishop1.rotation.x = -1.6;
    whiteBishop1.position.x = -3.5; // aage piche
    whiteBishop1.position.y = -1; // left -right
    whiteBishop1.position.z = 0;  // up-down
    const controlss = new DragControls([whiteBishop1], camera, renderer.domElement);
    controlss.addEventListener("dragstart", (event) => { controls.enabled = false; });
    controlss.addEventListener("dragend", (event) => { controls.enabled = true; })
});

//BISHOP- white----------------------- End

//chess Knight white=------------------------------
loader.load("white-models/knight.glb", (gltf) => {
    const whiteKnight = gltf.scene;
    chessboard.add(whiteKnight);
    whiteKnight.scale.set(0.12, 0.16, 0.16)
    whiteKnight.rotation.x = -1.6;
    whiteKnight.position.x = -3.5; // aage piche
    whiteKnight.position.y = -2.4; // left -right
    whiteKnight.position.z = -0.9;  // up-down
    const controlss = new DragControls([whiteKnight], camera, renderer.domElement);
    controlss.addEventListener("dragstart", (event) => { controls.enabled = false; });
    controlss.addEventListener("dragend", (event) => { controls.enabled = true; })
});
loader.load("white-models/knight.glb", (gltf) => {
    const whiteKnight = gltf.scene;
    chessboard.add(whiteKnight);
    whiteKnight.scale.set(0.12, 0.16, 0.16)
    whiteKnight.rotation.x = -1.6;
    whiteKnight.position.x = -3.5; // aage piche
    whiteKnight.position.y = 2.4; // left -right
    whiteKnight.position.z = -0.9;  // up-down
    const controlss = new DragControls([whiteKnight], camera, renderer.domElement);
    controlss.addEventListener("dragstart", (event) => { controls.enabled = false; });
    controlss.addEventListener("dragend", (event) => { controls.enabled = true; })
});

//chess Knight white=--   end  dd  ----------------------------


//Rook white--------------------
loader.load("white-models/rook.glb", (gltf) => {
    const rookWhite = gltf.scene;
    chessboard.add(rookWhite);
    rookWhite.scale.set(0.03, 0.025, 0.02)
    rookWhite.rotation.x = -1.6;
    rookWhite.position.x = -4; // aage piche
    rookWhite.position.y = 3.2; // left -right
    rookWhite.position.z = 0;  // up-down
    const controlss = new DragControls([rookWhite], camera, renderer.domElement);
    controlss.addEventListener("dragstart", (event) => { controls.enabled = false; });
    controlss.addEventListener("dragend", (event) => { controls.enabled = true; })
});

loader.load("white-models/rook.glb", (gltf) => {
    const rookWhite1 = gltf.scene;
    chessboard.add(rookWhite1);
    rookWhite1.scale.set(0.03, 0.025, 0.02)
    rookWhite1.rotation.x = -1.6;
    rookWhite1.position.x = -4; // aage piche
    rookWhite1.position.y = -3.9; // left -right
    rookWhite1.position.z = 0;  // up-down
    const controlss = new DragControls([rookWhite1], camera, renderer.domElement);
    controlss.addEventListener("dragstart", (event) => { controls.enabled = false; });
    controlss.addEventListener("dragend", (event) => { controls.enabled = true; })
});
//Rook white-------------------- end



// Chess White ENDDDDDDDDD  ---------------------- -----------------------------------------------------------------------------------------------------------------------


// Animation loop
const animate = () => {
    requestAnimationFrame(animate);
    //   chessboard.rotation.x += 0.00001;
    //   chessboard.rotation.y += 0.00001;
    //   chessboard.rotation.z += 0.00001;

    controls.update();

    renderer.render(scene, camera);
};

animate();

