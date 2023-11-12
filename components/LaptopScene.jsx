import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef, useState } from 'react'
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
  const [targetRotation, setTargetRotation] = useState([0, 0, 0])
  const [rotationIntensity, setRotationIntensity] = useState(0.4)
  const [position, setPosition] = useState([0, -1.2, 0])
  const [zoomed, setZoomed] = useState(false)
  const laptopRef = useRef()

  const handleClick = () => {
    if (zoomed) {
      setTargetRotation([0, 0, 0])
      setRotationIntensity(0.4)
      setPosition([0, -1.2, 0])
      setZoomed(false)
    } else {
      setTargetRotation([0.2, -0.5, 0.1])
      setRotationIntensity(0.05)
      setPosition([-2, -1.3, 3])
      setZoomed(true)
    }
  }

  const Laptop = () => {
    const computer = useGLTF('./laptop.gltf')
    useFrame((state, delta) => {
      if (laptopRef.current) {
        const rotationStep = delta * 1

        laptopRef.current.rotation.x +=
          (targetRotation[0] - laptopRef.current.rotation.x) * rotationStep
        laptopRef.current.rotation.y +=
          (targetRotation[1] - laptopRef.current.rotation.y) * rotationStep
        laptopRef.current.rotation.z +=
          (targetRotation[2] - laptopRef.current.rotation.z) * rotationStep

        laptopRef.current.position.x +=
          (position[0] - laptopRef.current.position.x) * rotationStep
        laptopRef.current.position.y +=
          (position[1] - laptopRef.current.position.y) * rotationStep
        laptopRef.current.position.z +=
          (position[2] - laptopRef.current.position.z) * rotationStep
      }
    })
    return (
      <>
        <Environment preset="city" />
        <color attach="background" args={['white']} />
        <PresentationControls
          global
          rotation={[0.18, 0.6, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <Float rotationIntensity={rotationIntensity}>
            <rectAreaLight
              width={2.5}
              height={1.65}
              intensity={65}
              color={'#0099ff'}
              rotation={[-0.1, Math.PI, 0]}
              position={[0, 0.55, -1.15]}
            />
            <primitive
              ref={laptopRef}
              object={computer.scene}
              onClick={handleClick}
            >
              <Html
                transform
                wrapperClass="html-screen"
                distanceFactor={1.17}
                position={[0, 1.56, -1.4]}
                rotation-x={-0.256}
              >
                <iframe src="https://daniel-slattery.github.io/Resume-UX" />
              </Html>
            </primitive>
            <Text
              font="./bangers-v20-latin-regular.woff"
              fontSize={1}
              position={[2, 0.75, 0.75]}
              rotation-y={-1.25}
              maxWidth={2}
              textAlign="center"
              color="#16679d"
            >
              Daniel Slatz
            </Text>
          </Float>
        </PresentationControls>
        <ContactShadows position-y={0.4} opacity={0.4} scale={5} blur={2.4} />
      </>
    )
  }

  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={40} />
      <Suspense fallback={null}>
        <Laptop />
      </Suspense>
    </Canvas>
  )
}

export default LaptopScene
