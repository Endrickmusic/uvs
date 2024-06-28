import React from "react"
import { Canvas } from "@react-three/fiber"
import sphericalUVShader from "../shaders/sphericalUVShader"

const SphericalUVs = () => {
  return (
    <Canvas>
      <mesh>
        <sphereGeometry attach="geometry" args={[1, 32, 32]} />
        <shaderMaterial attach="material" args={[sphericalUVShader]} />
      </mesh>
    </Canvas>
  )
}

export default SphericalUVs
