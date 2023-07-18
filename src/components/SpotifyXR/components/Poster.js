import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../../../atoms/playerAtom";

function Poster({ track, chooseTrack }) {
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const handlePlay = () => {
    chooseTrack(track);

    if (track.uri === playingTrack.uri) {
      setPlay(!play);
    }
  };

  return (
    <div
  style={{ width: "260px", height: "360px", borderRadius: "50px", overflow: "hidden", position: "relative", color: "white", cursor: "pointer", transform: "scale(1)", transitionDuration: "200ms", transitionTimingFunction: "ease-out", transitionProperty: "transform, color" }}
  className="w-[260px] h-[360px] rounded-[50px] overflow-hidden relative text-white/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto"
  onClick={handlePlay}
>
  <img
    src={track.albumUrl}
    alt=""
    style={{ height: "100%", width: "100%", position: "absolute", inset: "0", objectFit: "cover", borderRadius: "50px", opacity: "0.8", transitionDuration: "200ms", transitionProperty: "opacity" }}
    className="h-full w-full absolute inset-0 object-cover rounded-[50px] opacity-80 group-hover:opacity-100"
  />

  <div style={{ bottom: "1.25rem", left: "1rem", right: "1rem", display: "flex", alignItems: "center", gap: "0.875rem" }} className="absolute bottom-10 inset-x-0 ml-4 flex items-center space-x-3.5">
    <div style={{ width: "2.5rem", height: "2.5rem", backgroundColor: "#15883e", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", transitionDuration: "200ms", transitionProperty: "background-color", flexShrink: 0 }} className="h-10 w-10 bg-[#15883e] rounded-full flex items-center justify-center group-hover:bg-[#1db954] flex-shrink-0">
      {track.uri === playingTrack.uri && play ? (
        <BsFillPauseFill style={{ fontSize: "1.5rem" }} className="text-xl" />
      ) : (
        <BsFillPlayFill style={{ fontSize: "1.5rem", marginLeft: "1px" }} className="text-xl ml-[1px]" />
      )}
    </div>

    <div style={{ fontSize: "15px" }} className="text-[15px]">
      <h4 style={{ fontWeight: "800", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "11rem" }} className="font-extrabold truncate w-44">{track.title}</h4>
      <h6>{track.artist}</h6>
    </div>
  </div>
</div>

  );
}

export default Poster;
