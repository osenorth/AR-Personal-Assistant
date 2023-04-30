import dailyAssistantImg from "../assets/daily-assistant.svg";
import tourGuideImg from "../assets/tour-guide.svg";
import fitnessTrainerImg from "../assets/fitness-trainer.svg";

const servicesData = {
  title: "Our Services",
  description:
    "Our platform is packed with advanced features designed to help you stay organized, focused, and on top of your workload - all while freeing up more time for the things that matter most.",
  exploreText: "Explore",
  servicesList: [
    {
      id: 1,
      title: "Assistance on daily activities",
      desc: "Maximize your productivity on daily tasks with our AR-based personal assistant. Reminders, alarms, queries, and music streaming, all in one intuitive platform.",
      poster: dailyAssistantImg,
      route: "/dailyassistance",
    },
    {
      id: 2,
      title: "Virtual Tour Guide",
      desc: "Explore new destinations like a pro with our virtual tour guide. Discover must-see attractions, local cuisine, travel routes, and budget-friendly stays all in one place.",
      poster: tourGuideImg,
      route: "/tourguide",
    },
    {
      id: 3,
      title: "Virtual Fitness Trainer",
      desc: "Achieve your fitness goals with our virtual trainer. Our AI-powered platform tracks your movements and suggests personalized exercises for optimal results.",
      poster: fitnessTrainerImg,
      route: "/fitnesstrainer",
    },
  ],
};

export default servicesData;
