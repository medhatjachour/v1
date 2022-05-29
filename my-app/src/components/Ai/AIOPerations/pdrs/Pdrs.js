/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: manuel_A (https://sketchfab.com/manuel_A)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/badly-simulated-dress-9e73d3d771e44e6a85c62b8e2f5bae52
title: Badly simulated Dress
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Pdrs({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/pdrs.glb')
  return (
    <group ref={group} {...props} dispose={null} scale={50}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={100}>
            <mesh geometry={nodes.dress001_FABRIC_3_FRONT_4673001_0.geometry} material={materials['FABRIC_3_FRONT_4673.001']} />
            <mesh geometry={nodes.dress001_FABRIC_3_FRONT_4673001_0_1.geometry} material={materials['FABRIC_3_FRONT_4673.001']} />
            <mesh geometry={nodes.dress001_FABRIC_3_FRONT_4673001_0_2.geometry} material={materials['FABRIC_3_FRONT_4673.001']} />
            <mesh geometry={nodes.dress001_FABRIC_3_FRONT_4673001_0_3.geometry} material={materials['FABRIC_3_FRONT_4673.001']} />
            <mesh geometry={nodes.dress001_FABRIC_3_FRONT_4673001_0_4.geometry} material={materials['FABRIC_3_FRONT_4673.001']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/pdrs.glb')
