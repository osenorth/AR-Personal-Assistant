import bicepcurlsImg from "../assets/bicepcurls.jpg";
import jumpingjacksImg from "../assets/jumpingjacks.jpg";
import pullupsImg from "../assets/pullups.jpg";
import lungsImg from "../assets/lungs.jpg";
import squatImg from "../assets/squat.jpg";
import plankImg from "../assets/plank.jpg";
import pushupImg from "../assets/pushup.jpg";
// import crunchesImg from "../assets/crunches.jpg";
const workoutData = {
  title: "Workouts",
  description:
    "Our platform offers a diverse range of workouts, from fundamental exercises like squats and push-ups. With AR and AI technology, our virtual trainer guides and tracks your progress, helping you to improve your performance and achieve your fitness goals with precision and efficiency.",
  exploreText: "Let's Do It",
  servicesList: [
    {
      id: 1,
      title: "Bicep Curls",
      desc: "Bicep curls are a weightlifting exercise that target the biceps muscle. They increase mustle strength, and improve overall upper body aesthetics.",
      poster: bicepcurlsImg,
      route: "/workouts/bicepcurls",
    },
    {
      id: 2,
      title: "Jumping Jacks",
      desc: "Jumping Jacks are  cardio exercise that engages the entire body, boosting heart rate and burning calories. They promote coordination during workout.",
      poster: jumpingjacksImg,
      route: "/workouts/jumpingjacks",
    },
    {
      id: 3,
      title: "Pull Ups",
      desc: "Pull-ups are a challenging upper body exercise that targets back, arms, and shoulders. They build strength, grip, and upper body stability for overall development.",
      poster: pullupsImg,
      route: "/workouts/pullups",
    },
    {
      id: 4,
      title: "Squats",
      desc: "Squats are a fundamental exercise that strengthens the legs and glutes, while improving mobility and balance. They promote overall fitness and athletic performance.",
      poster: squatImg,
      route: "/workouts/squats",
    },
    {
      id: 5,
      title: "Lungs",
      desc: "Lunges are an effective lower body exercise that targets the legs and glutes. They enhance your lower body muscle tone and overall functional fitness.",
      poster: lungsImg,
      route: "/workouts/lungs",
    },
    {
      id: 6,
      title: "Plank",
      desc: "Plank is a core strengthening exercise that engages abs, back, and shoulders. They improve core stability, posture, and overall strength and balance.",
      poster: plankImg,
      route: "/workouts/plank",
    },
    {
      id: 7,
      title: "Push Ups",
      desc: "Push ups are a bodyweight exercise that targets the chest, arms, and shoulders. They build upper body strength and increase muscular endurance.",
      poster: pushupImg,
      route: "/workouts/pushups",
    },
    // {
    //   id: 8,
    //   title: "Crunches",
    //   desc: "Crunches are a core strengthening exercise that target the rectus abdominis muscle. They provide you overall abdominal strength, and a more stronger midsection",
    //   poster: crunchesImg,
    //   route: "/workouts/crunches",
    // },
  ],
  exerciseData: {
    bicepcurls: {
      name: "Bicep Curls",
      modelLink:
        "https://sketchfab.com/models/4e958ee159fe46128b044b6e63d0ec69/embed?autostart=1&dnt=1",
      difficulty: "easy",
      refLink: "https://classpass.com/movements/bicep-curl",
      instructions: [
        "Start standing with a dumbbell in each hand. Your elbows should rest at your sides and your forearms should extend out in front of your body. Your knees should stay slightly bent and your belly button should draw into the spine.",
        "Bring the dumbbells all the way up to your shoulders by bending your elbows. Once at the top, hold for a second by squeezing the muscle",
        "Reverse the curl slowly and repeat.",
      ],
    },
    jumpingjacks: {
      name: "Jumping Jacks",
      modelLink:
        "https://sketchfab.com/models/4fcbfb3ef1124df8afd57204f9a516ac/embed?autostart=1&dnt=1",
      difficulty: "easy",
      refLink:
        "https://www.nytimes.com/guides/well/activity/how-to-do-a-jumping-jack",
      instructions: [
        "Stand upright with your legs together, arms at your sides.",
        "Bend your knees slightly, and jump into the air.",
        "As you jump, spread your legs to be about shoulder-width apart. Stretch your arms out and over your head.",
        "Jump back to starting position.",
        "Repeat the above process",
      ],
    },
    pullups: {
      name: "Pull Ups",
      modelLink:
        "https://sketchfab.com/models/feffc536b46442bfbe0fd3dfb99861c0/embed?autostart=1&dnt=1",
      difficulty: "hard",
      refLink:
        "https://www.verywellfit.com/pullup-bar-exercises-for-upper-body-strength-3120735",
      instructions: [
        "Stand below the bar with your feet shoulder width apart. Jump up and grip the bar with an overhand grip about shoulder width apart.",
        "Bend your knees and cross your ankles for a balanced position. Take a breath at the bottom.",
        "Exhale while pulling yourself up so your chin is level with the bar. Pause at the top.",
        "Lower yourself until your elbows are straight.",
        "Repeat the movement without touching the floor.",
      ],
    },
    squats: {
      name: "Squats",
      modelLink:
        "https://sketchfab.com/models/a3eebd6b06fb4ad5b6462dd28ee8dde6/embed?autostart=1&dnt=1",
      difficulty: "easy",
      refLink: "https://classpass.com/movements/squat",
      instructions: [
        "Stand with your feet shoulder-width apart and your arms straight overhead.",
        "Push your hips backward and sit toward your heels, keeping your core tight, back straight and upper body upright.",
        "Once your hips are parallel with your knees, drive your hips forward and rise back to a standing position.",
      ],
    },
    lungs: {
      name: "Lungs",
      modelLink:
        "https://sketchfab.com/models/93b25198122b4417a5da3d8428fae423/embed?autostart=1&dnt=1",
      difficulty: "medium",
      refLink: "https://classpass.com/movements/lunge",
      instructions: [
        "Stand straight with feet shoulder-width apart and parallel.",
        "Step one leg forward and lower your hips until both knees reach a 90-degree angle. Your back heel should come off the floor.",
        "Achieve the same pose by changing legs and keep rotating your position such way",
      ],
    },
    plank: {
      name: "Plank",
      modelLink:
        "https://sketchfab.com/models/1643f24070c34e6ca82b59a5145b949a/embed?autostart=1&dnt=1",
      difficulty: "medium",
      refLink: "https://classpass.com/movements/plank-jack",
      instructions: [
        "Begin on all fours. Place your palms shoulder-width apart, making sure your shoulders are aligned directly over your wrists.",
        "Extend your legs out behind you to get into plank position. Tuck your pelvis under and ensure your middle back is in a hollow position.",
        "Stay in this position as long as you can",
      ],
    },
    pushups: {
      name: "Push Ups",
      modelLink:
        "https://sketchfab.com/models/6c7bc2c57c8648f3a70488155b326a16/embed?autostart=1&dnt=1",
      difficulty: "hard",
      refLink: "https://classpass.com/movements/push-up",
      instructions: [
        "Begin in a plank position with your hands stacked under your shoulders and your body in a straight line.",
        "Slowly lower your body to the ground, keeping your neck, back and legs aligned. Keep your hips square to the floor as you lower yourself to the ground.",
        "Press back up to plank and repeat.",
      ],
    },
  },
};

export default workoutData;
