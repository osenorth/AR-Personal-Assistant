import yoga1Img from "../assets/yoga1.jpg";
import yoga2Img from "../assets/yoga2.jpg";
import yoga3Img from "../assets/yoga3.jpg";
import yoga4Img from "../assets/yoga4.jpg";
import yoga5Img from "../assets/yoga5.jpg";
import yoga6Img from "../assets/yoga6.jpg";
import yoga7Img from "../assets/yoga7.jpg";

const yogaData = {
  title: "Yoga",
  description:
    "Our yoga program combines the power of AR and AI technology with a range of traditional yoga poses, providing a personalized and immersive experience. With our virtual yoga instructor, you can perfect your form, track your progress, and deepen your practice with real-time feedback. ",
  exploreText: "Let's Do It",
  servicesList: [
    {
      id: 1,
      title: "Vrikshasana",
      desc: "Vrikshasana, helps you connect with nature and find balance. This yoga asana strengthens your legs, opens your hips, and enhances focus and endurance.",
      poster: yoga1Img,
      route: "/yoga/vrikshasana",
    },
    {
      id: 2,
      title: "Utkatasana",
      desc: "Utkatasana, is a powerful standing posture that strengthens the legs, hips, and back. It promotes stability, concentration, and improved posture.      ",
      poster: yoga2Img,
      route: "/yoga/utkatasana",
    },
    {
      id: 3,
      title: "Bhujangasana",
      desc: "Bhujangasana or Cobra Pose, stretches the spine, opens the chest, and strengthens the arms and shoulders. It improves flexibility and relieves stress.",
      poster: yoga3Img,
      route: "/yoga/bhujangasana",
    },
    {
      id: 4,
      title: "Adho Mukha Svanasana",
      desc: "Adho Mukha Svanasana, is a yoga asana that strengthens the arms, legs, and back, while stretching the hamstrings and calves. It energizes the body and calms the mind.",
      poster: yoga4Img,
      route: "/yoga/adhomukhasvanasana",
    },
    {
      id: 5,
      title: "Trikonasana",
      desc: "Trikonasana, is a yoga posture that stretches and strengthens the legs, hips, and spine. It improves balance, digestion, and mental focus.",
      poster: yoga5Img,
      route: "/yoga/trikonasana",
    },
    {
      id: 6,
      title: "Virabhadrasana III",
      desc: "Virabhadrasana, is a yoga asana that strengthens the legs, opens the hips, and improves balance. It promotes focus, endurance, and a sense of empowerment.",
      poster: yoga6Img,
      route: "/yoga/virabhadrasana3",
    },
    {
      id: 7,
      title: "Sarvangasana",
      desc: "Sarvangasana, is a yoga asana that improves circulation, balances hormones, and calms the mind. It stimulates the thyroid gland and helps in weight management.",
      poster: yoga7Img,
      route: "/yoga/sarvangasana",
    },
  ],
  poseData: {
    Tree: {
      name: "Vrikshasana",
      modelLink:
        "https://sketchfab.com/models/02d5ac37825241eab18178c7c386f9e7/embed?autostart=1&dnt=1",
      difficulty: "easy",
      refLink: "https://classpass.com/movements/tree-pose",
      instructions: [
        "Start by standing straight with a long, tall back and your feet aligned and touching. Your arms should be straight along either side of your body.",
        "Take a few breaths and find a place or object in the room to focus your attention. Slowly shift your weight to your left leg and begin to raise your right foot off the floor. Align the sole of your right foot with the inside of your left thigh. The toes should be pointing down and your pelvis should be completely straight.",
        "Stretch your arms straight up toward the ceiling with palms pressed together forming an inverted V.",
        "Hold and repeat. Hold the pose for as long as necessary, making sure to breathe properly. When you’re ready to switch legs, exhale, and return to the pose to start again.",
      ],
    },
    Chair: {
      name: "Utkatasana",
      modelLink:
        "https://sketchfab.com/models/a3079780afd24ac7838dc7b1bc571ec0/embed?autostart=1&dnt=1",
      difficulty: "easy",
      refLink: "https://classpass.com/movements/chair-pose",
      instructions: [
        "Stand straight and tall with your feet slightly wider than hip­-width apart and your arms at your sides.",
        "Inhale and lift your arms next to your ears, stretching them straight and parallel with wrists and fingers long. Keep your shoulders down and spine neutral.",
        "Exhale as you bend your knees, keeping your thighs and knees parallel. Lean your torso forward to create a right angle with the tops of your thighs. Keep your neck and head in line with your torso and arms. Hold for 30 seconds to 1 minute.",
      ],
    },
    Cobra: {
      name: "Bhujangasana",
      modelLink:
        "https://sketchfab.com/models/88c5e04dda4d414e888bbce9caf8c505/embed?autostart=1&dnt=1",
      difficulty: "easy",
      refLink: "https://www.yogajournal.com/poses/cobra-pose-2",
      instructions: [
        "Begin on your belly with your feet hip-distance apart and your hands beside your ribs.Extend your big toes straight back and press down with all ten toenails to activate your quadriceps.",
        "Rotate your inner thighs toward the ceiling to broaden the lower back.Pressing down lightly with your hands, start to lift your head and chest, rolling your shoulders back and down.",
        "Keep the back of your neck long and focus on lifting your sternum instead of lifting your chin.Straighten your arms while keeping your shoulders remaining away from your ears. Keep at least a slight bend in your elbows.",
        "To exit the pose, release back to your mat.",
      ],
    },
    Dog: {
      name: "Adho mukha svanasana",
      modelLink:
        "https://sketchfab.com/models/ae76cb29b8b84c4299d158cf76977c58/embed?autostart=1&dnt=1",
      difficulty: "medium",
      refLink: "https://classpass.com/movements/downward-dog",
      instructions: [
        "Spread your hands wide on the mat with your arms internally rotated. Position your feet hip-width apart.",
        "With your chin tucked into your chest and pelvic floor engaged, lift your hips and gaze at your toes through your legs. ",
        'Keep your legs straight and your heels on the mat. Your body should look like an upside-down "V".',
        "Stay in the pose for 10 or more breaths, then bend your knees on an exhalation and lower yourself.",
      ],
    },
    Traingle: {
      name: "Trikonasana",
      modelLink:
        "https://sketchfab.com/models/d918634a622a48518766575ebbc21cec/embed?autostart=1&dnt=1",
      difficulty: "medium",
      refLink: "https://classpass.com/movements/triangle-pose",
      instructions: [
        "Begin standing, then lightly jump your feet apart to a wide position about three to four feet apart. Turn your left foot out and turn to face that direction. Take a slight bend in your left leg and raise your arms out on your sides, forming a “T” shape.",
        "Straighten through your left leg, then hinge and reach your torso over your left leg as your hips jut back. Rotate your left palm so it faces the ceiling, and gaze out over your left arm.",
        "Maintain a long, straight spine as you reach your left hand to the mat, placing it in front of your left foot. If you feel off balance, bring in your back leg closer to shorten your stance. Gaze towards your right arm, which should be extended overhead. Hold and repeat on the other side.",
      ],
    },
    Warrior: {
      name: "Virabhadrasana III",
      modelLink:
        "https://sketchfab.com/models/f8c43ce3f94348c388d6812b35a4d535/embed?autostart=1&dnt=1",
      difficulty: "hard",
      refLink: "https://www.verywellfit.com/warrior-iii-yoga-pose-3567137",
      instructions: [
        "Begin in lunge with your front knee bent, your back leg straight and your back heel lifted. Your hips and chest should be squared to front of the mat. Raise your arms above your head.",
        "Move your hands to your heart, with palms pressed against each other in a prayer position. Lean forward until your back leg extends straight back, even with your hips. Keep your foot flexed and your gaze downward.",
        "Make sure your standing leg is strong and straight, but not locked at knee. Reach your arms forward so your body forms a “T” shape.",
      ],
    },
    Shoulderstand: {
      name: "Sarvangasana",
      modelLink:
        "https://sketchfab.com/models/bda2c1276d824f2683eb50889b708c98/embed?autostart=1&dnt=1",
      difficulty: "hard",
      refLink:
        "https://www.verywellfit.com/shoulderstand-salamba-sarvangasana-3567115",
      instructions: [
        "Start with a stack of two folded blankets. Lay down on your mat aligning shoulders onto the blankets. With legs bent and feet on the floor (as if setting up for bridge pose) begin to walk your shoulders underneath your upper back feeling the chest gently rising.",
        "Lift your hips off of the mat coming into bridge pose and extend your arms onto the ground, palms facing down as if your hands could touch your heels. Press firmly into the palms using them as leverage to lift onto the balls of the feet and extend one leg up. Bend at the elbows, place your hands on your low back creating a shelf, and then extend the next leg up.",
        "Once you raise the legs, don't turn your head to the side to look around the room, since you can injure your neck. Keep your gaze upward and your neck straight.",
        "Lift up through the balls of your feet. Walk your hands further up the back for more stability. Feel the chest reaching towards the chin to support opening the upper back.",
        "Move your hips toward the front of the room and your feet toward the back of the room to straighten the body. The correct alignment is with the hips over the shoulders and feet over the hips. Ask your teacher or a friend to help you determine if your legs are perpendicular to the floor.",
        "Stay in the pose for up to 10 breaths",
      ],
    },
  },
};

export default yogaData;
