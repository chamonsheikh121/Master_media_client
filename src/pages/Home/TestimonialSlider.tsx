import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // You need the CSS
import { useEffect } from "react";

const reviews = [
  {
    name: "Nipul Chandra Das",
    profilePic:
      "https://scontent.fdac4-1.fna.fbcdn.net/v/t39.30808-6/467781224_3701740136805189_356493223599509873_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFo8aRV3uNDiRVMwAUBiZHuzj_YZZO-3pvOP9hlk77em53QxQ1b9MiSQ-9DpEcKvVhlUR4vW9qrxaTqlCfjvxVD&_nc_ohc=2Jq6j95CoYIQ7kNvwEiOXZI&_nc_oc=AdlrFlZBQ4XC5JCOWez_xpMHPtNXOBRVM04Cxh1CGSEhdMBv1gZdqif_y0WssiWKErnijbl6uk7a5_jzEj1o-SLK&_nc_zt=23&_nc_ht=scontent.fdac4-1.fna&_nc_gid=7-AUem8OiIfMfazEM9cBbg&oh=00_Afeaw-80OuKqd84I91_9dXIstSG6I66TAj5EYCs1k-B3Bg&oe=68EBC02F",
    review: "Good service Better then others",
  },
  {
    name: "Kazi Tareq",
    profilePic:
      "https://scontent.fdac4-1.fna.fbcdn.net/v/t39.30808-6/315046693_1948601268808316_3110689394433121445_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEc76Kdkv-kiabC7QoBpY0FYWK_7HeIPQ1hYr_sd4g9DRzwTag2bIblLa-UXKt94aSJJKaXfnPB7-hOx_WJ5jIa&_nc_ohc=e_V77t1aB88Q7kNvwG6nxds&_nc_oc=AdlXzEeCT7eeek9aJ1mzJUE0y7TFdasruHWaVJouydlQXwsRaOBfWlSIV_lwoMjcMKM08e87rvZZzdBUxW6wWmVY&_nc_zt=23&_nc_ht=scontent.fdac4-1.fna&_nc_gid=Cc7zoutvVYvhk6dla6JlBw&oh=00_AfclM6EGWclPBnKUts8scMOQcybzC_rMxuJh2apjkcje3g&oe=68EBC14D",
    review:
      "গ্রাহকের আস্থার নাম মাস্টার মিডিয়া নির্বিচ্ছিন্ন ওয়াইফাই সেবা এখানেই। মাস্টার মিডিয়ার ওয়াইফাই স্পিড এবং তাদের সার্ভিস অনেক ভালো আশা করি সামনে আরো ভালো হবে।",
  },
  {
    name: "Arafat Khan",
    profilePic:
      "https://scontent.fdac4-1.fna.fbcdn.net/v/t39.30808-6/552251698_774185318731202_5895695439236983211_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF06H1Lxr5vSbhjE_m2fEHdHgfGGdwg9mMeB8YZ3CD2Y3JXRE1_eRbNVkpGvfkicmhNqKajlhoHs3g6EutQUvld&_nc_ohc=RNP1xWAZ1gIQ7kNvwHSN7IB&_nc_oc=AdnKYLelLBT7Bg-uBN0ywW5QU1cRdrQgnljHm9OidU3FrZeYcZ0LmSqVNM9enSbrtJeA646Czyrzuasv13PWfuG-&_nc_zt=23&_nc_ht=scontent.fdac4-1.fna&_nc_gid=gGuxrf8kGOT1sdYBCliJgg&oh=00_AfdMx5apLifyeSk6x43wad3Gsso8kFG__0--9WM1aAzK5g&oe=68EBC647",
    review: "service onek valo kono problem hoi na 🤍",
  },
  {
    name: "Tamzid Hossen",
    profilePic:
      "https://scontent.fdac4-2.fna.fbcdn.net/v/t39.30808-6/554191814_24619539031074104_4909165356160589790_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHOGbbVghAi0Xbr4qCU05RVR1Bk0nkmDX9HUGTSeSYNf2SOVchfJCVvD60M6Tishxz_MBJCb0X2B4sJZwASz43D&_nc_ohc=7B7GMmVUAHcQ7kNvwGkaKWR&_nc_oc=AdmOyvDcOfPCl_PIPB8UfOblb94lDkU4ku-1dIW9uyhNIYhXOpukA7zVV6ucEdgt1ZuLUVTgOr_P3F3nvOil0Ef5&_nc_zt=23&_nc_ht=scontent.fdac4-2.fna&_nc_gid=FKNXHU2QRCzZ42IeC0LfmQ&oh=00_AfcPMakXsDE0AnUJ1rTxTcd7UHOE8s5SPa2C_7vEbC53aw&oe=68EBA625",
    review: "best service at shahbazpur",
  },
  {
    name: "Shamsul Alam Saiem",
    profilePic:
      "https://scontent.fdac4-1.fna.fbcdn.net/v/t39.30808-6/481970377_1891965061546074_8850350903182139722_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEnbSrmmdd34oIbcb9iVMl7XdsTiEnEkmFd2xOIScSSYb37_OL5xmh72BRLGttAFKV5-TXsssMOMpvlrp3IxgYy&_nc_ohc=_rnwZbFDRpkQ7kNvwFyTLhm&_nc_oc=AdlkWf5U6N6hzIUpW71Wpt8o5omIA6fQCglAYSzJ0dAwplRaia1cHTAQQvz5YsliOxFEXmeBp4vJ5lzuC69TsCK4&_nc_zt=23&_nc_ht=scontent.fdac4-1.fna&_nc_gid=2W2MNEuxsrIyFoXMysst8g&oh=00_AffFREXBaztswPxDVVQItQGNbcoC6uqTnSTlN2lRyh0WNQ&oe=68EBAF3F",
    review: "service onek vhalo onno sob golo teke",
  },
  {
    name: "মোঃ মাহমুদুল হাসান মিঠু",
    profilePic:
      "https://scontent.fdac4-1.fna.fbcdn.net/v/t39.30808-6/327417110_643047177589789_5659082919509311271_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHvivZH6ce40_ZLL8amK6m72guC-arUzX_aC4L5qtTNf1Zn7mnLUhySlunOs5L9E18ZT2lU1dAUqvudPthimpFh&_nc_ohc=oL4jPPXlftcQ7kNvwHDtrpz&_nc_oc=Adn2RSMCinBXB3n9BMcTUsOTJtdh2l7FRk_VJRqcJyLgZj8w5wE9egpjPIxF4w9J1EavTio7vFr6DGp-xVpUhg9B&_nc_zt=23&_nc_ht=scontent.fdac4-1.fna&_nc_gid=d320he0uUDZOT2pUywmUgg&oh=00_Afcrarz7Ym-CZ7Pb_SpabN7coh0VU52B6dmt2S9FxTGIyQ&oe=68EBC78C",
    review:
      "আপনাদের সার্ভিসে আমি সন্তুষ্ট। \nআশাবাদী সবসময় সার্ভিস একিরকম থাকবে।\nধন্যবাদ।",
  },
  {
    name: "Saiful Islam Soball",
    profilePic:
      "https://scontent.fdac4-2.fna.fbcdn.net/v/t39.30808-6/494892094_122202867620091883_8626300309823252179_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHJMJ6FORSH0WVJ5UFE3XLRwE0Bfn2bQKrATQF-fZtAqp5jog5VgMP-CHtEg1nIxu6SKfFDUpQTMPxmpPfPjndv&_nc_ohc=bTf5xYnO8Y8Q7kNvwHLS-Cn&_nc_oc=AdmcoNMEcST0DQHVvFDz1sbOQqddroQlvLjr_ddaDoCkcyhk-AKSMWadQaSVcTqJW6tsqkVJcU0uD52XJgQnZotX&_nc_zt=23&_nc_ht=scontent.fdac4-2.fna&_nc_gid=jv6DjDEdWh17o6eBGrfcJQ&oh=00_AfeRTACdHtKwh0PaZCIlPlwpk203YMAH_nyXTnmyI9KrLw&oe=68EB91B3",
    review: "Good Service, Go Ahead...",
  },
  {
    name: "S R Robel",
    profilePic:
      "https://scontent.fdac4-2.fna.fbcdn.net/v/t39.30808-6/480537499_2700187950154113_8869699475890078251_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEIknYm76bW4-7kd2QFsFnoP4tOAa3FVmc_i04BrcVWZ5PfOTmhvcr2wz0g1qcQOQMx0rzZL8DrsLaawfEOALj3&_nc_ohc=HjQuEV5PC4UQ7kNvwHSDSlw&_nc_oc=AdmcLxexCQ1nGhpcE5GZ8IBIgQsyCCwuGb2uXaftPD1sCg79FpQvBc_5g2Tznp885X0DUxHQDXaLUAuaOSeZnd1o&_nc_zt=23&_nc_ht=scontent.fdac4-2.fna&_nc_gid=PQBwRUiP_WYai11esr9nrg&oh=00_AfdnsG-H5wiAduKe4h3mmxXT8W23j304AM9DYAWomT_HcQ&oe=68EB9477",
    review: "Good Service. We want to 24 hours service Master Media.",
  },
];

export default function TestimonialCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3, // default (for large screens)
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // for medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // for small/mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

useEffect(() => {
    AOS.init({
      duration: 5000, // animation duration in ms
      easing: "ease-in-out", // easing function
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
   <div className="my-20">
    <div>
       <h2  data-aos="fade-up" className="text-2xl mb-32 md:text-3xl font-bold text-center ">
        আমাদের সম্মানিত গ্রাহকদের মতামত
      </h2>
    </div>
     <div style={{ width: "90%", margin: "auto" }} className="shadow-lg">
      <Slider {...settings}>
        {reviews?.length > 0 &&
          reviews.map((review) => (
            <div data-aos="zoom-in" style={{ width: "calc(90% - 24px)", margin: "auto" }} className="rounded-2xl mx-3 h-[300px] p-5  border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 flex flex-col shadow-lg justify-between">
              <div className="flex flex-col items-center gap-4 mb-3">
                <img
                  src={review?.profilePic}
                  alt={review?.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
                />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {review?.name}
                </h3>
              </div>
              <FaQuoteLeft className="text-gray-500"></FaQuoteLeft>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {review?.review}
              </p>
            </div>
          ))}
      </Slider>
    </div>
   </div>
  );
}
