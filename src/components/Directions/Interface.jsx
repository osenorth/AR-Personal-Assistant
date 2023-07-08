import { useCharacterAnimations } from "../../pages/use-cases/direction/Animations";
import CameraScreen from "./CameraScreen";
import { forwardRef } from "react";

const Interface = forwardRef((props, ref) => {
  //   const [animations, animationsIndex, setAnimationsIndex] =
  //     useCharacterAnimations();
  return (
    <div id="overlay-content" ref={ref}>
      <div className="dom-container">
        <div className="web-container">
          {/* <button className="batoon">Click Here</button> */}
          <CameraScreen
            mapState={{
              start: "Mumbai",
              destination: "Delhi",
              travelMode: "DRIVING",
              direction: null,
              distance: "",
              duration: "",
              message: "Please Enter Your Location and Destination to Navigate",
            }}
          />
        </div>
      </div>
    </div>
  );
});

export default Interface;
