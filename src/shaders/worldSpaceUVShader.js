const vertexShader = `
  varying vec3 vPosition;

  void main() {
    vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  varying vec3 vPosition;

  void main() {
    vec2 uv = vec2(vPosition.x, vPosition.y);
    gl_FragColor = vec4(uv, 0.0, 1.0);
  }
`

const worldSpaceUVShader = {
  uniforms: {},
  vertexShader,
  fragmentShader,
}

export default worldSpaceUVShader
