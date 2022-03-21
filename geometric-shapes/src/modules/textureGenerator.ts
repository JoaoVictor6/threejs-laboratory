import * as THREE from "three";

export function textureGenerator(source: string) {
  const texture = new THREE.TextureLoader().load(source);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 4, 4 );

  return texture
}