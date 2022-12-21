/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';
import { Perf } from 'r3f-perf';
import { Suspense } from 'react';
import './Experience.css';

import {
  ArcballControls,
  Environment,
  MapControls,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  ScrollControls,
  TrackballControls,
} from '@react-three/drei';
import Ship from './Ship';

export default function Experience() {
  const props = {
    makeDefault: true,
    position: [23, 12, 28],
    fov: 50,
    near: 1,
    far: 100,
    onUpdate: (self) => self.updateProjectionMatrix(),
  };

  return (
    <Canvas
      shadows
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.outputEncoding = THREE.sRGBEncoding;
        gl.antialias = true;
      }}
    >
      <Environment background files={'./environment.hdr'} />
      <Ship />
      <PerspectiveCamera {...props} />
      <Perf position="top-left" />
      <OrbitControls />
    </Canvas>
  );
}
