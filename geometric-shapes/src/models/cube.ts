import * as THREE from "three";
import { textureGenerator } from "../modules/textureGenerator";
import textureSRC from '../textures/texture.jpg'

export function cube(){
  const texture = textureGenerator(textureSRC)
  const geometry = new THREE.BoxGeometry(1, 1, 1); 
  const material = new THREE.MeshBasicMaterial({map: texture});

  const cube = new THREE.Mesh(geometry, material)

  return cube
}