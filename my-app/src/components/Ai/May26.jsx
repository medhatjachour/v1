import React, { Suspense, useRef } from "react";
// import { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, ContactShadows } from "@react-three/drei";

function May26({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/mm_project.glb");
  //for animation
  useFrame(({clock} ) => {
      group.current.rotation.y = clock.getElapsedTime()
  })
  return (
    <group ref={group} {...props} dispose={null} scale={10}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
    </group>
  );
}

// const May26 = () => {
//   return (
//     <div>
//       <Canvas camera={{ fov: 70, position: [0, 0, 65] }}>
//         <Suspense fullback={null}>
//           <ambientLight />
//           <OrbitControls
//             enablePan={true}
//             enableZoom={false}
//             enableRotate={true}
//           />
//           <Model />
          
//           <ContactShadows
//             rotation-x={Math.PI / 2}
//             position={[0, -0.8, 65]}
//             opacity={0.25}
//             width={10}
//             height={10}
//             blur={2}
//             far={1}
//           />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// };

export default May26;
