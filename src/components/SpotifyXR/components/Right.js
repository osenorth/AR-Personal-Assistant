import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import { ViewGridIcon } from "@heroicons/react/solid";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import RecentlyPlayed from "./RecentlyPlayed";

function Right({ spotifyApi, chooseTrack }) {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

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
    <section style={{ padding: "1rem", gap: "2rem" }} className="p-4 space-y-8 pr-8">
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} className="flex space-x-2 items-center justify-between">
      {/* Icons */}
      {/* <div style={{ display: "flex", alignItems: "center", gap: "1rem", borderWidth: "2px", borderColor: "#262626", borderRadius: "9999px", height: "3rem", padding: "0.75rem", paddingLeft: "1rem", paddingRight: "1rem" }} className="flex items-center space-x-4 border-2 border-[#262626] rounded-full h-12 py-3 px-4">
        <HiOutlineShieldCheck style={{ color: "#ccc", fontSize: "1.5rem" }} className="text-[#ccc] text-xl" />
        <MdOutlineSettings style={{ color: "#ccc", fontSize: "1.5rem" }} className="text-[#ccc] text-xl" />
        <BiBell style={{ color: "#ccc", fontSize: "1.5rem" }} className="text-[#ccc] text-xl" />
      </div> */}
      {/* Profile */}
      {/* <Dropdown /> */}
    </div>
  
    {/* Recently Played Tracks */}
    <div style={{ backgroundColor: "#0d0d0d", borderWidth: "2px", borderColor: "#262626", padding: "1rem", borderRadius: "0.75rem" }} className="bg-[#0d0d0d] border-2 border-[#262626] p-4 rounded-xl space-y-4">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} className="flex items-center justify-between">
        <h4 style={{ color: "#fff", fontWeight: "600", fontSize: "12px" }} className="text-white font-semibold text-sm">Recently Played</h4>
        <ViewGridIcon style={{ color: "#686868", height: "1.5rem" }} className="text-[#686868] h-6" />
      </div>
  
      <div style={{ gap: "1rem", overflowY: "scroll", overflowX: "hidden", height: "250px", maxHeight: "400px", scrollbarWidth: "thin", scrollbarColor: "#333333 transparent" }} className="space-y-4 overflow-y-scroll overflow-x-hidden h-[250px] md:h-[400px] scrollbar-hide">
        {recentlyPlayed.map((track, index) => (
          <RecentlyPlayed
            key={index}
            track={track}
            chooseTrack={chooseTrack}
          />
        ))}
      </div>
      <button style={{ color: "#CECECE", backgroundColor: "#1A1A1A", fontSize: "13px", padding: "0.875rem 1rem", borderRadius: "0.5rem", width: "100%", fontWeight: "bold", opacity: "0.8", transition: "ease-out", hover: "background-color: #1A1A1A; opacity: 1" }} className="btn">View All</button>
    </div>
  </section>
  
  );
}

export default Right;
