'use client';

import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { KernelSize } from 'postprocessing';
import {
  OrbitControls,
  GradientTexture,
  Float,
  Environment,
  useGLTF,
} from '@react-three/drei';

export default function Experience() {
  const { nodes, materials } = useGLTF('/api-logos.glb');
  return (
    <Canvas>
      <OrbitControls
        autoRotate
        autoRotateSpeed={1}
        enableDamping
        enableZoom={false}
      />
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.1} // Lower values mean more of the scene can potentially bloom.
          luminanceSmoothing={0.5} // Lower values mean a sharper bloom effect.
          kernelSize={KernelSize.HUGE} // Blur kernel size, setting this to max value but ideally it should be more to create the desired effect.
        />
      </EffectComposer>
      {/* Trigonometry: Math.PI / 4 = 90 degrees, Math.PI = 180 degrees, then 135 degrees is 3(PI)/4 */}
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={2} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <ambientLight intensity={1.25} />
        <Environment preset="forest" />
        <group position={[0, -1.75, 0]} scale={2.5} dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials['Material.001']}
            position={[-0.297, 0.297, -0.485]}
            rotation={[1.662, -0.04, 2.664]}
            scale={[0.126, 0.181, 0.126]}
          >
            <meshStandardMaterial color="#ffb240" />
            {/* <meshNormalMaterial />*/}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Curve.geometry}
            material={materials['Material.001']}
            position={[0.527, 0.611, -0.104]}
            rotation={[1.992, 0.095, -2.097]}
          >
            <meshStandardMaterial color="#5cdb58" />
            {/* <meshNormalMaterial /> */}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Curve003.geometry}
            material={materials['Material.001']}
            position={[-0.182, 0.787, 0.468]}
            rotation={[1.212, 0.077, 0.361]}
          >
            <meshNormalMaterial />
          </mesh>
        </group>
      </Float>
    </Canvas>
  );
}

useGLTF.preload('/api-logos.glb');
