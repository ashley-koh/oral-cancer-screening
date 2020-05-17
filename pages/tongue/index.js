const { SOURCE } = config;

const labels = [
  {
    linkName: "dorsum",
    text: "	  	  Dorsum",
    position: { x: 0, y: 0.7, z: 0 },
  },
  {
    linkName: "lateral-border",
    text: "Lateral Border",
    position: { x: 1.9, y: 0, z: 0 },
  },
  {
    linkName: "lateral-border",
    text: "Lateral Border",
    position: { x: -1.8, y: 0, z: 0 },
  },
  {
    linkName: "ventral-side",
    text: "   Ventral Side",
    position: { x: 0, y: -1, z: 0 },
  },
];

let scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

let camera = new THREE.PerspectiveCamera(
  10,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
);
camera.rotation.y = (45 / 180) * Math.PI;
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 50;

hlight = new THREE.AmbientLight(0xffffff);
scene.add(hlight);

let keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
keyLight.position.set(-10, 0, 10);

let fillLight = new THREE.DirectionalLight(0xffffff, 1.0);
fillLight.position.set(10, 0, 10);

let backLight = new THREE.DirectionalLight(0xdddddd, 1.0);
backLight.position.set(0, 0, -10).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

let sprites = new THREE.Group();

let loader = new THREE.GLTFLoader();
loader.load(
  "tongue.glb",
  function (gltf) {
    const box = new THREE.Box3().setFromObject(gltf.scene);
    const center = box.getCenter(new THREE.Vector3());

    gltf.scene.position.x += gltf.scene.position.x - center.x;
    gltf.scene.position.y += gltf.scene.position.y - center.y;
    gltf.scene.position.z += gltf.scene.position.z - center.z - 0.005;

    scene.add(gltf.scene);

    gltf.scene.add(sprites);

    labels.map((label) => {
      let { linkName, text, position } = label;
      let { x, y, z } = position;

      let spritey = makeTextSprite(text);
      spritey.name = linkName;
      spritey.position.set(x, y, z);
      sprites.add(spritey);
    });

    animate();
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.log(error);
  }
);

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

let controls = new THREE.OrbitControls(camera, renderer.domElement);

function animate() {
  // update the picking ray with the camera and mouse position
  raycaster.setFromCamera(mouse, camera);

  // calculate objects intersecting the picking ray
  let intersects = raycaster.intersectObjects(scene.children);

  for (let i = 0; i < intersects.length; i++) {
    intersects[i].object.material.color.set(0xff0000);
  }

  renderer.render(scene, camera);
  controls.update();
  requestAnimationFrame(animate);
}

window.addEventListener("resize", onWindowResize, false);
window.addEventListener("mousemove", onMouseMove, false);
window.addEventListener("touchstart", onTouchStart, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Event Listeners to detect whether user input is click or drag
let moved;
let selectedObject = null;

function onMouseMove(event) {
  event.preventDefault();

  moved = true;

  if (selectedObject) {
    selectedObject.scale.set(1, 1, 1);
    document.body.style.cursor = "default";
    selectedObject = null;
  }

  let intersects = getIntersects(event.layerX, event.layerY);
  if (intersects.length > 0) {
    let res = intersects.filter(function (res) {
      return res && res.object;
    })[0];

    if (res && res.object) {
      selectedObject = res.object;
      selectedObject.scale.set(1.1, 1.1, 1.1);
      document.body.style.cursor = "pointer";

      document.body.onmousedown = (e) => (moved = false);
      document.body.onmouseup = (e) => route(e);

      function route(e) {
        if (!moved) {
          if (config === "production") {
            location.href =
              "https://ashley-koh.github.io/oral-cancer-screening/pages/tongue/" +
              selectedObject.name +
              "/index.html";
          } else {
            location.href =
              "/pages/tongue/" + selectedObject.name + "/index.html";
          }
        }
      }
    }
  }
}

function onTouchStart(event) {
  const { clientX, clientY } = event.touches[0];

  console.log({ clientX, clientY });

  if (selectedObject) {
    selectedObject.scale.set(1, 1, 1);
    document.body.style.cursor = "default";
    selectedObject = null;
  }

  let intersects = getIntersects(clientX, clientY);
  if (intersects.length > 0) {
    let res = intersects.filter(function (res) {
      return res && res.object;
    })[0];

    if (res && res.object) {
      selectedObject = res.object;
      selectedObject.scale.set(1.1, 1.1, 1.1);

      document.body.ontouchend = (e) => {
        if (config === "production") {
          location.href =
            "https://ashley-koh.github.io/oral-cancer-screening/pages/upper-mouth/" +
            selectedObject.name +
            "/index.html";
        } else {
          location.href =
            "/pages/upper-mouth/" + selectedObject.name + "/index.html";
        }
      };
    }
  }
}

let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();

function getIntersects(x, y) {
  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components
  x = (x / window.innerWidth) * 2 - 1;
  y = -(y / window.innerHeight) * 2 + 1;

  mouse.set(x, y);
  raycaster.setFromCamera(mouse, camera);

  return raycaster.intersectObject(sprites, true);
}

// Sprite Generator
function makeTextSprite(message) {
  let fontsize = 40;
  let borderThickness = 6;
  let canvas = document.createElement("canvas");

  canvas.className = "label";

  let context = canvas.getContext("2d");

  let metric = context.measureText(message);
  let textWidth = metric.width;

  console.log(message, textWidth);

  context.font = "Bold " + fontsize + "px Arial";
  // context.fillText(message, borderThickness, fontsize + borderThickness);
  context.fillText(message, borderThickness, fontsize + borderThickness);

  var texture = new THREE.Texture(canvas);
  texture.magFilter = THREE.NearestFilter;
  texture.needsUpdate = true;

  var spriteMaterial = new THREE.SpriteMaterial({
    map: texture,
    color: 0xffffff,
  });
  var sprite = new THREE.Sprite(spriteMaterial);
  return sprite;
}
