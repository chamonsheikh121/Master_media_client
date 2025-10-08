"use client";

import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  description: string;
};

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("ফর্ম ডেটা:", data);
    alert("ফর্ম সাবমিট হয়েছে! কনসোল চেক করুন।");
    reset();
  };

  return (
    <div className="w-[90%] max-w-4xl mx-auto py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        যোগাযোগ ফর্ম
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8 text-base md:text-lg">
        যেকোনো প্রশ্ন, পরামর্শ বা সেবা সম্পর্কিত তথ্য জানতে আমাদের সাথে সহজেই
        যোগাযোগ করুন। আমরা আপনার বার্তার খুব দ্রুত উত্তর দেওয়ার চেষ্টা করবো 
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg"
      >
        {/* Name & Phone side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700 dark:text-gray-300 text-start">
              নাম
            </label>
            <input
              {...register("name", { required: true })}
              placeholder="আপনার নাম লিখুন"
              className="w-full p-3 border rounded-lg border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700 dark:text-gray-300 text-start">
              ফোন
            </label>
            <input
              type="tel"
              {...register("phone", { required: true })}
              placeholder="আপনার ফোন নাম্বার লিখুন"
              className="w-full p-3 border rounded-lg border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700 dark:text-gray-300 text-start">
            ইমেইল
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="আপনার ইমেইল লিখুন"
            className="w-full p-3 border rounded-lg border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700 dark:text-gray-300 text-start">
            বর্ণনা
          </label>
          <textarea
            {...register("description", { required: true })}
            placeholder="আপনার বার্তা লিখুন"
            rows={5}
            className="w-full p-3 border rounded-lg border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition shadow-md hover:shadow-lg"
        >
          পাঠান
        </button>
      </form>
    </div>
  );
}
