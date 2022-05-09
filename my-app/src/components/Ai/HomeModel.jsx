import React from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";
THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = () => {
  const materials = useLoader(MTLLoader, "1.mtl");
  const obj = useLoader(PLYLoader, "1.ply", (loader) => {
    //materials.preload();
    //loader.setMaterials(materials);
  });

  console.log(obj);
  return <primitive object={obj} scale={1.4} />;
};

export default function HomeModel() {
  return (
    <div className="Thefknai">
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
          <Environment preset="sunset"  />
        </Suspense>
      </Canvas>
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

export default HomeModel;
*/
