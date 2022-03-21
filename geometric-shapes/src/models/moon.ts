import moonTextureSRC from '../textures/moonTexture.jpg'
import { textureGenerator } from "../modules/textureGenerator";
import * as THREE from 'three';

export function moon(){
  const moonTexture = textureGenerator(moonTextureSRC);
  const sphereGeometry = new THREE.SphereGeometry(2,100 )
  const materialSphere = new THREE.MeshBasicMaterial({
    map: moonTexture
  })
  const sphere = new THREE.Mesh(sphereGeometry, materialSphere)
  sphere.position.x = 0
  sphere.position.z = 0
  return sphere
}