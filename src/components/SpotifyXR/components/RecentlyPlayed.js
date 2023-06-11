import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../../../atoms/playerAtom";

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
    <img
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
    </div>
  </div>
  
  );
}

export default RecentlyPlayed;
