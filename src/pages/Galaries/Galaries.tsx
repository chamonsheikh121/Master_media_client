import img1 from "../../assets/Gallery/1.webp";
import img2 from "../../assets/Gallery/2.webp";
import img3 from "../../assets/Gallery/3.webp";
import img4 from "../../assets/Gallery/4.webp";
import img5 from "../../assets/Gallery/5.webp";
import img6 from "../../assets/Gallery/6.webp";
import img7 from "../../assets/Gallery/7.webp";
import img8 from "../../assets/Gallery/8.webp";
import img9 from "../../assets/Gallery/9.webp";
import img10 from "../../assets/Gallery/10.webp";
import img11 from "../../assets/Gallery/11.webp";
import img12 from "../../assets/Gallery/12.webp";
import img13 from "../../assets/Gallery/13.webp";
import img14 from "../../assets/Gallery/14.webp";
import img15 from "../../assets/Gallery/15.webp";
import img16 from "../../assets/Gallery/16.webp";
import img17 from "../../assets/Gallery/17.webp";
import img18 from "../../assets/Gallery/18.webp";
import img19 from "../../assets/Gallery/19.webp";
import img20 from "../../assets/Gallery/20.webp";
import img21 from "../../assets/Gallery/21.webp";
import img22 from "../../assets/Gallery/22.webp";
import img23 from "../../assets/Gallery/23.webp";
import img24 from "../../assets/Gallery/24.webp";
import img25 from "../../assets/Gallery/25.webp";
import img26 from "../../assets/Gallery/26.webp";
import img27 from "../../assets/Gallery/27.webp";
import img28 from "../../assets/Gallery/28.webp";
import img29 from "../../assets/Gallery/29.webp";
import img30 from "../../assets/Gallery/30.webp";
import img31 from "../../assets/Gallery/31.webp";
import img32 from "../../assets/Gallery/32.webp";
import img33 from "../../assets/Gallery/33.webp";
import img34 from "../../assets/Gallery/34.webp";
import img35 from "../../assets/Gallery/35.webp";
import img36 from "../../assets/Gallery/36.webp";
import img37 from "../../assets/Gallery/37.webp";
import img38 from "../../assets/Gallery/38.webp";
import img39 from "../../assets/Gallery/39.webp";
import img40 from "../../assets/Gallery/40.webp";

const images = [

  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
];

export default function Gallery() {
  return (
    <div className="w-[90%] max-w-6xl mx-auto py-16">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        আমাদের গ্যালারী
      </h1>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full flex justify-center items-center overflow-hidden rounded-lg"
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
