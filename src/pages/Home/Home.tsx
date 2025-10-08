import Banner from "./Banner";
import Footer from "./Footer";
import HowToPay from "./HowToPay";
import MeetOurTeam from "./MeetOurTeam";
import PopularPackages from "./PopularPackages";
import Services from "./Services";
import TestimonialSlider from "./TestimonialSlider";
import WhyChoose from "./WhyChoose";


const Home = () => {
  return (
    <div className="space-y-32">
     <Banner/>
     <Services/>
     <PopularPackages/>
     <WhyChoose/>
     <HowToPay/>
     <TestimonialSlider/>
     <MeetOurTeam/>
     {/* <Footer/> */}
    </div>
  );
};

export default Home;
