import { useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/gltfloader";

const Car = () => {
  const carObj = useLoader(
    GLTFLoader,
    import.meta.env.BASE_URL + "models/car/scene.gltf"
  );

  useEffect(() => {
    carObj.scene.scale.set(1.2, 1.2, 1.2);
    carObj.scene.position.set(0, -0.0035, 1.1);
    carObj.scene.rotation.y = -Math.PI * 0.5;
    carObj.scene.rotation.z = Math.PI * 0.5;
    carObj.scene.rotation.x = Math.PI * 0.5;
    carObj.scene.traverse((obj) => {
      if (obj instanceof Mesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
        obj.material.envMapIntensity = 20;
      }
    });
  }, [carObj]);

  return <primitive object={carObj.scene} />;
};

export default Car;
