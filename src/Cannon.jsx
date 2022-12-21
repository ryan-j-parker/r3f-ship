/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Cannon() {
  const { nodes, materials } = useGLTF('/cannon/cannon_01_2k.gltf');
  const cannonRef = useRef();
  const model = useLoader(GLTFLoader, '/cannon/cannon_01_2k.gltf');

  return (
    <group ref={cannonRef} rotation-y={1.5} position={[18, -3.35, 22]} scale={0.8}>
      {/* <mesh
        name="cannon_01_frame"
        castShadow
        receiveShadow
        geometry={nodes.cannon_01_frame.geometry}
        material={materials.cannon_01}
      />
      <mesh
        name="cannon_01_pusherblock"
        castShadow
        receiveShadow
        geometry={nodes.cannon_01_pusherblock.geometry}
        material={materials.cannon_01}
      />
      <mesh
        name="cannon_01_barrel"
        castShadow
        receiveShadow
        geometry={nodes.cannon_01_barrel.geometry}
        material={materials.cannon_01}
      />
      <mesh
        name="cannon_01_wheel_04"
        castShadow
        receiveShadow
        geometry={nodes.cannon_01_wheel_04.geometry}
        material={materials.cannon_01}
      />
      <mesh
        name="cannon_01_cannon_01_ball_01"
        castShadow
        receiveShadow
        geometry={nodes.cannon_01_cannon_01_ball_01.geometry}
        material={materials.cannon_01}
      />
      <mesh
        name="cannon_01_cannon_01_ball_02"
        castShadow
        receiveShadow
        geometry={nodes.cannon_01_cannon_01_ball_02.geometry}
        material={materials.cannon_01}
      />
      <mesh
        name="cannon_01_cannon_01_ball_03"
        castShadow
        receiveShadow
        geometry={nodes.cannon_01_cannon_01_ball_03.geometry}
        material={materials.cannon_01}
      />
      <mesh
        name="cannon_01_wheel_01"
        castShadow
        receiveShadow
        geometry={nodes.cannon_01_wheel_01.geometry}
        material={materials.cannon_01}
      />
      <mesh
        name="cannon_01_wheel_02"
        castShadow
        receiveShadow
        geometry={nodes.cannon_01_wheel_02.geometry}
        material={materials.cannon_01}
      />
      <mesh
        name="cannon_01_wheel_03"
        castShadow
        receiveShadow
        geometry={nodes.cannon_01_wheel_03.geometry}
        material={materials.cannon_01}
      /> */}
      <primitive object={model.scene} />
    </group>
  );
}
