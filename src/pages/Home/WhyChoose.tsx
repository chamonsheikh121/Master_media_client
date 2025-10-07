"use client";

import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Fastest Internet Speeds",
  "Reliable & Secure",
  "Experienced Team",
  "24/7 Customer Support",
  "Affordable Packages",
  "Wide Coverage Area",
  "Easy Installation",
  "Flexible Plans",
  "High-Quality Equipment",
  "Seamless Streaming & Gaming",
  "Dedicated Customer Care",
];

const WhyChoose = () => {
  return (
    <section className="py-16 px-4 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Why Choose Master Media?
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Experience the best internet services with speed, reliability, and support you can trust.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
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
