
import { useEffect } from 'react';
import img1 from '../../assets/team/1.-Tofazzal-Hossain.webp';
import img2 from '../../assets/team/2.-Imran-Chowdhury.webp';
import img3 from '../../assets/team/3.-Hussain-Mohammad-Tarek.webp';
import img4 from '../../assets/team/4.-Md.-Razibul-Haque-Chowdhury.webp';
import img5 from '../../assets/team/5.-Nazmus-Samir-Turin.webp';
import img6 from '../../assets/team/6.-Raihan-Chowdhury.webp';
import img7 from '../../assets/team/7.-Moddasir-Ahmed.webp';
import img8 from '../../assets/team/8.-Pavel-Hossain.webp';

const team = [
  {
    name: "Tofazzal Hossain",
    image: img1,
  },
  {
    name: "Imran Chowdhury",
    image: img2,
  },
  {
    name: "Hussain Mohammad Tarek",
    image: img3,
  },
  {
    name: "Md. Razibul Haque Chowdhury",
    image: img4,
  },
  {
    name: "Nazmus Samir Turin",
    image: img5,
  },
  {
    name: "Raihan Chowdhury",
    image: img6,
  },
  {
    name: "Moddasir Ahmed",
    image: img7,
  },
  {
    name: "Pavel Hossain",
    image: img8,
  },
];

export default function AboutUs() {


  return (
    <div className="w-[90%] max-w-5xl mx-auto py-16">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        আমাদের সম্পর্কে
      </h1>

      {/* Intro paragraph */}
      <section className="mb-10 text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
        <p>
          মাস্টার মিডিয়া একটি উদীয়মান ও নির্ভরযোগ্য ইন্টারনেট সার্ভিস প্রোভাইডার (ISP), যার যাত্রা শুরু হয় ২০২৩ সালে ব্রাহ্মণবাড়িয়া জেলার সরাইল থানার শাহবাজপুর গ্রামে। স্বল্প সময়ে গ্রাহকদের আস্থা ও ভালোবাসা অর্জনের মাধ্যমে মাস্টার মিডিয়া এখন শাহবাজপুর ছাড়াও আশপাশের এলাকায়—বিশেষ করে দেওড়া গ্রামেও—উচ্চমানের ইন্টারনেট সেবা পৌঁছে দিচ্ছে।
        </p>
        <p>
          আমাদের লক্ষ্য হলো গ্রামীণ অঞ্চলের মানুষদের জন্য দ্রুতগতি সম্পন্ন, স্থিতিশীল এবং সাশ্রয়ী ইন্টারনেট সেবা নিশ্চিত করা। প্রযুক্তিনির্ভর এই যুগে শিক্ষা, ব্যবসা ও যোগাযোগে পিছিয়ে না পড়ার জন্য আমরা নিরলসভাবে কাজ করে যাচ্ছি। মাস্টার মিডিয়া বিশ্বাস করে—উন্নত ও সংযুক্ত একটি সমাজ গড়তে হলে, প্রথমেই দরকার একটি শক্তিশালী ইন্টারনেট অবকাঠামো।
        </p>
        <p>
          শুধু ইন্টারনেট সংযোগ নয়, মাস্টার মিডিয়া একটি কমিউনিটি গড়ার লক্ষ্য নিয়ে কাজ করছে—যেখানে সবাই থাকবে সংযুক্ত, তথ্যপ্রবাহ থাকবে উন্মুক্ত, আর প্রযুক্তি হবে সবার নাগালে। আপনার আস্থা আমাদের অনুপ্রেরণা। আমরা আছি আপনার পাশে—আপনার সংযোগ, আপনার গর্ব।
        </p>
      </section>

      {/* Mission */}
      <section className="mb-10 bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
          🎯 আমাদের মিশন
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          “প্রতিটি ঘরে দ্রুতগতি, নিরবিচ্ছিন্ন এবং সাশ্রয়ী ইন্টারনেট পৌঁছে দেওয়া, যেন গ্রামের প্রতিটি অঞ্চল প্রযুক্তির সুবিধায় এগিয়ে যেতে পারে।”
        </p>
      </section>

      {/* Vision */}
      <section className="mb-10 bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
          🌟 আমাদের ভিশন
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          “গ্রাম থেকে গ্রামাঞ্চলের প্রতিটি প্রান্তে প্রযুক্তি-নির্ভর একটি সংযুক্ত সমাজ গড়ে তোলা, যেখানে ইন্টারনেট থাকবে সবার নাগালে।”
        </p>
      </section>
       <section className=" mx-auto py-32">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-20 text-gray-800 dark:text-white">
        আমাদের টিমের সদস্যদের সাথে পরিচিত হোন
      </h2>

      {/* Grid layout */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {/* 🔹 Show team cards on lg & md */}
        {team.map((member, index) => (
          <div
            key={index}
            className=" p-4 shadow-md hover:shadow-2xl  md:flex flex-col items-center  rounded-2xl  transition-all duration-300 border border-gray-100 dark:border-gray-700 w-full "
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full  rounded-md object-cover border-2 border-gray-200 dark:border-gray-600"
            />
            <h3 className="text-lg px-3 rounded-r-xl  font-semibold  dark:text-white text-center">
              {member.name}
            </h3>
          </div>
        ))}

      </div>
    </section>

    </div>
  );
}
