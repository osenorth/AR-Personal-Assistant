import Layout from "../containers/Layout";
import Hero from "../components/Hero/Hero";
import HomeFeatures from "../components/Features/HomeFeatures";
import Services from "../components/Services/Services";
import Stats from "../components/Stats/Stats";
import Testimonials from "../components/Testimonials/Testimonials";
import Team from "../components/Team/Team";
import FAQ from "../components/FAQ/FAQ";
import servicesData from "../data/ServicesData";

const Landing = () => {
  return (
    <Layout footerWithContact>
      <Hero />
      <HomeFeatures />
      <Services servicesData={servicesData} />
      <Stats />
      <Testimonials />
      <FAQ />
      <Team />
    </Layout>
  );
};

export default Landing;
