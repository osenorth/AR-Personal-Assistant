import Layout from "../../containers/Layout";
import Services from "../../components/Services/Services";
import workoutData from "../../data/WorkoutData";

const Workout = () => {
  return (
    <Layout>
      <Services servicesData={workoutData} />
    </Layout>
  );
};

export default Workout;
