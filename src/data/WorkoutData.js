import pushupImg from "../assets/pushup.jpg";
import squatImg from "../assets/squat.jpg";
import crunchesImg from "../assets/crunches.jpg";
import bicepcurlsImg from "../assets/bicepcurls.jpg";

const workoutData = {
  title: "Workouts",
  description:
    "Our platform offers a diverse range of workouts, from fundamental exercises like squats and push-ups. With AR and AI technology, our virtual trainer guides and tracks your progress, helping you to improve your performance and achieve your fitness goals with precision and efficiency.",
  exploreText: "Let's Do It",
  servicesList: [
    {
      id: 1,
      title: "Push Ups",
      desc: "Push ups are a bodyweight exercise that targets the chest, arms, and shoulders. They build upper body strength and increase muscular endurance.",
      poster: pushupImg,
      route: "/workouts/pushups",
    },
    {
      id: 2,
      title: "Squats",
      desc: "Squats are a fundamental exercise that strengthens the legs and glutes, while improving mobility and balance. They promote overall fitness and athletic performance.",
      poster: squatImg,
      route: "/workouts/squats",
    },
    {
      id: 3,
      title: "Crunches",
      desc: "Crunches are a core strengthening exercise that target the rectus abdominis muscle. They provide you overall abdominal strength, and a more stronger midsection",
      poster: crunchesImg,
      route: "/workouts/crunches",
    },
    {
      id: 4,
      title: "Bicep Curls",
      desc: "Bicep curls are a weightlifting exercise that target the biceps muscle. They increase mustle strength, and improve overall upper body aesthetics.",
      poster: bicepcurlsImg,
      route: "/workouts/bicepcurls",
    },
  ],
};

export default workoutData;
