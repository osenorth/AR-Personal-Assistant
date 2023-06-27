import "@google/model-viewer";
import * as styles from "../Direction.module.css";

const Right = () => (
  <div className={styles.card}>
    <model-viewer
      className={styles.modelView}
      src="models/right.glb"
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      poster="poster.webp"
      shadow-intensity="1"
      autoplay
      camera-target="0.01307m 7.5m -0.05753m"
      min-camera-orbit="0m 5m 10m"
      min-field-of-view="30deg"
    >
      {" "}
    </model-viewer>
  </div>
);

export default Right;
