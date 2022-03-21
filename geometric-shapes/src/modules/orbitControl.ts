import { OrbitControls } from "@three-ts/orbit-controls";

export function orbitExecute(
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer)
{
  const controls = new OrbitControls( camera, renderer.domElement );
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.target.set( 0, 1, 0 );
  controls.update();
}