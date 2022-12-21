/* eslint-disable react/no-unknown-property */
import { useTexture } from '@react-three/drei';
import React from 'react';
import { DoubleSide } from 'three';

export default function OceanSeas() {
  const props = useTexture({
    map: '/water2/Water_002_COLOR.jpg',
    normalMap: '/water2/Water_002_NORM.jpg',
    aoMap: '/water2/Water_002_OCC.jpg',
    speculativeMap: '/water1/Water_001_SPEC.jpg',
    roughnessMap: '/water2/Water_002_ROUGH.jpg',
    displacementMap: '/water2/Water_002_DISP.png',
  });

  return (
    <mesh rotation-x={Math.PI * -0.5} position={[0, -15, 0]}>
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial
        attach="material"
        color="#1e90ff"
        {...props}
        side={DoubleSide}
        displacementScale={32}
      />
    </mesh>
  );
}
