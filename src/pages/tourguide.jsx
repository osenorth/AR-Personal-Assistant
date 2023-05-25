import Layout from "../containers/Layout";
import TourGuideFeatures from "../components/Features/TourGuideFeatures";
import tourGuideFeatures from "../data/TourGuideFeatureList";
import Services from "../components/Services/Services";
const TourGuide = () => {
  return (
    <Layout>
      <TourGuideFeatures />
      <Services servicesData={tourGuideFeatures} />
    </Layout>
  );
};

export default TourGuide;
