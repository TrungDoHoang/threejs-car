import { useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { RepeatWrapping, TextureLoader } from "three";

const FloatingGrid = () => {
  const diffuse = useLoader(
    TextureLoader,
    import.meta.env.BASE_URL + "textures/grid-texture.png"
  );

  useEffect(() => {
    diffuse.wrapS = RepeatWrapping;
    diffuse.wrapT = RepeatWrapping;
    diffuse.anisotropy = 4;
    diffuse.offset.set(0, 0);
    diffuse.repeat.set(30, 30);
  }, [diffuse]);

  return (
    <mesh rotation-x={-Math.PI * 0.5} position={[0, 0.425, 0]}>
      <planeGeometry args={[35, 35]} />
      <meshBasicMaterial
        color={[1, 1, 1]}
        opacity={0.15}
        map={diffuse}
        alphaMap={diffuse}
        transparent
      />
    </mesh>
  );
};

export default FloatingGrid;
