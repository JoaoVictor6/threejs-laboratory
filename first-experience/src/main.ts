//            First threeJS example - CUBE
// 
// 
// ┌─────────────────────────────────────┐
// │                                     │
// │    Create scene and perspective     │
// │                                     │
// └────────────────┬────────────────────┘
//                  │
//                  │
//  ┌───────────────▼────────────────────┐         ┌─────────────────────────────────────┐
//  │  Create WEBGL instance for render  ├─────────►Create object and positioning camera │
//  └────────────────────────────────────┘         └─────────────────┬───────────────────┘
//                                                                   │
//                                                                   │
//                                                      ┌────────────▼─────────────────┐
//                                                      │renderer.render(scene, camera)│
//                                                      └──────────────────────────────┘

import * as THREE from 'three'


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  20,
  window.innerWidth/window.innerHeight,
  0.1,
  200
);

const renderer = new THREE.WebGLRenderer() 
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(1, 1, 1); 
const material = new THREE.MeshBasicMaterial({color: 0xff00ff});
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5

function animate(){
  requestAnimationFrame(animate)
  cube.rotation.y += 0.1

  renderer.render(scene, camera)
}
animate()