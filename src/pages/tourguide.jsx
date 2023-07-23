import Layout from "../containers/Layout";
import TourGuideFeatures from "../components/Features/TourGuideFeatures";
import tourGuideFeatures from "../data/TourGuideFeatureList";
import Services from "../components/Services/Services";
import UserJourney from "../components/UserJourney/UserJourney";
import tourGuideJourneyData from "../data/TourGuideJourneyList";

const TourGuide = () => {
  return (
    <Layout>
      <TourGuideFeatures />
      <UserJourney journeyData={tourGuideJourneyData} />
      <Services servicesData={tourGuideFeatures} />
    </Layout>
  );
};

export default TourGuide;
