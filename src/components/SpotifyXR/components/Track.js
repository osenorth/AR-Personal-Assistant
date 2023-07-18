import { ImHeadphones } from "react-icons/im";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../../../atoms/playerAtom";

function Track({ track, chooseTrack }) {
  const [hasLiked, setHasLiked] = useState(false);
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const handlePlay = () => {
    chooseTrack(track);

    if (track.uri === playingTrack.uri) {
      setPlay(!play);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", cursor: "default", hover: "background-color: rgba(255,255,255,0.1)", padding: "2px 4px", borderRadius: "0.375rem", transition: "ease-out" }} className="group">
    <div style={{ display: "flex", alignItems: "center" }} className="flex items-center">
      <img src={track.albumUrl} alt="" style={{ borderRadius: "0.75rem", height: "3rem", width: "3rem", objectFit: "cover", marginRight: "0.75rem" }} className="rounded-xl h-12 w-12 object-cover mr-3" />
      <div>
        <h4 style={{ color: "#fff", fontSize: "0.875rem", fontWeight: "600", maxWidth: "450px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} className="text-white text-sm font-semibold truncate w-[450px]">
          {track.title}
        </h4>
        <p style={{ color: "rgb(179,179,179)", fontSize: "13px", fontWeight: "600" }} className="text-[rgb(179,179,179)] text-[13px] font-semibold group-hover:text-white">
          {track.artist}
        </p>
      </div>
    </div>
  
    <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "0.625rem" }} className="md:ml-auto flex items-center space-x-2.5">
      <div style={{ color: "#fff", display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.875rem", fontWeight: "600" }} className="text-white flex space-x-1 text-sm font-semibold">
        <ImHeadphones style={{ fontSize: "1.25rem" }} className="text-lg" />
        <h4>{track.popularity}</h4>
      </div>
      <div style={{ display: "flex", alignItems: "center", borderRadius: "9999px", borderWidth: "2px", borderColor: "#262626", width: "85px", height: "2.5rem", position: "relative", cursor: "pointer", hover: "border-color: rgba(255,255,255,0.4)" }} className="flex items-center rounded-full border-2 border-[#262626] w-[85px] h-10 relative cursor-pointer group-hover:border-white/40">
        <AiFillHeart
          style={{ fontSize: "1.5rem", marginLeft: "0.75rem" }}
          className={`text-xl ml-3 icon ${hasLiked ? "text-[#1ed760]" : "text-[#868686]"}`}
          onClick={() => setHasLiked(!hasLiked)}
        />
        {track.uri === playingTrack.uri && play ? (
          <div
            style={{ borderRadius: "9999px", borderWidth: "1px", borderColor: "#15883e", display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", right: "-0.125rem", backgroundColor: "#15883e", cursor: "pointer", hover: "transform: scale(1.1)" }}
            className="h-10 w-10 rounded-full border border-[#15883e] flex items-center justify-center absolute -right-0.5 bg-[#15883e] icon hover:scale-110"
            onClick={handlePlay}
          >
            <BsFillPauseFill style={{ color: "#fff", fontSize: "1.5rem" }} className="text-white text-xl" />
          </div>
        ) : (
          <div
            style={{ borderRadius: "9999px", borderWidth: "1px", borderColor: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", right: "-0.125rem", cursor: "pointer", hover: "background-color: #15883e; border-color: #15883e; transform: scale(1.1)" }}
            className="h-10 w-10 rounded-full border border-white/60 flex items-center justify-center absolute -right-0.5 hover:bg-[#15883e] hover:border-[#15883e] icon hover:scale-110"
            onClick={handlePlay}
          >
            <BsFillPlayFill style={{ color: "#fff", fontSize: "1.5rem", marginLeft: "1px" }} className="text-white text-xl ml-[1px]" />
          </div>
        )}
      </div>
    </div>
  </div>
  
  );
}

export default Track;
