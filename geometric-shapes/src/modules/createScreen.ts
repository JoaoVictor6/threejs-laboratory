import * as THREE from 'three'
import bgTexture from '../textures/spaceTexture.jpg'

const cameraConfig = () => (
  new THREE.PerspectiveCamera(
    100,
    window.innerWidth/window.innerHeight,
    1,
    200
  )
)

export function initScreen(){
  const scene = new THREE.Scene();
  scene.background = new THREE.TextureLoader().load(bgTexture)
  
  const camera = cameraConfig()
  
  camera.position.set(8,9,5)
  camera.lookAt(scene.position)
  
  const renderer = new THREE.WebGLRenderer() 
  renderer.setSize(window.innerWidth, window.innerHeight)

  return {camera, scene, renderer}
}