import Layout from "../containers/Layout";
import Services from "../components/Services/Services";
import FitnessFeatures from "../components/Features/FitnessFeatures";
import UserJourney from "../components/UserJourney/UserJourney";
import workoutData from "../data/WorkoutData";
import yogaData from "../data/YogaData";
import journeyData from "../data/JourneyList";

const FitnessTrainer = () => {
  return (
    <Layout>
      <FitnessFeatures />
      <UserJourney journeyData={journeyData} />
      <Services servicesData={workoutData} />
      <Services servicesData={yogaData} />
    </Layout>
  );
};

export default FitnessTrainer;
