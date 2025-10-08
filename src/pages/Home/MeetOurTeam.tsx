
import { Link } from "react-router-dom";
import im1 from '../../assets/team/1.-Tofazzal-Hossain.webp'
import img2 from '../../assets/team/2.-Imran-Chowdhury.webp'
import img3 from '../../assets/team/3.-Hussain-Mohammad-Tarek.webp'
import img4 from '../../assets/team/4.-Md.-Razibul-Haque-Chowdhury.webp'
import AOS from "aos";
import "aos/dist/aos.css"; // You need the CSS
import { useEffect } from "react";

export default function MeetOurTeam() {
  const team = [
    {
      name: "Tofazzal Hossain",
      image:im1,
    },
    {
      name: "Imran Chowdhury",
      image:img2,
    },
    {
      name: "Hussain Mohammad Tarek",
      image:img3,
    },
  ];

useEffect(() => {
    AOS.init({
      duration: 5000, // animation duration in ms
      easing: "ease-in-out", // easing function
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <section className=" mx-auto pt-32 pb-10">
      {/* Heading */}
      <h2 data-aos="fade-up" className="text-2xl md:text-3xl font-bold text-center mb-20 text-gray-800 dark:text-white">
        আমাদের টিমের সদস্যদের সাথে পরিচিত হোন
      </h2>

      {/* Grid layout */}
      <div className=" grid py-20 shadow-md grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {/* 🔹 Show team cards on lg & md */}
        {team.map((member, index) => (
          <div
       data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
            key={index}
            className="hidden shadow-xl relative h-72 md:flex flex-col items-center hover:shadow-2xl rounded-2xl  transition-all duration-300 border border-gray-100 dark:border-gray-700 w-full "
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full rounded-md object-cover border-2 border-gray-200 dark:border-gray-600"
            />
            <h3 className="text-lg bg-green-600 px-3 rounded-r-xl text-white absolute bottom-0 left-0 font-semibold  dark:text-white text-center">
              {member.name}
            </h3>
          </div>
        ))}

        {/* 🔹 "View All" button card */}
        <Link
        onClick={()=>window.location.href = "/about-us"}
          to="/about-us"
          className="flex h-full relative flex-col items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-2xl shadow-inner hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 border border-gray-300 dark:border-gray-600 w-full max-w-[260px]"
        >
          <img
            src={img4}
            alt="View all"
            className="h-full w-full  opacity-80"
          />
          <span className=" absolute bg-green-700 px-4 py-1 text-white font-medium rounded-xl ">
            View All
          </span>
        </Link>
      </div>
    </section>
  );
}
