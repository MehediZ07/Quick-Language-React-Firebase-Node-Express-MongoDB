// import Carousel from "../components/Carousel";

import Category from "../components/Category";
import HeroBanner from "../components/HeroBanner";
import OffersSection from "../components/OffersSection";
import QuestionAndAnser from "../components/QuestionAndAnser";
import State from "../components/State";

import Tutorial from "../components/Tutorial";
const Home = () => {
  return (
    <div className="mx-auto px-2">
      <HeroBanner></HeroBanner>
      <State />

      <Category />

      <Tutorial />
      <OffersSection />
      <QuestionAndAnser />
    </div>
  );
};

export default Home;
