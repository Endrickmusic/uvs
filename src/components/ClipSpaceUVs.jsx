import React from "react"
import { Canvas } from "@react-three/fiber"
import clipSpaceUVShader from "../shaders/clipSpaceUVShader"

const ClipSpaceUVs = () => {
  return (
    <Canvas>
      <mesh>
        <planeGeometry attach="geometry" args={[1, 1, 32, 32]} />
        <shaderMaterial attach="material" args={[clipSpaceUVShader]} />
      </mesh>
    </Canvas>
  )
}

export default ClipSpaceUVs
