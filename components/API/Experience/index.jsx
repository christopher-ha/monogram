'use client';

import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing';
import { KernelSize } from 'postprocessing';
import {
  OrbitControls,
  Float,
  Environment,
  useGLTF,
  RandomizedLight,
} from '@react-three/drei';

export default function Experience() {
  const { nodes, materials } = useGLTF('/3d/api-logos.glb');
  return (
    <Canvas performance={{ min: 0.5 }}>
      {/* Controls */}
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        enableDamping
        enableZoom={false}
      />

      {/* Post Processing */}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.3} // Lower values mean more of the scene can potentially bloom.
          luminanceSmoothing={0.3} // Lower values mean a sharper bloom effect.
          kernelSize={KernelSize.SMALL} // Blur kernel size, setting this to max value but ideally it should be more to create the desired effect.
        />
        <Noise opacity={0.25} />
      </EffectComposer>

      {/* Lighting */}
      <ambientLight intensity={1} />
      <RandomizedLight
        radius={15}
        ambient={0.5}
        intensity={1}
        position={[2.5, 2.5, -2.5]}
        bias={0.001}
      />
      <pointLight intensity={10} />
      <Environment files="/3d/dawn.hdr" />

      {/* Objects */}
      {/* Trigonometry: Math.PI / 4 = 90 degrees, Math.PI = 180 degrees, then 135 degrees is 3(PI)/4 */}
      <Float
        speed={2} // Animation speed, defaults to 1
        rotationIntensity={2} // XYZ rotation intensity, defaults to 1
        floatIntensity={0} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <group position={[0, 0.75, 0]} scale={2.5}>
          {/* Google Analytics Logo */}
          <Float
            floatIntensity={1}
            floatingRange={[-0.2, 0.1]}
            rotationIntensity={0.25}
          >
            <group
              position={[-0.297, -0.391, -0.485]}
              rotation={[1.662, -0.04, 2.664]}
              scale={[0.126, 0.181, 0.126]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001.geometry}
                material={materials['Material.002']}
                roughness={0}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001_1.geometry}
                material={materials['Material.003']}
                roughness={0}
              >
                <meshPhysicalMaterial
                  color="#D57B2D"
                  roughness={0.3}
                  ior="1.5"
                  transmission={1}
                  thickness={3.5}
                  clearcoat={1}
                  chromaticAbberation={0.09}
                  temporalDistotion={0.5}
                />
              </mesh>
            </group>
          </Float>

          {/* Supabase Logo */}
          <Float floatIntensity={1} floatingRange={[-0.15, 0.05]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Curve.geometry}
              material={materials['Material.001']}
              position={[0.527, -0.078, -0.104]}
              rotation={[1.992, 0.095, -2.097]}
            >
              <meshPhysicalMaterial
                color="#6CCC93"
                roughness={0.3}
                ior="2"
                transmission={1}
                thickness={3.5}
                clearcoat={1}
                chromaticAbberation={0.06}
                temporalDistotion={0.5}
              />
            </mesh>
          </Float>

          {/* Prisma Logo */}
          <Float
            floatIntensity={1}
            floatingRange={[-0.15, -0.05]}
            rotationIntensity={0.25}
          >
            <group
              position={[-0.182, -0.029, 0.468]}
              rotation={[1.212, 0.077, 0.361]}
              scale={0.87}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve003_1.geometry}
                material={materials['Material.004']}
                roughness={0}
              >
                <meshPhysicalMaterial
                  color="#CB82E3"
                  roughness={0.3}
                  ior="1.5"
                  transmission={1}
                  thickness={3.5}
                  clearcoat={1}
                  chromaticAbberation={0.06}
                  temporalDistotion={0.5}
                />
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve003_2.geometry}
                material={materials['Material.005']}
                roughness={0}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve003_3.geometry}
                material={materials['Material.006']}
                roughness={0}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve003_4.geometry}
                material={materials['Material.007']}
                roughness={0}
              />
            </group>
          </Float>
        </group>
      </Float>
    </Canvas>
  );
}

useGLTF.preload('/3d/api-logos.glb');
