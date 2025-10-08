"use client";

import { FaHome, FaBuilding, FaVideo } from "react-icons/fa";import AOS from "aos";
import "aos/dist/aos.css"; // You need the CSS
import { useEffect } from "react";

const services = [
  {
    title: "হোম ইন্টারনেট",
    description: "আপনার বাড়ির অভিজ্ঞতাকে উন্নত করুন উচ্চ-গতির ইন্টারনেটের মাধ্যমে।",
    icon: <FaHome size={36} className="text-green-600" />,
  },
  {
    title: "কর্পোরেট ইন্টারনেট",
    description:
      "আমাদের কর্পোরেট ইন্টারনেট ব্যবহার করে আপনার ব্যবসার কার্যক্ষমতা বৃদ্ধি করুন: দ্রুত, নিরাপদ এবং নির্ভরযোগ্য সংযোগ।",
    icon: <FaBuilding size={36} className="text-green-600" />,
  },
  {
    title: "সিসিটিভি সমাধান",
    description:
      "আমাদের উন্নত সিসিটিভি সমাধানের মাধ্যমে নিরাপত্তা নিশ্চিত করুন এবং নির্ভরযোগ্য নজরদারি উপভোগ করুন।",
    icon: <FaVideo size={36} className="text-green-600" />,
  },
];

const Services = () => {

   useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-in-out", // easing function
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <section className="py-32 px-4 md:px-16 shadow-md shadow-gray-400/30">
      <div data-aos="fade-up" className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          আমাদের সেবা সমূহ
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          আপনার বাড়ি ও ব্যবসা উন্নত করার জন্য আমাদের সেবা সমূহ দেখুন।
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div
          data-aos="fade-up"
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-4 border-2 p-2 rounded-full bg-gray-100 dark:bg-gray-700">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
