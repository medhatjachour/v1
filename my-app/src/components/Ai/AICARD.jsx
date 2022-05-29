import React, { Suspense, useRef } from "react";
// import { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, ContactShadows } from "@react-three/drei";

import "../css/card.css";
import { Skeleton, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// import Dress from "./AIOPerations/dress/Dress";
// import Jacket from "./AIOPerations/jacket/Jacket";
import Pdrs from "./AIOPerations/pdrs/Pdrs";
import May26 from "./May26";
//gltf-pipeline -i scene.gltf -o dress.glb --draco.comperssionLevel=10 to convert from gltf to glb with scene.bin
//npx gltfjsx 000.glb //to make a js file
const AICARD = (props) => {
  return (
    <>
      <div className="mga-card">
      <Link to={`/product/${props.id}`}>
        <div className="mga-card-img">
          {/* <Skeleton variant="rectangular" height={240} /> */}
          <Canvas camera={{ fov: 70, position: [0, 0, 65] }}>
            <Suspense fullback={null}>
              <ambientLight />
              <OrbitControls
                enablePan={true}
                enableZoom={false}
                enableRotate={true}
              />
              <May26/>

              <ContactShadows
                rotation-x={Math.PI / 2}
                position={[0, -1, 65]}
                opacity={0.25}
                width={100}
                height={100}
                blur={2}
                far={1}
                scale={50}
              />
            </Suspense>
          </Canvas>
          {/* we are here to say goodbye */}
        </div>
        </Link>
        <div className="mga-card-details">
          <Grid container spacing={2}>
            <Grid item xs={10} md={10}>
              <h5>item name is here</h5>
              <p> $50</p>
            </Grid>
            <Grid item xs={2} md={2}>
              <Stack>
                <Link to="#" id="">
                  <ShoppingCartCheckoutIcon className="mga-card-details-cart" />
                </Link>

                <Link to="#" id="">
                  <FavoriteBorderIcon className="mga-card-details-love" />
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default AICARD;
