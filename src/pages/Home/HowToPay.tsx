"use client";
import { toast } from "sonner";
import AOS from "aos";
import "aos/dist/aos.css"; // You need the CSS
import { useEffect } from "react";

import img1 from "../../assets/payments/b1.jpg";
import img2 from "../../assets/payments/b2.jpg";
import img3 from "../../assets/payments/b3.jpg";
import img4 from "../../assets/payments/b4.jpg";
import img5 from "../../assets/payments/b5.jpg";
import { Button } from "@/components/ui/button";
const HowToPay = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("01745981072");
    toast("Coppied");
  };

  const paymentSteps = [
    {
      id: 1,
      title: " 'Make Payment' অপশনটি সিলেক্ট করুন",
      description:
        "প্রথমে বিকাশ অ্যাপে লগইন করে 'Make Payment' অপশনটি নির্বাচন করুন।",
      imgSrc: img1,
    },
    {
      id: 2,
      title: " আমাদের বিকাশ নম্বরটি দিন",
      description: (
        <>
          "বিকাশ নাম্বার{" "}
          <span>
            <b>01745981072</b>
          </span>{" "}
          লিখে 'Confirm Payment' বাটনে ট্যাপ করুন।"
          <span>
            <Button onClick={handleCopy} className="mt-2 cursor-pointer">
              Copy
            </Button>
          </span>
        </>
      ),
      imgSrc: img2,
    },
    {
      id: 3,
      title: " নাম যাচাই ও পরিমাণ দিন",
      description: (
        <>
          "নিশ্চিত করুন নামটি <b>MASTER MEDIA</b> দেখাচ্ছে। এরপর আপনার বিলের
          পরিমাণ লিখে 'Proceed' বাটনে ট্যাপ করুন।"
        </>
      ),
      imgSrc: img3,
    },
    {
      id: 4,
      title: " আপনার সাবস্ক্রাইবার আইডি দিন",
      description:
        "‘Reference’ বক্সে আপনার ইউজার আইডি লিখুন, যাতে আমরা সহজে আপনার পেমেন্ট শনাক্ত করতে পারি।",
      imgSrc: img4,
    },
    {
      id: 5,
      title: " পেমেন্ট সম্পন্ন করুন",
      description:
        "'Tap and hold to Make Payment' বাটনে চাপ দিয়ে রাখুন যতক্ষণ না পেমেন্ট সফল হয়।",
      imgSrc: img5,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-in-out", // easing function
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <section className="py-16 px-4 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          কীভাবে আপনার ওয়াই-ফাই বিল পরিশোধ করবেন
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          নিচের সহজ করে দ্রুত ও নিরাপদে আপনার বিল পরিশোধ করুন।
        </p>
      </div>

      <div className="grid  gap-8 md:grid-cols-2 lg:grid-cols-3">
        {paymentSteps.map((step, index) => (
          <div
            data-aos="flip-left"
            key={index}
            className="relative flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md shadow-gray-400/30 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={step.imgSrc}
              alt={step.title}
              className="border shadow-xl rounded-md object-contain mb-4"
            />
            <h3 className=" font-semibold text-gray-900 dark:text-white mb-2">
              {step.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              {step.description}
            </p>
            <span className="absolute top-0 right-0 bg-green-700 rounded-full p-5 flex justify-center items-center text-white w-10 h-10">
              {index + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToPay;
