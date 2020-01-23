var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

hlight = new THREE.AmbientLight(0x404040, 100);
scene.add(hlight);

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth / 1.5, window.innerHeight / 1.5 );
document.body.appendChild( renderer.domElement );

// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

let loader = new THREE.GLTFLoader();
loader.load('Lamborghini_Aventador.gltf', function(gltf){
  scene.add(gltf.scene);
  renderer.render(scene, camera);
})


// camera.position.z = 5;

// var animate = function () {
//   requestAnimationFrame( animate );

//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   renderer.render( scene, camera );
// };

// animate();