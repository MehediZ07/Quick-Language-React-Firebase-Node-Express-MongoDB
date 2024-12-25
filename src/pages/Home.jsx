// import Carousel from "../components/Carousel";

import Category from "../components/Category";
import HeroBanner from "../components/HeroBanner";
import OffersSection from "../components/OffersSection";
import QuestionAndAnser from "../components/QuestionAndAnser";
import State from "../components/State";
// import TabCategories from "../components/TabCategories";
// import Test from "../components/Test";
import Tutorial from "../components/Tutorial";
const Home = () => {
  return (
    <div className="mx-auto">
      <HeroBanner></HeroBanner>
      <State />

      <Category />
      {/* <Test></Test> */}
      <Tutorial />
      <OffersSection />
      <QuestionAndAnser />
      {/* <TabCategories /> */}
    </div>
  );
};

export default Home;
