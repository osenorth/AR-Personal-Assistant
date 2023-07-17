import musicARImg from "../assets/music-ar.jpg";
import fitnessTrainerImg from "../assets/fitness-trainer.jpg";
import tourGuideImg from "../assets/tour-guide.svg";
import chatQueriesImg from "../assets/chatqueries.jpg";

const servicesData = {
  title: "Our Services",
  description:
    "Our platform is packed with advanced features designed to help you stay organized, focused, and on top of your workload - all while freeing up more time for the things that matter most.",
  exploreText: "Explore",
  servicesList: [
    {
      id: 1,
      title: "Music with AR assistant",
      desc: "Step into the mesmerizing world of music  with our AR music assistant. Immerse yourself in stunning visuals as you browse, and interact with music like never before.",
      poster: musicARImg,
      route: "music",
    },
    {
      id: 2,
      title: "Virtual Fitness Trainer",
      desc: "Achieve your fitness goals with our virtual trainer. Our AI-powered platform tracks your movements and suggests personalized exercises for optimal results.",
      poster: fitnessTrainerImg,
      route: "/fitnesstrainer",
    },
    {
      id: 3,
      title: "Virtual Tour Guide",
      desc: "Explore new destinations like a pro with our virtual tour guide. Discover must-see attractions, local cuisine, travel routes, and budget-friendly stays all in one place.",
      poster: tourGuideImg,
      route: "/tourguide",
    },
    {
      id: 4,
      title: "Assistance on daily queries",
      desc: "Discover the future of knowledge with our AI-enhanced assistant. Our intelligent algorithms are ready to provide instant answers to your daily questions. ",
      poster: chatQueriesImg,
      route: "/chat",
    },
  ],
};

export default servicesData;
