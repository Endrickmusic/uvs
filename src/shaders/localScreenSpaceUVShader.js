const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;

  void main() {
    // Example of local stabilized screen space UVs
    vec2 localUv = vUv * 2.0 - 1.0; // Centered from -1 to 1
    localUv.y = -localUv.y; // Flip y for screen space
    gl_FragColor = vec4(localUv, 0.0, 1.0);
  }
`

const localStabilizedScreenSpaceUVShader = {
  uniforms: {},
  vertexShader,
  fragmentShader,
}

export default localStabilizedScreenSpaceUVShader
