import { useCharacterAnimations } from "../../helpers/Animations";
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
            mapState={props.mapState}
            toggleComponent={props.toggleComponent}
          />
        </div>
      </div>
    </div>
  );
});

export default Interface;
