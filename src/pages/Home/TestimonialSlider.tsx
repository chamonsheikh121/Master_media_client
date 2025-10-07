"use client";
import * as React from "react";
import Autoplay from "embla-carousel-Autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// const testimonials = [
//   {
//     id: 1,
//     name: "রহিম উদ্দিন",
//     image: "/images/user1.jpg",
//     review: "মাস্টার মিডিয়ার ইন্টারনেট গতি অনেক দ্রুত এবং সার্ভিস দারুণ।",
//   },
//   {
//     id: 2,
//     name: "ফারজানা ইসলাম",
//     image: "/images/user2.jpg",
//     review: "গ্রাহক সহায়তা ২৪/৭ পাওয়া যায়, কোন সমস্যা হলে দ্রুত সমাধান হয়।",
//   },
//   {
//     id: 3,
//     name: "জাহিদ হাসান",
//     image: "/images/user3.jpg",
//     review: "কন্টেন্ট স্ট্রিমিং এবং গেমিং-এ ল্যাগ পাওয়া যায় না।",
//   },
//   {
//     id: 4,
//     name: "সুলতানা বেগম",
//     image: "/images/user4.jpg",
//     review: "ইনস্টলেশন ছিল সহজ, টিম খুব অভিজ্ঞ।",
//   },
//   {
//     id: 5,
//     name: "মোহাম্মদ আলী",
//     image: "/images/user5.jpg",
//     review: "প্যাকেজ দাম খুব যুক্তিসংগত এবং ব্যান্ডউইথ কোন সময় কমে যায় না।",
//   },
// ];

export default function TestimonialCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-xs"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
