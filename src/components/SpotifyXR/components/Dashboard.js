import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import SpotifyWebApi from "spotify-web-api-node";
import { playingTrackState } from "../../../atoms/playerAtom";
import Body from "./Body";
import Player from "./Player";
import Right from "./Right";
import Sidebar from "./Sidebar";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});

function Dashboard() {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;

  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setShowPlayer(true);
  }, []);

  const chooseTrack = (track) => {
    setPlayingTrack(track);
  };

  console.log(process.env.SPOTIFY_CLIENT_ID)

  return (
    <main style={{ display: 'flex', minHeight: '100vh', minWidth: 'max-content', backgroundColor: 'black', paddingBottom: '6rem' }}>
    <Sidebar />
    <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
    <Right spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
  
    <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', zIndex: '50' }}>
      <Player accessToken={accessToken} trackUri={playingTrack.uri} />
    </div>
  </main>
  
  );
}

export default Dashboard;
