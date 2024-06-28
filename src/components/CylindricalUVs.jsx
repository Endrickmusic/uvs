import React from "react"
import { Canvas } from "react-three-fiber"
import cylindricalUVShader from "../shaders/cylindricalUVShader"

const CylindricalUVs = () => {
  return (
    <Canvas>
      <mesh>
        <cylinderBufferGeometry attach="geometry" args={[1, 1, 2, 32]} />
        <shaderMaterial attach="material" args={[cylindricalUVShader]} />
      </mesh>
    </Canvas>
  )
}

export default CylindricalUVs
