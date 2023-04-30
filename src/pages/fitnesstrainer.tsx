import Layout from "../containers/Layout";
import Services from "../components/Services/Services";
import FitnessFeatures from "../components/Features/FitnessFeatures";
import workoutData from "../data/WorkoutData";
import yogaData from "../data/YogaData";

const FitnessTrainer = () => {
  return (
    <Layout>
      <FitnessFeatures />
      <Services servicesData={workoutData} />
      <Services servicesData={yogaData} />
    </Layout>
  );
};

export default FitnessTrainer;
