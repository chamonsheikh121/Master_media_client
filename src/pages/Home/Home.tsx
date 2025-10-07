import Banner from "./Banner";
import PopularPackages from "./PopularPackages";
import Services from "./Services";
import WhyChoose from "./WhyChoose";


const Home = () => {
  return (
    <div className="space-y-32">
     <Banner/>
     <Services/>
     <PopularPackages/>
     <WhyChoose/>
    </div>
  );
};

export default Home;
