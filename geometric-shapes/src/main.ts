import * as THREE from 'three'
import { OrbitControls } from '@three-ts/orbit-controls';
import textureSRC from './textures/texture.jpg'
import moonTextureSRC from './textures/moonTexture.jpg'

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xE9E9E9)

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth/window.innerHeight,
  1,
  200
);
camera.position.set(8,9,5)
camera.lookAt(scene.position)

const renderer = new THREE.WebGLRenderer() 
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const texture = new THREE.TextureLoader().load(textureSRC);
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 4, 4 );
const geometry = new THREE.BoxGeometry(1, 1, 1); 
const material = new THREE.MeshBasicMaterial({map: texture});

const cube = new THREE.Mesh(geometry, material)

scene.add(cube)

const moonTexture = new THREE.TextureLoader().load(moonTextureSRC);
moonTexture.wrapS = THREE.RepeatWrapping;
moonTexture.wrapT = THREE.RepeatWrapping;
moonTexture.repeat.set( 4, 4 );
const triangleGeometry = new THREE.SphereGeometry(2,100 )
const materialTriangle = new THREE.MeshBasicMaterial({
  map: moonTexture
})
const triangle = new THREE.Mesh(triangleGeometry, materialTriangle)
triangle.position.x = 0
triangle.position.z = -5
scene.add(triangle)

const axes = new THREE.AxesHelper(10)
scene.add(axes)

const controls = new OrbitControls( camera, renderer.domElement );
controls.enablePan = false;
controls.enableZoom = false;
controls.target.set( 0, 1, 0 );
controls.update();

function animate(){
  requestAnimationFrame(animate)
  cube.rotation.y += 0.1
  
  renderer.render(scene, camera)
}
animate()