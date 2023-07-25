import Layout from "../containers/Layout";
import Services from "../components/Services/Services";
import SpotifyMusic from "./use-cases/music/music";
import MusicFeatures from "../components/Features/MusicFeatures";
import UserJourney from "../components/UserJourney/UserJourney";
import musicData from "../data/MusicList";
import musicGenreData from "../data/MusicGenreData";
import yogaData from "../data/YogaData";



const Music = () => {
  return (
    <Layout>
      <SpotifyMusic />
      <MusicFeatures />
      <UserJourney journeyData={musicData} />
      <Services servicesData={musicGenreData} />
    </Layout>
  );
};

export default Music;
