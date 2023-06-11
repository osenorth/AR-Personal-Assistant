import { ThreeBounce } from "better-react-spinkit";
import Image from "next/image";

function Loader() {
  return (
    <div style={{ height: "100vh", backgroundColor: "black" }} className="h-screen bg-black">
  <div className="pt-40 flex flex-col items-center space-y-4">
      <span style={{ width: "400px", height: "250px", maxWidth: "550px", maxHeight: "240px", position: "relative" }} className="relative w-[400px] h-[250px] lg:w-[550px] lg:h-[240px]">
        {/* <Image
          src="https://rb.gy/y9mwtb"
          layout="fill"
          objectFit="contain"
          className="animate-pulse"
        /> */}
      </span>
      <ThreeBounce size={23} color="#15883e" />
    </div>
  </div>
  
  );
}

export default Loader;
