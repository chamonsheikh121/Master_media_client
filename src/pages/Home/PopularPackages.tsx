"use client";

import { FaWifi, FaGlobe, FaRocket } from "react-icons/fa";

const packages = [
  {
    title: "Basic Package",
    price: "৫২৫৳",
    features: ["স্পিড: ২৫ Mbps", "সীমাহীন ডেটা", "২৪/৭ কাস্টমার সাপোর্ট"],
    icon: <FaWifi size={32} className="text-blue-500" />,
  },
  {
    title: "Standard Package",
    price: "১০৫০৳",
    features: ["স্পিড: ৫০ Mbps", "ডেডিকেটেড IP", "প্রায়োরিটি সাপোর্ট"],
    icon: <FaGlobe size={32} className="text-green-500" />,
  },
  {
    title: "Premium Package",
    price: "২০৫০৳",
    features: ["স্পিড: ১০০ Mbps", "সীমাহীন ডিভাইস", "VIP সাপোর্ট"],
    icon: <FaRocket size={32} className="text-purple-500" />,
  },
];

const PopularPackages = () => {
  return (
    <section className="py-16 px-4 md:px-16 shadow-md shadow-gray-400/30 rounded-md">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          জনপ্রিয় প্যাকেজসমূহ
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          আপনার প্রয়োজন অনুযায়ী সর্বোত্তম প্যাকেজ বেছে নিন।
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400 p-1 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl p-6 flex flex-col items-center text-center h-full">
              <div className="mb-4 dark:text-white ">{pkg.icon}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{pkg.title}</h3>
              <p className="text-2xl font-bold text-gray-800 mb-4">
                {pkg.price}/<span className="text-sm align-super ml-1">মাস</span>
              </p>
              <ul className="text-gray-600 mb-4 space-y-1">
                {pkg.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <a
                href="tel:+880130934230"
                className="mt-auto bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-300 inline-block"
              >
                প্যাকেজটি নিতে কল করুন
              </a>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 cursor-pointer transition-colors duration-300">
        আরও দেখুন
      </button>
    </section>
  );
};

export default PopularPackages;
