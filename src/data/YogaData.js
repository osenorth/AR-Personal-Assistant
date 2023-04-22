import yoga1Img from "../assets/yoga1.jpg";
import yoga2Img from "../assets/yoga2.jpg";
import yoga3Img from "../assets/yoga3.jpg";

const yogaData = {
  title: "Yoga",
  description:
    "Our yoga program combines the power of AR and AI technology with a range of traditional yoga poses, providing a personalized and immersive experience. With our virtual yoga instructor, you can perfect your form, track your progress, and deepen your practice with real-time feedback. ",
  exploreText: "Let's Do It",
  servicesList: [
    {
      id: 1,
      title: "Virabhadrasana",
      desc: "Virabhadrasana, is a yoga asana that strengthens the legs, opens the hips, and improves balance. It promotes focus, endurance, and a sense of empowerment.",
      poster: yoga1Img,
      route: "/yoga/virabhadrasana",
    },
    {
      id: 2,
      title: "Trikonasana",
      desc: "Trikonasana, is a yoga posture that stretches and strengthens the legs, hips, and spine. It improves balance, digestion, and mental focus.",
      poster: yoga2Img,
      route: "/yoga/trikonasana",
    },
    {
      id: 3,
      title: "Adho Mukha Svanasana",
      desc: "Adho Mukha Svanasana, is a yoga asana that strengthens the arms, legs, and back, while stretching the hamstrings and calves. It energizes the body and calms the mind.",
      poster: yoga3Img,
      route: "/yoga/adhomukhasvanasana",
    },
  ],
};

export default yogaData;
