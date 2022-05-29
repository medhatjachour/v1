import React from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
// import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";
// import './demo.css'
THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = () => {
//   const materials = useLoader(MTLLoader, "1.mtl");

const material = new THREE.MeshPhysicalMaterial({
    color: 0xb2ffc8,
    //envMap: envTexture,
    metalness: 0,
    roughness: 0,
    transparent: true,
    transmission: 1.0,
    side: THREE.DoubleSide,
    clearcoat: 1.0,
    clearcoatRoughness: 0.25
})
  const obj = useLoader(PLYLoader, "1.ply", (loader) => {
    material.preload();
    loader.setMaterials(material);
  });

  console.log(obj);
  return <primitive object={obj} scale={0.4} />;
};

export default function MyPLY() {
  return (
    <div className="Thefknai">
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
          <Environment preset="sunset"  />
        </Suspense>
      </Canvas>
      .obj loader
    </div>
  );
}
/*import React from 'react'; 
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'

const Thefknai = () => {
  return (
    <div>
      sadadf
    </div>
  );
}

export default Thefknai;

*/