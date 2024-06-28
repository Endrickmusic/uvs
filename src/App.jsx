import React from "react"
import ObjectUVs from "./components/ObjectUVs"
import GeneratedUVs from "./components/GeneratedUVs"
import SphericalUVs from "./components/SphericalUVs"
import ScreenSpaceUVs from "./components/ScreenSpaceUVs"
import ClipSpaceUVs from "./components/ClipSpaceUVs"
import WorldSpaceUVs from "./components/WorldSpaceUVs"
import LocalStabilizedScreenSpaceUVs from "./components/LocalScreenSpaceUVs"
import CylindricalUVs from "./components/CylindricalUVs"
import TriplanarUVs from "./components/TriplanarUVs"
import TilingUVs from "./components/TilingUVs"

const App = () => {
  return (
    <div>
      <h1>Three.js UVs</h1>
      <ObjectUVs />
      <GeneratedUVs />
      <SphericalUVs />
      <ScreenSpaceUVs />
      <ClipSpaceUVs />
      <WorldSpaceUVs />
      <LocalStabilizedScreenSpaceUVs />
      <CylindricalUVs />
      <TriplanarUVs />
      <TilingUVs />
    </div>
  )
}

export default App
