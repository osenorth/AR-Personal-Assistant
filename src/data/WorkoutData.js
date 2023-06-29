import bicepcurlsImg from "../assets/bicepcurls.jpg";
import jumpingjacksImg from "../assets/jumpingjacks.jpg";
import pullupsImg from "../assets/pullups.jpg";
import lungsImg from "../assets/lungs.jpg";
import squatImg from "../assets/squat.jpg";
import plankImg from "../assets/plank.jpg";
import situpsImg from "../assets/situps.jpg";
import pikewalkImg from "../assets/pikewalk.jpg";
import burpeesImg from "../assets/burpees.jpg";
import pushupImg from "../assets/pushup.jpg";
import bicycleCrunchesImg from "../assets/bicyclecrunches.jpg";

const workoutData = {
  title: "Workouts",
  description:
    "Our platform offers a diverse range of workouts, from fundamental exercises like squats and push-ups. With AR and AI technology, our virtual trainer guides and tracks your progress, helping you to improve your performance and achieve your fitness goals with precision and efficiency.",
  exploreText: "Let's Do It",
  servicesList: [
    {
      id: 1,
      title: "Jumping Jacks",
      desc: "Jumping Jacks are  cardio exercise that engages the entire body, boosting heart rate and burning calories. They promote coordination during workout.",
      poster: jumpingjacksImg,
      route: "/workouts/jumpingjacks",
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
      title: "Burpees",
      desc: "Burpees engage multiple muscle groups for a full-body workout, combining strength training. They improve strength, endurance, and overall fitness levels efficiently.",
      poster: burpeesImg,
      route: "/workouts/burpees",
    },
    {
      id: 4,
      title: "Plank",
      desc: "Plank is a core strengthening exercise that engages abs, back, and shoulders. They improve core stability, posture, and overall strength and balance.",
      poster: plankImg,
      route: "/workouts/plank",
    },
    {
      id: 5,
      title: "Push Ups",
      desc: "Push ups are a bodyweight exercise that targets the chest, arms, and shoulders. They build upper body strength and increase muscular endurance.",
      poster: pushupImg,
      route: "/workouts/pushups",
    },
    {
      id: 6,
      title: "Pike Walk",
      desc: "Pike walk is a challenging plank variation that targets the core, abs, back, and shoulders. It improves stability, posture, and overall strength.",
      poster: pikewalkImg,
      route: "/workouts/pikewalk",
    },
    {
      id: 7,
      title: "Bicycle Crunches",
      desc: "Bicycle crunches target the abs, obliques, and hip flexors, strengthening the core and improving stability. They are effective for toning the midsection.",
      poster: bicycleCrunchesImg,
      route: "/workouts/bicyclecrunches",
    },
    {
      id: 8,
      title: "Sit Ups",
      desc: "Sit-ups engage the abs, obliques, and hip flexors, strengthening the core and improving stability. They are very effective for achieving a well-defined midsection.",
      poster: situpsImg,
      route: "/workouts/situps",
    },
    {
      id: 9,
      title: "Lungs",
      desc: "Lunges are an effective lower body exercise that targets the legs and glutes. They enhance your lower body muscle tone and overall functional fitness.",
      poster: lungsImg,
      route: "/workouts/lungs",
    },
    {
      id: 10,
      title: "Bicep Curls",
      desc: "Bicep curls are a weightlifting exercise that target the biceps muscle. They increase mustle strength, and improve overall upper body aesthetics.",
      poster: bicepcurlsImg,
      route: "/workouts/bicepcurls",
    },
    {
      id: 11,
      title: "Pull Ups",
      desc: "Pull-ups are a challenging upper body exercise that targets back, arms, and shoulders. They build strength, grip, and upper body stability for overall development.",
      poster: pullupsImg,
      route: "/workouts/pullups",
    },
  ],
  exerciseData: {
    bicepcurls: {
      name: "Bicep Curls",
      modelAvailable: false,
      zRotationMul: 0,
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
      modelAvailable: true,
      zRotationMul: 0,
      scaleMul: 0.3,
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
      modelAvailable: false,
      zRotationMul: 0,
      scaleMul: 0.3,
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
      modelAvailable: true,
      zRotationMul: 0,
      scaleMul: 0.3,
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
      modelAvailable: false,
      zRotationMul: 0.33,
      scaleMul: 0.3,
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
    situps: {
      name: "Sit Ups",
      modelAvailable: false,
      zRotationMul: 0.33,
      scaleMul: 0.3,
      modelLink:
        "https://sketchfab.com/models/d39138e42be949b2b1f124a555f22239/embed?autostart=1&dnt=1",
      difficulty: "easy",
      refLink: "https://classpass.com/movements/sit-up",
      instructions: [
        "Lie on your back with your legs bent and feet planted on the floor.",
        "Place your hands behind your ears.",
        "While avoiding putting strain on your neck muscles, lift your upper body all the way up to a full sitting position.",
        "Exhale as you lift up. Slowly lower yourself back down and repeat.",
      ],
    },
    bicyclecrunches: {
      name: "Bicycle Crunches",
      modelAvailable: true,
      zRotationMul: 0.33,
      scaleMul: 0.4,
      modelLink:
        "https://sketchfab.com/models/c24d18ab0e194c629eb5df4ded145b15/embed?autostart=1&dnt=1",
      difficulty: "medium",
      refLink: "https://classpass.com/movements/bicycle",
      instructions: [
        "Start by lying on a mat with your lower back pressed firmly into the ground. Place both hands behind your head.",
        "Lift your legs off the mat at a 45-degree angle as you begin to lift your head and neck off the ground, keeping your abdominal muscles pulled in.",
        "Start to lift your upper body up and draw one of your knees in towards your body.",
        "At the same time, twist your head, neck and shoulders toward the leg that is drawing inwards, letting your elbow touch your knee.",
        "Twist to the other side, moving toward your opposite leg as it draws in towards you.",
      ],
    },
    plank: {
      name: "Plank",
      modelAvailable: true,
      zRotationMul: 0.33,
      scaleMul: 0.4,
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
    pikewalk: {
      name: "Pike Walk",
      modelAvailable: true,
      zRotationMul: 0.33,
      scaleMul: 0.4,
      modelLink:
        "https://sketchfab.com/models/78bb64dbb876415fa50f8544a2afa7d8/embed?autostart=1&dnt=1",
      difficulty: "medium",
      refLink: "https://www.exercise.com/exercises/pike-walk",
      instructions: [
        "Start standing straight up and with your feet about shoulder width apart.",
        "Bend over at the waist put your hands on the floor. Keep your legs straight.",
        "Begin walking your hands forward.",
        "Walk your hands out as far as you can and then back in to your feet. You do not need to stand back up every time.",
        "Repeat the above process",
      ],
    },
    burpees: {
      name: "Burpees",
      modelAvailable: true,
      zRotationMul: 0.33,
      scaleMul: 0.3,
      modelLink:
        "https://sketchfab.com/models/71af3ef8760f484ca8d81287f0dae74c/embed?autostart=1&dnt=1",
      difficulty: "medium",
      refLink: "https://classpass.com/movements/burpees",
      instructions: [
        "Stand with your feet shoulder-width apart and your hands at your sides.",
        "Bend your knees and reach your palms to the floor in front of you.",
        "Jump down into plank position on all fours, then lower your body down to a push-up position.",
        "Complete the push-up, returning your body to plank position.",
        "Jump your feet them forward, going back to the squatting position from earlier in the movement.",
        "Press up and jump, raising your arms above your head. Land softly and repeat the exercise.",
      ],
    },
    pushups: {
      name: "Push Ups",
      modelAvailable: true,
      zRotationMul: 0.33,
      scaleMul: 0.4,
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
