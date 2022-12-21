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
import DutchShip from './DutchShip';
import Grass from './Grass';
import Pier from './Pier';
import Barrel from './Barrel';
import Cannon from './Cannon';
import Tree from './Tree';
import Water from './OceanSeas';
import OceanSeas from './OceanSeas';

export default function Experience() {
  const props = {
    makeDefault: true,
    position: [23, 12, 28],
    fov: 50,
    near: 1,
    far: 600,
    // onUpdate: (self) => self.updateProjectionMatrix(),
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
      <PerspectiveCamera {...props} />
      <Perf position="top-left" />
      <Environment background files={'./environment.hdr'} />
      <Ship />
      <OceanSeas />
      {/* <DutchShip /> */}
      {/* <Barrel /> */}
      {/* <Cannon /> */}
      {/* <Tree />
      <Grass />
      <Pier /> */}
      <OrbitControls />
    </Canvas>
  );
}
