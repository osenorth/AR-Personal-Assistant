import step1Img from "../assets/music-login.png";
import step2Img from "../assets/music-ar.png";
import step3Img from "../assets/music-visual.png";

const musicData = [
  {
    id: 1,
    title: "Login with your Spotify Account",
    desc: "Click on the 'Get Started' button and you'll be redirected to the Spotify authentication page. Enter your Spotify account credentials and click on the 'Login' button to connect your account.",
    poster: step1Img,
    demoUrl: "",
  },
  {
    id: 2,
    title: "Enter the AR Experience",
    desc: "Click on the 'Enter AR' button. At this point, you might be prompted to enable AR and camera permissions by your browser. After these are enabled, view the AR music experience by holding your camera upright in a lit environment.",
    poster: step2Img,
    demoUrl: "",
  },
  {
    id: 3,
    title: "Explore the Audio-Visual Journey",
    desc: "Switch between the different genres, albums and songs available by tapping on the corresponding AR buttons. Also switch between the 3D assistant model configurations to your fancy.",
    poster: step3Img,
    demoUrl: "",
  },
];

export default musicData;
