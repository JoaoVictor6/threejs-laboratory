
import * as THREE from 'three'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  20,
  window.innerWidth/window.innerHeight,
  0.1,
  200
);

const renderer = new THREE.WebGLRenderer() // webgl é o motor
renderer.setSize(window.innerWidth, window.innerHeight)// onde ser arenderizado
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(1, 1, 1); // largura, altura e profundidade
const material = new THREE.MeshBasicMaterial({color: 0xff00ff});
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// posicionar camera
camera.position.z = 5

function animate(){
  requestAnimationFrame(animate)

  // cube.rotation.x += 0.1
  cube.rotation.y += 0.1
  cube.position.x += 0.1
  console.log(cube.position.x)
  // cube.rotation.z += 0.1

  renderer.render(scene, camera)
}
animate()