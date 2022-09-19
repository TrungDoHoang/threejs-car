import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Color } from "three";

const Ring = () => {
  const itemsRef = useRef([]);

  useFrame((state) => {
    for (let i = 0; i < itemsRef.current.length; i++) {
      let mesh = itemsRef.current[i];
      // [-7,7]
      let z = (i - 7) * 3.5;
      mesh.position.set(0, 0, -z);

      let dist = Math.abs(z);
      mesh.scale.set(1 - dist * 0.04, 1 - dist * 0.04, 1 - dist * 0.04);

      let coloScale = 1;
      if (dist > 2) {
        coloScale = 1 - (Math.min(dist, 12) - 2) / 10;
      }
      coloScale *= 0.5;

      if (i % 2 === 1) {
        mesh.material.emissive = new Color(6, 0.15, 0.7).multiplyScalar(0.5);
      } else {
        mesh.material.emissive = new Color(0.1, 0.7, 3).multiplyScalar(0.5);
      }
    }
  });
  return (
    <>
      {new Array(14).fill(0).map((v, i) => (
        <mesh
          castShadow
          receiveShadow
          position={[0, 20, 100]}
          key={i}
          ref={(el) => (itemsRef.current[i] = el)}
        >
          <torusGeometry args={[3.35, 0.05, 16, 100]} />
          <meshStandardMaterial emissive={[4, 0.1, 0.4]} color={[0, 0, 0]} />
        </mesh>
      ))}
    </>
  );
};

export default Ring;
