import React, { Suspense, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Sky, OrbitControls, Text } from "@react-three/drei";
import XrHitModelContainer from "../containers/XRHitModelContainer/XRHitModelContainer";
import { Interactive, XR, ARButton, Controllers } from '@react-three/xr';
import * as THREE from 'three';

import Rive from '@rive-app/react-canvas';

const Simple = () => <Rive src="https://cdn.rive.app/animations/vehicles.riv" />;

function Image(props) {
  const { imgSrc, position } = props;
  const texture = useLoader(THREE.TextureLoader, imgSrc);
  const vectorPosition = new THREE.Vector3().fromArray(position);

  return (
    <mesh position={vectorPosition}>
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial attach="material" map={texture} transparent={true} />
    </mesh>
  );
}

function Box({ color, size, scale, children, ...rest }) {
  return (
    <mesh scale={scale} {...rest}>
      <boxBufferGeometry args={size} />
      <meshPhongMaterial color={color} />
      {children}
    </mesh>
  );
}

function Button(props) {
  const [hover, setHover] = useState(false);
  const [url, setUrl] = useState('/Panel_Assets/Adele_Spotify_Panel.png');
  const [color, setColor] = useState('blue');

  const onSelect = () => {
    setColor((Math.random() * 0xffffff) | 0);
  };

  const onImageSelect = () => {
    setUrl('/Panel_Assets/Adele_Detail_Panel.png');
  };

  return (
    <Box>
      <Interactive onSelect={onImageSelect}>
        <Image imgSrc={url} position={[0, 0, -1]} />
      </Interactive>
      <Image imgSrc="/Panel_Assets/Piano_Ballads_Panel.png" position={[-1.2, 0, -1]} />
      <Image imgSrc="/Panel_Assets/Piano_Ballads_Panel.png" position={[-1.2, 0, -1]} />
      <Image imgSrc="/Panel_Assets/Safar_Mix_Panel.png" position={[1.2, 0, -1]} />
      <Image imgSrc="/Panel_Assets/On_Repeat_Panel.png" position={[-1.5, 1, -1]} />
      <Image imgSrc="/Panel_Assets/Time_Capsule_Panel.png" position={[0, 1, -1]} />
      <Image imgSrc="/Panel_Assets/Repeat_Rewind_Panel.png" position={[1.5, 1, -1]} />
    </Box>
  );
}

// export function App() {
//   return (
//     <>
//       <ARButton />
//       <Canvas>
//         <XR referenceSpace="local">
//           <ambientLight />
//           <pointLight position={[10, 10, 10]} />
//           <Button position={[0, 0.1, -0.2]} />
//           <Controllers />
//         </XR>
//       </Canvas>
//     </>
//   );
// }

const SpotifyPage = () => {
    return (
        <>
            <div>Hello</div>
            <XrHitModelContainer /> 
            <ARButton />
            <Canvas>
                <XR referenceSpace="local">
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Button position={[0, 0.1, -0.2]} />
                <Controllers />
                </XR>
            </Canvas>
        </>
        
    )
}

export default SpotifyPage;


  