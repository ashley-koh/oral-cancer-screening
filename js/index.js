const labels = [{
  linkName: 'upper-mouth',
  text: 'Upper Mouth',
  position: { x: 0, y: 5.5, z: 1.5 }
},{
  linkName: 'lower-mouth',
  text: 'Lower Mouth',
  position: { x: 0, y: 2, z: 1.5 }
},{
  linkName: 'tongue',
  text: 'Tongue',
  position: { x: 0.24, y: 3.9, z: 1.5 }
}
];

let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();

let scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );

let camera = new THREE.PerspectiveCamera( 10, window.innerWidth / window.innerHeight, 0.1, 10000 );
camera.rotation.y = 45/180*Math.PI;
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 70;

hlight = new THREE.AmbientLight(0xffffff);
scene.add(hlight);

let keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
keyLight.position.set(-10, 0, 10);

let fillLight = new THREE.DirectionalLight(0xffffff, 1.0);
fillLight.position.set(10, 0, 10);

// let backLight = new THREE.DirectionalLight(0xffffff, 1.0);
// backLight.position.set(0, 0, -10).normalize();

scene.add(keyLight);
scene.add(fillLight);
// scene.add(backLight);

let loader = new THREE.GLTFLoader();
loader.load('model/mouth_scaled.glb', function ( gltf ) {

  const box = new THREE.Box3().setFromObject( gltf.scene );
  const center = box.getCenter( new THREE.Vector3() );

  gltf.scene.position.x += ( gltf.scene.position.x - center.x );
  gltf.scene.position.y += ( gltf.scene.position.y - center.y );
  gltf.scene.position.z += ( gltf.scene.position.z - center.z - 0.005 );

  scene.add( gltf.scene );

  labels.map( label => {

    let { linkName, text, position } = label;
    let { x, y, z } = position;

    let div = document.createElement('div');
    div.className = 'label';
    div.textContent = text;
    div.style.marginTop = '-1em';

    

    let spritey = makeTextSprite( text );
    spritey.position.set(x, y, z);
    gltf.scene.add(spritey)

  })

  animate();

},
function ( xhr ) {
  console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
},
function ( error ) {
  console.log(error)
})

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );
document.body.appendChild( renderer.domElement );

let controls = new THREE.OrbitControls(camera, renderer.domElement);

function animate() {
  renderer.render( scene, camera );
  controls.update();
  requestAnimationFrame( animate );
}

function makeTextSprite( message ) {
  
  let fontsize = 40;
  let borderThickness = 6;
  let canvas = document.createElement("canvas");

  canvas.className = "label";

  canvas.addEventListener("click", routeToLink);
  canvas.addEventListener("touchstart", routeToLink);

  function routeToLink(event) {
    event.preventDefault();
    location.href = 'https://ashley-koh.github.io/oral-cancer-screening/pages/' + linkName + '/index.html';
    // location.href = '/pages/' + linkName + '/index.html';
  }

  let context = canvas.getContext("2d");

  let metric = context.measureText(message);
  let textWidth = metric.width;

  console.log(message, textWidth)

  context.font = "Bold " + fontsize + "px Arial";
  // context.fillText(message, borderThickness, fontsize + borderThickness);
  context.fillText(message, borderThickness, fontsize + borderThickness);

  var texture = new THREE.Texture(canvas)
  texture.magFilter=THREE.NearestFilter;
  texture.needsUpdate = true;

  var spriteMaterial = new THREE.SpriteMaterial( { map: texture, color: 0xffffff } );
  var sprite = new THREE.Sprite( spriteMaterial );
  return sprite;  
}