import React from "react"
import { Canvas } from "@react-three/fiber"
import tilingUVShader from "../shaders/tilingUVShader"

const TilingUVs = () => {
  return (
    <Canvas>
      <mesh>
        <planeGeometry attach="geometry" args={[1, 1, 32, 32]} />
        <shaderMaterial attach="material" args={[tilingUVShader]} />
      </mesh>
    </Canvas>
  )
}

export default TilingUVs
