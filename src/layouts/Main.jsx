import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "react-scroll-to-top";
const Main = () => {
  const scrollToTopStyle = {
    background: "linear-gradient(to bottom, #00e0a1, #00b0e0, #0088cc)",
  };
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Outlet */}
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
      <ScrollToTop
        smooth
        style={scrollToTopStyle}
        className={` rounded-xl w-12 h-12 flex justify-center items-center`}
      />
    </div>
  );
};

export default Main;