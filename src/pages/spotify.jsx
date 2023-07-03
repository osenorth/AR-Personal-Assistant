import React, { Suspense, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Sky, OrbitControls, Text } from "@react-three/drei";
import XrHitModelContainer from "../containers/XRHitModelContainer/XRHitModelContainer";
import { Interactive, XR, ARButton, Controllers } from '@react-three/xr';
import * as THREE from 'three';

import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../atoms/playerAtom";


import MusicIndex from './use-cases/music/musicIndex';

import { ChickenDance } from '../components/SpotifyAnimations/ChickenDance';
import { HipHopDance1 } from '../components/SpotifyAnimations/HipHopDance1';
import { HipHopDance2 } from '../components/SpotifyAnimations/HipHopDance2';
import { MacarenaDance } from '../components/SpotifyAnimations/MacarenaDance';
import { SalsaDance } from '../components/SpotifyAnimations/SalsaDance';
import { StepHipHopDance } from '../components/SpotifyAnimations/StepHipHopDance';

function Image(props) {
  const { imgSrc, position, scale } = props;
  const texture = useLoader(THREE.TextureLoader, imgSrc);
  const vectorPosition = new THREE.Vector3().fromArray(position);

  return (
    <mesh position={vectorPosition} scale={scale}>
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

function Button({track, chooseTrack, ...props}) {
  const [hover, setHover] = useState(false);
  const [url, setUrl] = useState('/Panel_Assets/Adele_Spotify_Panel.png');
  const [color, setColor] = useState('blue');

  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  console.log(track)

  const handlePlay = () => {
    chooseTrack(track);

    if (track.uri === playingTrack.uri) {
      setPlay(!play);
    }
  };
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
      {/* <Image imgSrc="/Panel_Assets/Piano_Ballads_Panel.png" position={[-1.2, 0, -1]} />
      <Image imgSrc="/Panel_Assets/Piano_Ballads_Panel.png" position={[-1.2, 0, -1]} />
      <Image imgSrc="/Panel_Assets/Safar_Mix_Panel.png" position={[1.2, 0, -1]} />
      <Image imgSrc="/Panel_Assets/On_Repeat_Panel.png" position={[-1.5, 1, -1]} />
      <Image imgSrc="/Panel_Assets/Time_Capsule_Panel.png" position={[0, 1, -1]} />
      <Image imgSrc="/Panel_Assets/Repeat_Rewind_Panel.png" position={[1.5, 1, -1]} /> */}
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
const ModelTypeSwitcher = ({modelType}) => {
  // const [renderModel, setRenderModel] = useState()
  // switch(modelType)
  // {
  //   case 'Country':

  // }
  return (
    <>
    {
      modelType == 'Country'
      ? <StepHipHopDance scale={[0.05, 0.05, 0.05]} position={[0,0,-1.5]} />
      : modelType == 'Workout'
        ? <ChickenDance scale={[0.05, 0.05, 0.05]} position={[0,0,-1]} />
        : modelType == 'Salsa'
          ? <SalsaDance scale={[0.05, 0.05, 0.05]} position={[0,0,-1]} />
          : modelType == 'Hip-Hop'
            ? <HipHopDance1 scale={[0.05, 0.05, 0.05]} position={[0,0,-1]} />
            : modelType == 'Latin-Pop'
              ? <MacarenaDance scale={[0.05, 0.05, 0.05]} position={[0,0,-1]} />
              : <HipHopDance2 scale={[0.05, 0.05, 0.05]} position={[0,0,-1]} />
    }
    </>
  )
}

const SpotifyPage = () => {
    const [modelType, setModelType] = useState('Workout');
    const [imgUrl, setImgUrl] = useState(modelType);


    return (
        <>
            {/* <div>Hello</div> */}
            {/* <Canvas>
              <Suspense fallback={null}>
                <OrbitControls />
                <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
                <ChickenDance />
              </Suspense>
            </Canvas> */}
            {/* <MusicIndex /> */}
            <ARButton />
            <Canvas>
                <XR referenceSpace="local">
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Interactive onSelect={()=>setModelType('Workout')}>
                  <Image 
                    position={[-0.7,1,-1]} 
                    scale={[0.3,0.1,0.5]} 
                    imgSrc={
                      modelType==='Workout'
                      ? '/Tab_Workout_Dark.png'
                      : '/Tab_Workout_Light.png'
                    }/>
                </Interactive>
                <Interactive onSelect={()=>setModelType('Country')}>
                  <Image
                    position={[-0.35,1,-1]} 
                    scale={[0.3,0.1,0.5]}
                    imgSrc={
                      modelType==='Country'
                      ? '/Tab_Country_Dark.png'
                      : '/Tab_Country_Light.png'
                    }/>
                </Interactive>
                <Interactive onSelect={()=>setModelType('Salsa')}>
                  <Image 
                    position={[0,1,-1]} 
                    scale={[0.3,0.1,0.5]}
                    imgSrc={
                      modelType==='Salsa'
                      ? '/Tab_Salsa_Dark.png'
                      : '/Tab_Salsa_Light.png'
                    }/>
                </Interactive>
                <Interactive onSelect={()=>setModelType('Hip-Hop')}>
                  <Image 
                  position={[0.35,1,-1]} 
                  scale={[0.3,0.1,0.5]}
                  imgSrc={
                    modelType==='Hip-Hop'
                    ? '/Tab_Hip_Hop_Dark.png'
                    : '/Tab_Hip_Hop_Light.png'
                  }/>
                </Interactive>
                <Interactive onSelect={()=>setModelType('Latin-Pop')}>
                  <Image 
                    position={[0.7,1,-1]} 
                    scale={[0.3,0.1,0.5]}
                    imgSrc={
                      modelType==='Latin-Pop'
                      ? '/Tab_Latin_Pop_Dark.png'
                      : '/Tab_Latin_Pop_Light.png'
                    }/>
                </Interactive>
                <Interactive onSelect={()=>setModelType('Chill')}>
                  <Image 
                    position={[1.05,1,-1]} 
                    scale={[0.3,0.1,0.5]}
                    imgSrc={
                      modelType==='Chill'
                      ? '/Tab_Chill_Dark.png'
                      : '/Tab_Chill_Light.png'
                    }/>
                </Interactive>
                {/* <ChickenDance scale={[0.05, 0.05, 0.05]} position={[0,0,-1]}/> */}
                <ModelTypeSwitcher modelType={modelType}/>
                {/* <Button position={[0, 0.1, -0.2]} track={track} chooseTrack={chooseTrack}/> */}
                <Controllers />
                </XR>
            </Canvas>
        </>
        
    )
}

export default SpotifyPage;


  