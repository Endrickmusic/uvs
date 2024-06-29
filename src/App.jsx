import React from "react"
import { useState } from "react"
import ObjectUVs from "./components/ObjectUVs"
import GeneratedUVs from "./components/GeneratedUVs"
import SphericalUVs from "./components/SphericalUVs"
import ScreenSpaceUVs from "./components/ScreenSpaceUVs"
import ClipSpaceUVs from "./components/ClipSpaceUVs"
import WorldSpaceUVs from "./components/WorldSpaceUVs"
import LocalScreenSpaceUVs from "./components/LocalScreenSpaceUVs"
import CylindricalUVs from "./components/CylindricalUVs"
import TriplanarUVs from "./components/TriplanarUVs"
import TilingUVs from "./components/TilingUVs"

import "./index.css"

const App = () => {
  const [currentUV, setCurrentUV] = useState("ObjectUVs")

  const renderCurrentUV = () => {
    switch (currentUV) {
      case "ObjectUVs":
        return <ObjectUVs />
      case "GeneratedUVs":
        return <GeneratedUVs />
      case "SphericalUVs":
        return <SphericalUVs />
      case "ScreenSpaceUVs":
        return <ScreenSpaceUVs />
      case "ClipSpaceUVs":
        return <ClipSpaceUVs />
      case "WorldSpaceUVs":
        return <WorldSpaceUVs />
      case "LocalStabilizedScreenSpaceUVs":
        return <LocalScreenSpaceUVs />
      case "CylindricalUVs":
        return <CylindricalUVs />
      case "TriplanarUVs":
        return <TriplanarUVs />
      case "TilingUVs":
        return <TilingUVs />
      default:
        return <ObjectUVs />
    }
  }

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentUV("ObjectUVs")}>Object UVs</button>
        <button onClick={() => setCurrentUV("GeneratedUVs")}>
          Generated UVs
        </button>
        <button onClick={() => setCurrentUV("SphericalUVs")}>
          Spherical UVs
        </button>
        <button onClick={() => setCurrentUV("ScreenSpaceUVs")}>
          Screen Space UVs
        </button>
        <button onClick={() => setCurrentUV("ClipSpaceUVs")}>
          Clip Space UVs
        </button>
        <button onClick={() => setCurrentUV("WorldSpaceUVs")}>
          World Space UVs
        </button>
        <button onClick={() => setCurrentUV("LocalScreenSpaceUVs")}>
          Local Stabilized Screen Space UVs
        </button>
        <button onClick={() => setCurrentUV("CylindricalUVs")}>
          Cylindrical UVs
        </button>
        <button onClick={() => setCurrentUV("TriplanarUVs")}>
          Triplanar UVs
        </button>
        <button onClick={() => setCurrentUV("TilingUVs")}>Tiling UVs</button>
      </nav>
      <div>{renderCurrentUV()}</div>
    </div>
  )
}

export default App
