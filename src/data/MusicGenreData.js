import genreChillImg from "../assets/genre-chill.png"
import genreCountryImg from "../assets/genre-country.png"
import genreWorkoutImg from "../assets/genre-workout.png"
import genreHipHopImg from "../assets/genre-hip-hop.png"
import genreLatinPopImg from "../assets/genre-latin-pop.png"
import genreSalsaImg from "../assets/genre-salsa.png"
import bicycleCrunchesImg from "../assets/bicyclecrunches.jpg";

const musicGenreData = {
  title: "Music Genres",
  description:
    "Our platform offers a diverse range of music genres, from soothing tunes like Chill and Classical to energetic beats like Hip Hop and EDM. Whether you want to unwind and relax or get pumped up for a workout, our platform ensures precision and efficiency in delivering the perfect musical experience to suit your mood and preferences.",
  exploreText: "",
  servicesList: [
    {
      "id": 1,
      "title": "Chill",
      "desc": "Chill music is perfect for relaxation and unwinding, creating a soothing ambiance to calm your mind and soul.",
      "poster": genreChillImg,
      "route": "/genres/chill"
    },
    {
      "id": 2,
      "title": "Country",
      "desc": "This music brings the soul of rural country to life with its heartfelt storytelling and melodic tunes.",
      "poster": genreCountryImg,
      "route": "/genres/country"
    },
    {
      "id": 3,
      "title": "Hip Hop",
      "desc": "Hip Hop is a dynamic genre that exudes creativity and rhythm, expressing emotions through powerful beats and lyrical flow.",
      "poster": genreHipHopImg,
      "route": "/genres/hip-hop"
    },
    {
      "id": 4,
      "title": "Latin Pop",
      "desc": "Latin Pop music is full of infectious energy and passionate rhythms, capturing the vibrant spirit of Latin American culture.",
      "poster": genreLatinPopImg,
      "route": "/genres/latin-pop"
    },
    {
      "id": 5,
      "title": "Salsa",
      "desc": "Salsa music will get you moving with its lively beats, taking you on a rhythmic journey through Latin dance and music traditions.",
      "poster": genreSalsaImg,
      "route": "/genres/salsa"
    },
    {
      "id": 6,
      "title": "Workout",
      "desc": "Workout music is the perfect companion for your fitness sessions, boosting your energy and motivation to keep pushing through the challenges.",
      "poster": genreWorkoutImg,
      "route": "/genres/workout"
    }
  ],  
};

export default musicGenreData;
