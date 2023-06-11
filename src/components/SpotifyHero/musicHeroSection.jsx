import * as THREE from 'three'
import React, { lazy, Suspense, useRef } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { ContactShadows } from '@react-three/drei'
//import Model from './Model'
import { Text } from '@react-three/drei'
import stylesHero from '../../styles/musicHeroSection.module.css'

const ModelComponent = lazy(() => import("./Model"));

function Rig({ children }) {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (state.mouse.x * Math.PI) / 20, 0.05)
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, (state.mouse.y * Math.PI) / 20, 0.05)
  })
  return <group ref={ref}>{children}</group>
}

function Caption({ children }) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
    position={[0, -8, -5]}
    lineHeight={0.9}
    fontSize={width / 10}
    color="#282828"
    material-toneMapped={false}
    anchorX="center"
    anchorY="middle">
    {children}
    </Text>
  )
}

export default function MusicHeroSection() {
  return (
    <>
      <Canvas camera={{ position: [0, -10, 65], fov: 50 }} dpr={[1, 2]} className={stylesHero.canvas}>
        <pointLight position={[100, 100, 100]} intensity={0.8} />
        <hemisphereLight color="#ffffff" groundColor="#b9b9b9" position={[-7, 25, 13]} intensity={0.85} />
        <Suspense fallback={"loading"}>
          <group position={[0, 10, 0]}>
            <Rig>
              <ModelComponent />
              {/* <Caption className={stylesHero.header}>{`VISUALISE\nMUSIC\nIN\nA WHOLE NEW\nDIMENSION.`}</Caption> */}
            </Rig>
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -35, 0]}
              opacity={0.25}
              width={100}
              height={100}
              blur={2}
              far={50}
            />
          </group>
        </Suspense>
      </Canvas>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)'}}>
        <h6 className={stylesHero.headerAlt} style={{ margin: 0, padding: 0, fontSize: '10em', fontWeight: 500, letterSpacing: '-0.05em', lineHeight: '18vh' }}>visualise</h6>
        <h6 className={stylesHero.headerAlt} style={{ margin: 0, padding: 0, fontSize: '10em', fontWeight: 500, letterSpacing: '-0.05em', lineHeight: '18vh' }}>music in a </h6>
        <h6 className={stylesHero.headerAlt} style={{ margin: 0, padding: 0, fontSize: '10em', fontWeight: 500, letterSpacing: '-0.05em', lineHeight: '18vh' }}>whole new</h6>
        <h6 className={stylesHero.headerAlt} style={{ margin: 0, padding: 0, fontSize: '10em', fontWeight: 500, letterSpacing: '-0.05em', lineHeight: '18vh' }}>dimension</h6>

      </div>
    </>
  )
}
