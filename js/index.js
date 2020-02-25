var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );

var camera = new THREE.PerspectiveCamera( 20, window.innerWidth / window.innerHeight, 1, 10000 );
camera.rotation.y = 45/180*Math.PI;
camera.position.x = 800;
camera.position.y = 500;
camera.position.z = 1000;

hlight = new THREE.AmbientLight(0x303030);
scene.add(hlight);

let keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);

let fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(100, 0, 100);

let backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let mtlLoader = new THREE.MTLLoader();
mtlLoader.load('model/Lamborghini_Aventador.mtl', function(materials) {
  materials.preload();

  let objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load('model/Lamborghini_Aventador.obj', function (obj) {
    scene.add(obj);
    animate();
  },
  function( xhr ){
    console.log( (xhr.loaded / xhr.total * 100) + "% loaded")
  }, 
  function(error) {
    console.log(error)
  })

})




// let loader = new THREE.GLTFLoader();
// loader.load('Lamborghini_Aventador.gltf', function(gltf){
//   scene.add(gltf.scene);
//   animate();
// }, undefined, function(error) {
//   console.log(error);
// })

controls = new THREE.OrbitControls(camera, renderer.domElement);

function animate() {
  renderer.render(scene, camera);
  controls.update();
  requestAnimationFrame(animate);
}