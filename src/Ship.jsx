/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import React from 'react';
import { useRef } from 'react';

export default function Ship() {
  const shipRef = useRef();
  const { nodes, materials } = useGLTF('/ship/ship_pinnace_2k.gltf');

  return (
    <group ref={shipRef}>
      <mesh
        name="ship_pinnace_aft"
        castShadow
        receiveShadow
        geometry={nodes.ship_pinnace_aft.geometry}
        material={materials.ship_pinnace_aft}
      />
      <mesh
        name="ship_pinnace_rigging"
        castShadow
        receiveShadow
        geometry={nodes.ship_pinnace_rigging.geometry}
        material={materials.ship_pinnace_rigging}
      />
      <mesh
        name="ship_pinnace_details"
        castShadow
        receiveShadow
        geometry={nodes.ship_pinnace_details.geometry}
        material={materials.ship_pinnace_details}
      />
      <mesh
        name="ship_pinnace_hull"
        castShadow
        receiveShadow
        geometry={nodes.ship_pinnace_hull.geometry}
        material={materials.ship_pinnace_hull}
      />
      <mesh
        name="ship_pinnace_deck"
        castShadow
        receiveShadow
        geometry={nodes.ship_pinnace_deck.geometry}
        material={materials.ship_pinnace_deck}
      />
      <mesh
        name="ship_pinnace_interior"
        castShadow
        receiveShadow
        geometry={nodes.ship_pinnace_interior.geometry}
        material={materials.ship_pinnace_interior}
      />
      <mesh
        name="ship_pinnace_sails"
        castShadow
        receiveShadow
        geometry={nodes.ship_pinnace_sails.geometry}
        material={materials.ship_pinnace_sails}
      />
    </group>
  );
}

useGLTF.preload('/ship/ship_pinnace_2k.gltf');
