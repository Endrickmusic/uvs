import React from "react"
import { Canvas } from "@react-three/fiber"
import worldSpaceUVShader from "../shaders/worldSpaceUVShader"

const WorldSpaceUVs = () => {
  return (
    <Canvas>
      <mesh>
        <planeGeometry attach="geometry" args={[10, 10, 32, 32]} />
        <shaderMaterial attach="material" args={[worldSpaceUVShader]} />
      </mesh>
    </Canvas>
  )
}

export default WorldSpaceUVs
