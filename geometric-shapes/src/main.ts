import * as THREE from 'three'
import { initScreen } from './modules/createScreen';
import { moon } from './models/moon';
import { orbitExecute } from './modules/orbitControl';

const {camera, scene, renderer} = initScreen()
document.body.appendChild(renderer.domElement)

const moonModel = moon()
scene.add(moonModel)

const axes = new THREE.AxesHelper(1000)
scene.add(axes)

orbitExecute(camera, renderer)

function animate(){
  requestAnimationFrame(animate)
  moonModel.rotation.y += 0.001
  renderer.render(scene, camera)
}
animate()