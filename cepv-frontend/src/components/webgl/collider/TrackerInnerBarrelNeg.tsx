/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Tracker_Inner_Barrel_neg.glb --transform -o TrackerInnerBarrelneg.tsx -t 
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ColliderPart } from '../../../data/ColliderParts'

type GLTFResult = GLTF & {
  nodes: {
    Tracker_Inner_Barrel_neg: THREE.Mesh
  }
  materials: {}
  animations: []
}

interface PartProps {
  part: ColliderPart;
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function TrackerInnerBarrelNeg(props: PartProps) {
  const { nodes, materials } = useGLTF('/models/Tracker_Inner_Barrel_neg-transformed.glb') as GLTFResult
  if (!props.part.enabled) {
    return;
  }
  return (
    <group dispose={null}>
      <mesh geometry={nodes.Tracker_Inner_Barrel_neg.geometry} position={[-0.228, 0, 0.914]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} >
        <meshStandardMaterial color={props.part.color} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/Tracker_Inner_Barrel_neg-transformed.glb')