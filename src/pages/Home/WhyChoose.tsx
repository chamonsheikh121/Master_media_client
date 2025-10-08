"use client";

import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // You need the CSS
import { useEffect } from "react";
const features = [
  "দ্রুততম ইন্টারনেট স্পিড",
  "নির্ভরযোগ্য ও সুরক্ষিত",
  "অভিজ্ঞ টিম",
  "২৪/৭ কাস্টমার সাপোর্ট",
  "সাশ্রয়ী প্যাকেজসমূহ",
  "বিস্তৃত কভারেজ এলাকা",
  "সহজ ইন্সটলেশন",
  "লচিল প্ল্যানসমূহ",
  "উচ্চমানের সরঞ্জাম",
  "সিমলেস স্ট্রিমিং ও গেমিং",
  "নিয়মিত কাস্টমার কেয়ার",
];


const WhyChoose = () => {
  useEffect(() => {
    AOS.init({
      duration: 5000, // animation duration in ms
      easing: "ease-in-out", // easing function
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <section  className="py-16 px-4 md:px-16">
      <div data-aos="fade-up"  className="text-center mb-12">
        <h2  className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          কেন মাস্টার মিডিয়া বেছে নেবেন?
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          সর্বোত্তম ইন্টারনেট সেবা উপভোগ করুন দ্রুততা, নির্ভরযোগ্যতা এবং বিশ্বাসযোগ্য সহায়তার সঙ্গে।
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
          data-aos="zoom-in" 
            key={index}
            className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md shadow-gray-400/30 hover:shadow-lg transition-shadow duration-300"
          >
            <FaCheckCircle className="text-green-500 mt-1 mr-4 flex-shrink-0" size={24} />
            <p className="text-gray-800 dark:text-gray-100 font-medium">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
