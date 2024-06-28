import React from "react"
import { Canvas } from "@react-three/fiber"
import generatedUVShader from "../shaders/generatedUVShader"

const GeneratedUVs = () => {
  return (
    <Canvas>
      <mesh>
        <planeGeometry attach="geometry" args={[1, 1, 32, 32]} />
        <shaderMaterial attach="material" args={[generatedUVShader]} />
      </mesh>
    </Canvas>
  )
}

export default GeneratedUVs
