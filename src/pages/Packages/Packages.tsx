"use client";

import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You need the CSS
import { useEffect } from "react";
const categories = ["All", "Basic", "Standard", "Premium"];

const packages = [
  {
    id: 1,
    name: "Basic Package",
    speed: "২৫ Mbps",
    price: "৫২৫৳",
    support: "২৪/৭ কাস্টমার সাপোর্ট",
    category: "Basic",
  },
  {
    id: 2,
    name: "Standard Package",
    speed: "৫০ Mbps",
    price: "১০৫০৳",
    support: "২৪/৭ কাস্টমার সাপোর্ট",
    category: "Standard",
  },
  {
    id: 3,
    name: "Premium Package",
    speed: "১০০ Mbps",
    price: "২০৫০৳",
    support: "২৪/৭ কাস্টমার সাপোর্ট",
    category: "Premium",
  },
  {
    id: 4,
    name: "Basic Plus",
    speed: "৩০ Mbps",
    price: "৬৫০৳",
    support: "২৪/৭ কাস্টমার সাপোর্ট",
    category: "Basic",
  },
  {
    id: 5,
    name: "Standard Plus",
    speed: "৭৫ Mbps",
    price: "১৫০০৳",
    support: "২৪/৭ কাস্টমার সাপোর্ট",
    category: "Standard",
  },
];

export default function OurPackagesPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredPackages =
    activeTab === "All"
      ? packages
      : packages.filter((pkg) => pkg.category === activeTab);
  useEffect(() => {
    AOS.init({
      duration: 5000, // animation duration in ms
      easing: "ease-in-out", // easing function
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <div className="w-[90%] max-w-6xl mx-auto py-16">
      <h1 data-aos="fade-up"  className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
        আমাদের প্যাকেজসমূহ
      </h1>
      <p data-aos="fade-up"  className="text-center text-gray-600 dark:text-gray-300 mb-10">
        আপনার প্রয়োজন অনুযায়ী প্যাকেজ বেছে নিন এবং যোগাযোগ করুন
      </p>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
          data-aos="fade-up" 
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-2 cursor-pointer rounded-full font-medium transition ${
              activeTab === cat
                ? "bg-green-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPackages.map((pkg) => (
          <div
          data-aos="fade-up" 
            key={pkg.id}
            className="p-6 rounded-xl shadow-lg bg-gradient-to-br from-green-100 via-green-200 to-green-300 dark:from-green-700 dark:via-green-800 dark:to-green-900 hover:scale-105 transition-transform"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800 dark:text-white">
              {pkg.name}
            </h2>
            <div className="mb-4 grid grid-cols-2 gap-x-4 gap-y-2 text-gray-700 dark:text-gray-300">
              <span className="font-medium">স্পিড:</span>
              <span>{pkg.speed}</span>

              <span className="font-medium">মূল্য:</span>
              <span>{pkg.price}</span>

              <span className="font-medium">সাপোর্ট:</span>
              <span>{pkg.support}</span>
            </div>

            <a
              href="tel:+880130934230"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded transition"
            >
              প্যাকেজটি নিতে কল করুন
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
