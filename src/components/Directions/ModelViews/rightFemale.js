import "@google/model-viewer";
import * as styles from "../Direction.module.css";

const RightFemale = () => (
  <div className={styles.card}>
    <model-viewer
      className={styles.modelView}
      src="/models/right_female.glb"
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      poster="poster.webp"
      shadow-intensity="1"
      autoplay
      camera-target="-0.01307m 7m -20"
      min-camera-orbit="0m 5m 0m"
    >
      
      {" "}
    </model-viewer>
  </div>
);

export default RightFemale;
