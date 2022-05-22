//https://codesandbox.io/s/7kohn?file=/src/App.js:1154-5158
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React,{ Suspense } from "react";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "mm_project.glb");
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

export default function HomeModel() {
  return (
    <div className="HomeModel">
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
