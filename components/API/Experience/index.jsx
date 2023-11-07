'use client';

import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { KernelSize } from 'postprocessing';
import { OrbitControls, GradientTexture, Float } from '@react-three/drei';

export default function Experience() {
  return (
    <Canvas>
      <OrbitControls autoRotate enableZoom={false} />
      <EffectComposer>
        <Bloom
          luminanceThreshold={0} // Lower values mean more of the scene can potentially bloom.
          luminanceSmoothing={0.01} // Lower values mean a sharper bloom effect.
          kernelSize={KernelSize.HUGE} // Blur kernel size, setting this to max value but ideally it should be more to create the desired effect.
        />
      </EffectComposer>
      <ambientLight />
      {/* Trigonometry: Math.PI / 4 = 90 degrees, Math.PI = 180 degrees, then 135 degrees is 3(PI)/4 */}
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={2} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <mesh
          scale={2.5}
          position={[0, 0, 0]}
          rotation={[0, 0, (Math.PI * 3) / 4]}
        >
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 0.33, 0.66, 1]}
              colors={['#01A6DC', '#8801E4', '#F5CBE1', '#FDF8FA']}
              size={16}
            />
          </meshBasicMaterial>
        </mesh>
      </Float>
    </Canvas>
  );
}
