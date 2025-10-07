"use client";

import { FaHome, FaBuilding, FaVideo } from "react-icons/fa";

const services = [
  {
    title: "Home Internet",
    description: "Elevate your home experience with high-speed internet at your fingertips.",
    icon: <FaHome size={36} className="text-blue-500" />,
  },
  {
    title: "Corporate Internet",
    description:
      "Boost your business efficiency with our Corporate Internet: fast, secure, and reliable connectivity solutions.",
    icon: <FaBuilding size={36} className="text-green-500" />,
  },
  {
    title: "CCTV Solutions",
    description:
      "Securing peace of mind with our advanced CCTV solutions for comprehensive and reliable surveillance.",
    icon: <FaVideo size={36} className="text-red-500" />,
  },
];

const Services = () => {
  return (
    <section className="py-32 px-4 md:px-16 shadow-md shadow-gray-400/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
        <p className="mt-2">
          Discover our range of services to enhance your home and business.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-4 border-2 p-2 rounded-full bg-gray-700">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
