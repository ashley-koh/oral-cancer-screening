const labels = [
];


let scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );

let camera = new THREE.PerspectiveCamera( 10, window.innerWidth / window.innerHeight, 0.1, 10000 );

camera.rotation.y = 45/180*Math.PI;
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 1;

hlight = new THREE.AmbientLight(0xd0d0d0);
scene.add(hlight);

let keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 1.0);
keyLight.position.set(-10, 0, 10);

let fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(10, 0, 10);

let backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(10, 0, -10).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

let loader = new THREE.GLTFLoader();
loader.load('model/mouth.glb', function ( gltf ) {

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

    div.addEventListener("click", routeToLink);
    div.addEventListener("touchstart", routeToLink);

    function routeToLink(event) {
      event.preventDefault();
      location.href = 'https://ashley-koh.github.io/oral-cancer-screening/pages/' + linkName + '/index.html';
      // location.href = '/pages/' + linkName + '/index.html';
    }

    label = new THREE.CSS2DObject( div );
    label.position.set(x, y, z);
    gltf.scene.add( label );

  })

  animate();

},
function ( xhr ) {
  console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
},
function ( error ) {
  console.log(error)
})

// let mtlLoader = new THREE.MTLLoader();
// mtlLoader.load( mtlFile, function(materials) {
//   materials.preload();

//   let objLoader = new THREE.OBJLoader();
//   objLoader.setMaterials(materials);
//   objLoader.load( objFile, function (obj) {
//     scene.add(obj);

    // labels.map( label => {

    //   let { linkName, text, position } = label;
    //   let { x, y, z } = position;

    //   let div = document.createElement('div');
    //   div.className = 'label';
    //   div.textContent = text;
    //   div.style.marginTop = '-1em';

    //   div.addEventListener("click", routeToLink);
    //   div.addEventListener("touchstart", routeToLink);

    //   function routeToLink(event) {
    //     event.preventDefault();
    //     location.href = 'https://ashley-koh.github.io/oral-cancer-screening/pages/' + linkName + '/index.html';
    //     // location.href = '/pages/' + linkName + '/index.html';
    //   }

    //   label = new THREE.CSS2DObject( div );
    //   label.position.set(x, y, z);
    //   obj.add( label );

    // })

//     animate();
//   },
//   function( xhr ){
//     console.log( (xhr.loaded / xhr.total * 100) + "% loaded")
//   }, 
//   function(error) {
//     console.log(error)
//   })

// })

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


let labelRenderer = new THREE.CSS2DRenderer();
labelRenderer.setSize( window.innerWidth, window.innerHeight );
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = 0;
document.body.appendChild( labelRenderer.domElement );

let controls = new THREE.OrbitControls(camera, labelRenderer.domElement);

function animate() {
  labelRenderer.render( scene, camera );
  renderer.render( scene, camera );
  controls.update();
  requestAnimationFrame( animate );
}
