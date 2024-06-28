import React from "react"
import { Canvas } from "@react-three/fiber"
import { TextureLoader } from "three"
import triplanarUVShader from "../shaders/triplanarUVShader"

const TriplanarUVs = () => {
  const loader = new TextureLoader()
  const textures = {
    textureX: loader.load("textures/uv_01.jpg"),
  }

  return (
    <Canvas>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry attach="geometry" args={[10, 10, 10]} />
        <shaderMaterial
          attach="material"
          args={[
            {
              ...triplanarUVShader,
              uniforms: {
                ...triplanarUVShader.uniforms,
                textureX: { value: textures.textureX },
                textureY: { value: textures.textureX },
                textureZ: { value: textures.textureX },
              },
            },
          ]}
        />
      </mesh>
    </Canvas>
  )
}

export default TriplanarUVs
