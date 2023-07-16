import "@google/model-viewer";
import * as styles from "../Direction.module.css";

const StraightMale = () => (
  <div className={styles.card}>
    <model-viewer
      className={styles.modelView}
      src="/models/stop_male.glb"
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      poster="poster.webp"
      shadow-intensity="1"
      camera-orbit="0deg 180deg 0deg"
      camera-target="0m 2m 0m"
      min-field-of-view="30deg"
    >
      {" "}
    </model-viewer>
  </div>
);

export default StraightMale;
