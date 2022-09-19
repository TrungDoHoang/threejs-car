import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./App.css";
import CarShow from "./components/CarShow";

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;
