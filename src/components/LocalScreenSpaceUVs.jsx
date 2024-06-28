import React from "react"
import { Canvas } from "@react-three/fiber"
import localStabilizedScreenSpaceUVShader from "../shaders/localScreenSpaceUVShader"

const LocalStabilizedScreenSpaceUVs = () => {
  return (
    <Canvas>
      <mesh>
        <planeGeometry attach="geometry" args={[1, 1, 32, 32]} />
        <shaderMaterial
          attach="material"
          args={[localStabilizedScreenSpaceUVShader]}
        />
      </mesh>
    </Canvas>
  )
}

export default LocalStabilizedScreenSpaceUVs
