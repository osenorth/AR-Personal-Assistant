import Image from "next/image";
import {
  ChartBarIcon,
  ClockIcon,
  DotsHorizontalIcon,
  HomeIcon,
} from "@heroicons/react/solid";
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiCompassFill } from "react-icons/ri";

function Sidebar() {
  return (
    <section style={{ position: "fixed", top: 0, zIndex: 40, display: "flex", flexDirection: "column", padding: "4px", alignItems: "center", backgroundColor: "#000", width: "90px", height: "100vh", gap: "2rem" }}>
  {/* <Image
    src="https://rb.gy/xkacau"
    width={56}
    height={56}
    objectFit="contain"
  /> */}
  <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
    <HomeIcon style={{ color: "#fff", opacity: 0.85, height: "1.5rem" }} />
    <RiCompassFill style={{ fontSize: "2rem", height: "1.5rem" }} />
    <FaMicrophoneAlt style={{ marginLeft: "0.25rem", height: "1.5rem" }} />
    <ChartBarIcon style={{ height: "1.5rem" }} />
    <ClockIcon style={{ height: "1.5rem" }} />
    <DotsHorizontalIcon style={{ height: "1.5rem" }} />
  </div>
</section>

  );
}

export default Sidebar;
