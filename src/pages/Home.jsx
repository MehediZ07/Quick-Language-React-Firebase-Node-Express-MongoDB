// import Carousel from "../components/Carousel";

import Category from "../components/Category";
import HeroBanner from "../components/HeroBanner";
// import TabCategories from "../components/TabCategories";
import Test from "../components/Test";
import Tutorial from "../components/Tutorial";
const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Category />
      <Test></Test>
      <Tutorial />
      {/* <TabCategories /> */}
    </div>
  );
};

export default Home;
