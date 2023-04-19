import Layout from "../containers/Layout";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Services from "../components/Services/Services";
import Stats from "../components/Stats/Stats";
import Testimonials from "../components/Testimonials/Testimonials";
import Team from "../components/Team/Team";
import FAQ from "../components/FAQ/FAQ";

const Landing = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Services />
      <Stats />
      <Testimonials />
      <FAQ />
      <Team />
    </Layout>
  );
};

export default Landing;
