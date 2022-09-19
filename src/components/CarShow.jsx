import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import React from "react";
import Car from "./Car";
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
    </>
  );
};

export default CarShow;
