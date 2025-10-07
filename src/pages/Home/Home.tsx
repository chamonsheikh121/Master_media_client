import Banner from "./Banner";
import HowToPay from "./HowToPay";
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
    </div>
  );
};

export default Home;
