import React from "react"
import { Canvas } from "@react-three/fiber"
import screenSpaceUVShader from "../shaders/screenSpaceUVShader"

const ScreenSpaceUVs = () => {
  return (
    <Canvas>
      <mesh>
        <planeGeometry attach="geometry" args={[1, 1, 32, 32]} />
        <shaderMaterial attach="material" args={[screenSpaceUVShader]} />
      </mesh>
    </Canvas>
  )
}

export default ScreenSpaceUVs
