import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import React from "react";
import Boxes from "./Boxes";
import Car from "./Car";
import FloatingGrid from "./FloatingGrid";
import Ground from "./Ground";
import Ring from "./Ring";

const CarShow = () => {
  return (
    <>
      <OrbitControls target={[0, 0, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={75} position={[4.5, 3.4, 6]} />

      {/* let color = new Color(0,0,0) */}
      <color args={[0, 0, 0]} attach="background" />

      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Car />
          </>
        )}
      </CubeCamera>

      <Ring />
      <Boxes />
      <FloatingGrid />

      {/* 
        let spotlight = new SpotLight()
        spotlight.intensity = 1.5
        spotlight.position.set(...) 
    */}
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={3.5}
        angle={0.65}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={5}
        angle={0.65}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Ground />

      <EffectComposer>
        <DepthOfField
          focusDistance={0.0055}
          focalLength={0.01}
          bokehScale={3}
          height={480}
        />
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={1.2}
          width={300}
          height={300}
          kernelSize={5}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.25}
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.0000005, 0.000012]}
        />
      </EffectComposer>
    </>
  );
};

export default CarShow;
