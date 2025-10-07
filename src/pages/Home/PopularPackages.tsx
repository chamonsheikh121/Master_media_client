"use client";

import { FaRocket, FaWifi, FaGlobe } from "react-icons/fa";

const packages = [
  {
    title: "Home Plan",
    price: "$29.99/mo",
    features: ["Up to 100 Mbps", "Unlimited Data", "24/7 Support"],
    icon: <FaWifi size={32} className="text-blue-500" />,
  },
  {
    title: "Business Plan",
    price: "$79.99/mo",
    features: ["Up to 500 Mbps", "Dedicated IP", "Priority Support"],
    icon: <FaGlobe size={32} className="text-green-500" />,
  },
  {
    title: "Premium Plan",
    price: "$129.99/mo",
    features: ["Up to 1 Gbps", "Unlimited Devices", "VIP Support"],
    icon: <FaRocket size={32} className="text-purple-500" />,
  },
];

const PopularPackages = () => {
  return (
    <section className="py-16 px-4 md:px-16 shadow-md shadow-gray-400/30 rounded-md">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Popular Packages</h2>
        <p className="mt-2 ">Choose the best plan that suits your needs.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400 p-1 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center h-full">
              <div className="mb-4">{pkg.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
              <p className="text-2xl font-bold text-gray-800 mb-4">
                {pkg.price}
              </p>
              <ul className="text-gray-600 mb-4 space-y-1">
                {pkg.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <button className="mt-auto bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-10 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
       See all
      </button>
    </section>
  );
};

export default PopularPackages;
