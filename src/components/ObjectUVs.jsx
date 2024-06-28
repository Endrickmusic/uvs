import React from "react"
import { Canvas } from "@react-three/fiber"
import objectUVShader from "../shaders/objectUVShader"

const ObjectUVs = () => {
  return (
    <Canvas>
      <mesh>
        <planeGeometry attach="geometry" args={[1, 1, 32, 32]} />
        <shaderMaterial attach="material" args={[objectUVShader]} />
      </mesh>
    </Canvas>
  )
}

export default ObjectUVs
