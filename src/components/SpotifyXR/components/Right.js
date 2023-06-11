import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import { ViewGridIcon } from "@heroicons/react/solid";
import Dropdown from "./Dropdown";
import React, { Suspense, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import RecentlyPlayed from "./RecentlyPlayed";

import { createRoot } from 'react-dom/client';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Sky, OrbitControls, Text } from "@react-three/drei";
import XrHitModelContainer from "../../../containers/XRHitModelContainer/XRHitModelContainer";
import { Interactive, XR, ARButton, Controllers } from '@react-three/xr';
import * as THREE from 'three';

import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../../../atoms/playerAtom";

import { RGBELoader } from 'three-stdlib'
import {
  Center,
  Text3D,
  Instance,
  Instances,
  Environment,
  Lightformer,
  RandomizedLight,
  AccumulativeShadows,
  MeshTransmissionMaterial
} from '@react-three/drei'
import { useControls, button } from 'leva'

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

// function Button({track, chooseTrack, ...props}) {
//   const [hover, setHover] = useState(false);
//   const [url, setUrl] = useState('/Panel_Assets/Adele_Spotify_Panel.png');
//   const [color, setColor] = useState('blue');

//   const [play, setPlay] = useRecoilState(playState);
//   const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

//   console.log(track)

//   const handlePlay = () => {
//     chooseTrack(track);

//     if (track.uri === playingTrack.uri) {
//       setPlay(!play);
//     }
//   };
//   const onSelect = () => {
//     setColor((Math.random() * 0xffffff) | 0);
//   };

//   const onImageSelect = () => {
//     setUrl('/Panel_Assets/Adele_Detail_Panel.png');
//   };

//   return (
//     <Box>
//       <Interactive onSelect={onImageSelect}>
//         <Image imgSrc={track.albumUrl} position={[0, 0, -1]} />
//       </Interactive>
//     </Box>
//   );
// }

function Right({ spotifyApi, chooseTrack }) {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  
  const [hover, setHover] = useState(false);
  const [url, setUrl] = useState('/Panel_Assets/Adele_Spotify_Panel.png');
  const [color, setColor] = useState('blue');

  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const { autoRotate, text, shadow, ...config } = {
    text: 'Inter',
    backside: true,
    backsideThickness: { value: 0.3, min: 0, max: 2 },
    samples: { value: 16, min: 1, max: 32, step: 1 },
    resolution: { value: 1024, min: 64, max: 2048, step: 64 },
    transmission: { value: 1, min: 0, max: 1 },
    clearcoat: { value: 0, min: 0.1, max: 1 },
    clearcoatRoughness: { value: 0.0, min: 0, max: 1 },
    thickness: { value: 0.3, min: 0, max: 5 },
    chromaticAberration: { value: 5, min: 0, max: 5 },
    anisotropy: { value: 0.3, min: 0, max: 1, step: 0.01 },
    roughness: { value: 0, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0.5, min: 0, max: 4, step: 0.01 },
    distortionScale: { value: 0.1, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
    ior: { value: 1.5, min: 0, max: 2, step: 0.01 },
    color: '#ff9cf5',
    gColor: '#ff7eb3',
    shadow: '#750d57',
    autoRotate: false,
    screenshot: button(() => {
      // Save the canvas as a *.png
      const link = document.createElement('a')
      link.setAttribute('download', 'canvas.png')
      link.setAttribute('href', document.querySelector('canvas').toDataURL('image/png').replace('image/png', 'image/octet-stream'))
      link.click()
    })
  }

  const initialX = 0;
  const initialY = 0;
  const initialZ = -1;

  // const handlePlay = () => {
  //   chooseTrack(track);

  //   if (track.uri === playingTrack.uri) {
  //     setPlay(!play);
  //   }
  // };
  // const onSelect = () => {
  //   setColor((Math.random() * 0xffffff) | 0);
  // };

  // const onImageSelect = () => {
  //   setUrl('/Panel_Assets/Adele_Detail_Panel.png');
  // };

  // Recently Played Tracks...
  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getMyRecentlyPlayedTracks({ limit: 20 }).then((res) => {
      setRecentlyPlayed(
        res.body.items.map(({ track }) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
          };
        })
      );
    });
  }, [accessToken]);

  return (
    <>
    <ARButton />
    <Canvas>
        <XR referenceSpace="local">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box>
          <Interactive>
            {recentlyPlayed.map((track, index) => (
              // <RecentlyPlayed
              //   key={index}
              //   track={track}
              //   chooseTrack={chooseTrack}
              // />
              <Image imgSrc={track.albumUrl} position={[initialX+index, initialY+index, initialZ+index]} />
            ))
            }
          </Interactive>
       </Box>
       <Text config={config} rotation={[0, 0, 0]} position={[0, -1, 2.25]}>
        {text}
      </Text>
      <Environment resolution={32}>
        <group rotation={[-Math.PI / 4, -0.3, 0]}>
          <Lightformer intensity={20} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[10, 2, 1]} />
          <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
          <Lightformer type="ring" intensity={2} rotation-y={Math.PI / 2} position={[-0.1, -1, -5]} scale={10} />
        </group>
      </Environment>
      {/** Soft shadows */}
      <AccumulativeShadows frames={100} color={shadow} colorBlend={5} toneMapped={true} alphaTest={0.9} opacity={1} scale={30} position={[0, -1.01, 0]}>
        <RandomizedLight amount={4} radius={10} ambient={0.5} intensity={1} position={[0, 10, -10]} size={15} mapSize={1024} bias={0.0001} />
      </AccumulativeShadows>
       <Controllers />
              </XR>
          </Canvas>
      </>
      
  );
}

function TextCustom({ children, config, font = '/Inter_Medium_Regular.json', ...props }) {
  const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')
  return (
    <>
      <group>
        <Center scale={[0.8, 1, 1]} front top {...props}>
          <Text3D
            castShadow
            bevelEnabled
            font={font}
            scale={5}
            letterSpacing={-0.03}
            height={0.25}
            bevelSize={0.01}
            bevelSegments={10}
            curveSegments={128}
            bevelThickness={0.01}>
            {children}
            <MeshTransmissionMaterial {...config} background={texture} />
          </Text3D>
        </Center>
        {/* <Grid /> */}
      </group>
    </>
  )
}

// const SpotifyPanel = ({track, chooseTrack}) => {

//   console.log(track)
//   return (
//       <>
//           <div>Hello</div>
//           <ARButton />
//           <Canvas>
//               <XR referenceSpace="local">
//               <ambientLight />
//               <pointLight position={[10, 10, 10]} />
//               {/* <Button position={[0, 0.1, -0.2]} track={track} chooseTrack={chooseTrack}/> */}
//               <Controllers />
//               </XR>
//           </Canvas>
//       </>
      
//   )
// }



export default Right;
