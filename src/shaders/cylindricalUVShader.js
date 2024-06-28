import * as THREE from "three"

const vertexShader = `
  varying vec2 vUv;

  void main() {
    float theta = atan(position.z, position.x);
    float length = length(vec2(position.x, position.z));
    vUv = vec2(theta / (2.0 * PI), position.y);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;

  void main() {
    gl_FragColor = vec4(vUv, 0.0, 1.0);
  }
`

const cylindricalUVShader = {
  uniforms: {},
  vertexShader,
  fragmentShader,
}

export default cylindricalUVShader
