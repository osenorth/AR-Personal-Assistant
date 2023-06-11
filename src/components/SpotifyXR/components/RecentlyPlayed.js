import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../../../atoms/playerAtom";

import React, { Suspense, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Sky, OrbitControls, Text } from "@react-three/drei";
import XrHitModelContainer from "../../../containers/XRHitModelContainer/XRHitModelContainer";
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
        <Image imgSrc={track.albumUrl} position={[0, 0, -1]} />
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

const SpotifyPage = ({track, chooseTrack}) => {

    console.log(track)
    return (
        <>
            <div>Hello</div>
            <ARButton />
            <Canvas>
                <XR referenceSpace="local">
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Button position={[0, 0.1, -0.2]} track={track} chooseTrack={chooseTrack}/>
                <Controllers />
                </XR>
            </Canvas>
        </>
        
    )
}


  

function RecentlyPlayed({ track, chooseTrack }) {
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const handlePlay = () => {
    chooseTrack(track);

    if (track.uri === playingTrack.uri) {
      setPlay(!play);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="flex items-center space-x-3" onClick={handlePlay}>
    {/* <img
      src={track.albumUrl}
      alt=""
      style={{ borderRadius: "50%", width: "52px", height: "52px" }}
      className="rounded-full w-[52px] h-[52px]"
    />
    <div>
      <h4 style={{ color: "#fff", fontSize: "13px", marginBottom: "0.125rem", fontWeight: "600", cursor: "pointer", maxWidth: "150px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} className="text-white text-[13px] mb-0.5 font-semibold hover:underline cursor-pointer truncate max-w-[150px]">
        {track.title}
      </h4>
      <p style={{ color: "#686868", fontSize: "10px", fontWeight: "600", cursor: "pointer" }} className="text-xs text-[#686868] font-semibold cursor-pointer hover:underline">
        {track.artist}
      </p>
    </div> */}
    <SpotifyPage
      track={track}
      chooseTrack={chooseTrack}
    />
  </div>
  
  );
}

export default RecentlyPlayed;
