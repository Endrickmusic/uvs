import * as THREE from "three"

const vertexShader = `
  varying vec3 vPosition;

  void main() {
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  varying vec3 vPosition;

  uniform sampler2D textureX;
  uniform sampler2D textureY;
  uniform sampler2D textureZ;

  void main() {
    vec3 blending = abs(normalize(vPosition));
    blending = normalize(max(blending, 0.00001));
    blending /= (blending.x + blending.y + blending.z);
    
    vec4 colorX = texture2D(textureX, vPosition.yz);
    vec4 colorY = texture2D(textureY, vPosition.zx);
    vec4 colorZ = texture2D(textureZ, vPosition.xy);
    
    vec4 color = colorX * blending.x + colorY * blending.y + colorZ * blending.z;
    gl_FragColor = color;
  }
`

const triplanarUVShader = {
  uniforms: {
    textureX: { type: "t", value: new THREE.Texture() },
    textureY: { type: "t", value: new THREE.Texture() },
    textureZ: { type: "t", value: new THREE.Texture() },
  },
  vertexShader,
  fragmentShader,
}

export default triplanarUVShader
