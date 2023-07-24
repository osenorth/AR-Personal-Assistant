"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bicepcurls = _interopRequireDefault(require("../assets/bicepcurls.jpg"));

var _jumpingjacks = _interopRequireDefault(require("../assets/jumpingjacks.jpg"));

var _pullups = _interopRequireDefault(require("../assets/pullups.jpg"));

var _lungs = _interopRequireDefault(require("../assets/lungs.jpg"));

var _squat = _interopRequireDefault(require("../assets/squat.jpg"));

var _plank = _interopRequireDefault(require("../assets/plank.jpg"));

var _situps = _interopRequireDefault(require("../assets/situps.jpg"));

var _pikewalk = _interopRequireDefault(require("../assets/pikewalk.jpg"));

var _burpees = _interopRequireDefault(require("../assets/burpees.jpg"));

var _pushup = _interopRequireDefault(require("../assets/pushup.jpg"));

var _genreChill = _interopRequireDefault(require("../assets/genre-chill.png"));

var _genreCountry = _interopRequireDefault(require("../assets/genre-country.png"));

var _genreWorkout = _interopRequireDefault(require("../assets/genre-workout.png"));

var _genreHipHop = _interopRequireDefault(require("../assets/genre-hip-hop.png"));

var _genreLatinPop = _interopRequireDefault(require("../assets/genre-latin-pop.png"));

var _genreSalsa = _interopRequireDefault(require("../assets/genre-salsa.png"));

var _bicyclecrunches = _interopRequireDefault(require("../assets/bicyclecrunches.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var musicGenreData = {
  title: "Music Genres",
  description: "Our platform offers a diverse range of music genres, from soothing tunes like Chill and Classical to energetic beats like Hip Hop and EDM. Whether you want to unwind and relax or get pumped up for a workout, our platform ensures precision and efficiency in delivering the perfect musical experience to suit your mood and preferences.",
  exploreText: "",
  servicesList: [{
    "id": 1,
    "title": "Chill",
    "desc": "Chill music is perfect for relaxation and unwinding, creating a soothing ambiance to calm your mind and soul.",
    "poster": _genreChill["default"],
    "route": "/genres/chill"
  }, {
    "id": 2,
    "title": "Country",
    "desc": "This music brings the soul of rural country to life with its heartfelt storytelling and melodic tunes.",
    "poster": _genreCountry["default"],
    "route": "/genres/country"
  }, {
    "id": 3,
    "title": "Hip Hop",
    "desc": "Hip Hop is a dynamic genre that exudes creativity and rhythm, expressing emotions through powerful beats and lyrical flow.",
    "poster": _genreHipHop["default"],
    "route": "/genres/hip-hop"
  }, {
    "id": 4,
    "title": "Latin Pop",
    "desc": "Latin Pop music is full of infectious energy and passionate rhythms, capturing the vibrant spirit of Latin American culture.",
    "poster": _genreLatinPop["default"],
    "route": "/genres/latin-pop"
  }, {
    "id": 5,
    "title": "Salsa",
    "desc": "Salsa music will get you moving with its lively beats, taking you on a rhythmic journey through Latin dance and music traditions.",
    "poster": _genreSalsa["default"],
    "route": "/genres/salsa"
  }, {
    "id": 6,
    "title": "Workout",
    "desc": "Workout music is the perfect companion for your fitness sessions, boosting your energy and motivation to keep pushing through the challenges.",
    "poster": _genreWorkout["default"],
    "route": "/genres/workout"
  }]
};
var _default = musicGenreData;
exports["default"] = _default;