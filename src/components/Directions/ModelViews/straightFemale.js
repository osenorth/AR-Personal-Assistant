import "@google/model-viewer";
import * as styles from "../Direction.module.css";

const StraightFemale = () => (
  <div className={styles.card}>
    <model-viewer
      className={styles.modelView}
      src="/models/stop_female.glb"
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      poster="poster.webp"
      shadow-intensity="1"
      camera-target="0.01307m -4m 10.05753m"
      min-camera-orbit="0m 5m 0m"
      min-field-of-view="30deg"
    >
      {" "}
    </model-viewer>
  </div>
);

export default StraightFemale;
