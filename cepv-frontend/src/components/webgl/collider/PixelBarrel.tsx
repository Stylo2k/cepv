/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Pixel_Barrel.glb --transform -o PixelBarrel.tsx -t 
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ColliderPart } from '../../../data/ColliderParts'

type GLTFResult = GLTF & {
  nodes: {
    Pixel_Barrel: THREE.Mesh
  }
  materials: {}
  animations: []
}

interface PartProps {
  part: ColliderPart;
}
type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function PixelBarrel(props: PartProps) {
  const { nodes, materials } = useGLTF('/models/Pixel_Barrel-transformed.glb') as GLTFResult
  if (!props.part.enabled) {
    return;
  }
  return (
    <group dispose={null}>
      <mesh geometry={nodes.Pixel_Barrel.geometry} position={[-0.049, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} >
        <meshStandardMaterial color={props.part.color} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/Pixel_Barrel-transformed.glb')