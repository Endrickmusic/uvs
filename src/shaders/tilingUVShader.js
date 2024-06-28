import * as THREE from "three"

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;

  uniform vec2 repeat;

  void main() {
    vec2 tiledUv = fract(vUv * repeat);
    gl_FragColor = vec4(tiledUv, 0.0, 1.0);
  }
`

const tilingUVShader = {
  uniforms: {
    repeat: { type: "v2", value: new THREE.Vector2(4, 4) },
  },
  vertexShader,
  fragmentShader,
}

export default tilingUVShader
