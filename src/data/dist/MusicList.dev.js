"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _musicLogin = _interopRequireDefault(require("../assets/music-login.png"));

var _musicAr = _interopRequireDefault(require("../assets/music-ar.png"));

var _musicVisual = _interopRequireDefault(require("../assets/music-visual.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var musicData = [{
  id: 1,
  title: "Login with your Spotify Account",
  desc: "Click on the 'Sign In with Spotify' button and you'll be redirected to the Spotify authentication page. Enter your Spotify account credentials and click on the 'Login' button to connect your account.",
  poster: _musicLogin["default"],
  demoUrl: ""
}, {
  id: 2,
  title: "Enter the AR Experience",
  desc: "Click on the 'Enter AR' button. At this point, you might be prompted to enable AR and camera permissions by your browser. After these are enabled, view the AR music experience by holding your camera upright in a lit environment.",
  poster: _musicAr["default"],
  demoUrl: ""
}, {
  id: 3,
  title: "Explore the Audio-Visual Journey",
  desc: "Switch between the different genres, albums and songs available by tapping on the corresponding AR buttons. Also switch between the 3D assistant model configurations to your fancy.",
  poster: _musicVisual["default"],
  demoUrl: ""
}];
var _default = musicData;
exports["default"] = _default;