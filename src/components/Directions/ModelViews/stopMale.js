import "@google/model-viewer";
import * as styles from "../Direction.module.css";

const StopMale = () => (
  <div className={styles.card}>
    <model-viewer
      className={styles.modelView}
      src="/models/right_male.glb"
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      poster="poster.webp"
      shadow-intensity="1"
      autoplay
      camera-orbit="0deg 180deg 0deg"
    >
      {" "}
    </model-viewer>
  </div>
);

export default StopMale;
