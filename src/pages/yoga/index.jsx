import Layout from "../../containers/Layout";
import Services from "../../components/Services/Services";
import yogaData from "../../data/YogaData";

const Yoga = () => {
  return (
    <Layout>
      <Services servicesData={yogaData} />
    </Layout>
  );
};

export default Yoga;
