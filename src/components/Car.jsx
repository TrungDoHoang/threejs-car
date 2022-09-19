import { useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/gltfloader";

const Car = () => {
  const carObj = useLoader(
    GLTFLoader,
    import.meta.env.BASE_URL + "models/car/scene.gltf"
  );
  const run = (e) => {
    if (e.key == "ArrowUp") {
      carObj.scene.position.z += 0.2;
    }
    if (e.key == "ArrowDown") {
      carObj.scene.position.z -= 0.2;
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", run);

    return () => {
      window.removeEventListener("keydown", run);
    };
  }, []);

  useEffect(() => {
    carObj.scene.scale.set(1.3, 1.3, 1.3);
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
