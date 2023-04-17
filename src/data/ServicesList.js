import dailyAssistantImg from "../assets/daily-assistant.svg";
import tourGuideImg from "../assets/tour-guide.svg";
import fitnessTrainerImg from "../assets/fitness-trainer.svg";

const servicesList = [
  {
    id: 1,
    title: "Assistance on daily activities",
    desc: "Maximize your productivity on daily tasks with our AR-based personal assistant. Reminders, alarms, queries, and music streaming, all in one intuitive platform.",
    poster: dailyAssistantImg,
  },
  {
    id: 2,
    title: "Virtual Tour Guide",
    desc: "Explore new destinations like a pro with our virtual tour guide. Discover must-see attractions, local cuisine, travel routes, and budget-friendly stays all in one place.",
    poster: tourGuideImg,
  },
  {
    id: 3,
    title: "Virtual Fitness Trainer",
    desc: "Achieve your fitness goals with our virtual trainer. Our AI-powered platform tracks your movements and suggests personalized exercises for optimal results.",
    poster: fitnessTrainerImg,
  },
];

export default servicesList;
