import React from "react"
import { Canvas } from "react-three-fiber"
import { TextureLoader } from "three"
import triplanarUVShader from "../shaders/triplanarUVShader"

const TriplanarUVs = () => {
  const loader = new TextureLoader()
  const textures = {
    textureX: loader.load("path/to/textureX.jpg"),
    textureY: loader.load("path/to/textureY.jpg"),
    textureZ: loader.load("path/to/textureZ.jpg"),
  }

  return (
    <Canvas>
      <mesh>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <shaderMaterial
          attach="material"
          args={[
            {
              ...triplanarUVShader,
              uniforms: {
                ...triplanarUVShader.uniforms,
                textureX: { value: textures.textureX },
                textureY: { value: textures.textureY },
                textureZ: { value: textures.textureZ },
              },
            },
          ]}
        />
      </mesh>
    </Canvas>
  )
}

export default TriplanarUVs
