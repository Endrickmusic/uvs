const vertexShader = `
  varying vec3 vPosition;

  void main() {
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  varying vec3 vPosition;

  void main() {
    vec3 pos = normalize(vPosition);
    vec2 uv = vec2(atan(pos.z, pos.x) / (2.0 * PI) + 0.5, asin(pos.y) / PI + 0.5);
    gl_FragColor = vec4(uv, 0.0, 1.0);
  }
`

const sphericalUVShader = {
  uniforms: {},
  vertexShader,
  fragmentShader,
}

export default sphericalUVShader
