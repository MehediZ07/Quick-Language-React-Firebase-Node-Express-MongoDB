// import Carousel from "../components/Carousel";

import Category from "../components/Category";
import HeroBanner from "../components/HeroBanner";
import OffersSection from "../components/OffersSection";
import QuestionAndAnser from "../components/QuestionAndAnser";
import State from "../components/State";

import Tutorial from "../components/Tutorial";
const Home = () => {
  return (
    <div className="mx-auto ">
      <HeroBanner></HeroBanner>
      <div className="px-2">
        <State />

        <Category />

        <Tutorial />
        <OffersSection />
        <QuestionAndAnser />
      </div>
    </div>
  );
};

export default Home;
