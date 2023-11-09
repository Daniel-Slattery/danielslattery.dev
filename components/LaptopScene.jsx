import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import {
  Float,
  Environment,
  useGLTF,
  PresentationControls,
  ContactShadows,
  Html,
  Text,
  PerspectiveCamera
} from '@react-three/drei'

const LaptopScene = () => {
  const computer = useGLTF('./laptop.gltf')
  return (
    <>
      <Environment preset="city" />
      <color attach="background" args={['#ffffff']} />
      <PresentationControls
        global
        rotation={[0.18, 0.6, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={'#ff6900'}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive object={computer.scene} position-y={-1.2}>
            <Html
              transform
              wrapperClass="html-screen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://daniel-slattery.github.io/Resume-UX"></iframe>
            </Html>
          </primitive>
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={1}
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
            textAlign="center"
          >
            Daniel Slattery
          </Text>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={0.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  )
}

const LaptopSceneCanvas = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
      <Suspense fallback={null}>
        <LaptopScene />
      </Suspense>
    </Canvas>
  )
}

export default LaptopSceneCanvas
