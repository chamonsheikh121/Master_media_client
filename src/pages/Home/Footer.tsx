import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Footer() {
  const menuItems = [
    { title: "হোম", href: "/" },
    { title: "আমাদের সম্পর্কে", href: "/about-us" },
    { title: "প্যাকেজ সমূহ", href: "/packages" },
    { title: "গ্যালারী", href: "/galleries" },
    { title: "যোগাযোগ", href: "/contact-us" },
    { title: "কল করুন", href: "tel:+880130934230" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-16 pb-10 mt-16">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Column 1 - Logo & About */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Master Media Logo" className="w-36 h-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
           মাস্টার মিডিয়া একটি উদীয়মান ও নির্ভরযোগ্য ইন্টারনেট সার্ভিস প্রোভাইডার, যার লক্ষ্য গ্রামীণ অঞ্চলের মানুষদের জন্য দ্রুতগতি, স্থিতিশীল ও সাশ্রয়ী ইন্টারনেট নিশ্চিত করা। 

          </p>
        </div>

        {/* Column 2 - Menu Links */}
        <div>
          <h3 className="text-lg text-start font-semibold text-gray-800 dark:text-white mb-4">
            গুরুত্বপূর্ণ লিংক
          </h3>
          <ul className="space-y-2 text-gray-600 flex flex-col justify-start items-start dark:text-gray-300 text-sm">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                {item.href.startsWith("tel:") ? (
                  <a href={item.href} className="hover:text-green-600 transition">
                    📞 {item.title}
                  </a>
                ) : (
                  <Link to={item.href} className="hover:text-green-600 transition">
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div className="flex flex-col justify-start items-start">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            যোগাযোগের ঠিকানা
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="text-green-600" /> ঢাকা, বাংলাদেশ
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-green-600" /> imranChoudhory@gamil.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-green-600" /> +880 1309-342-30
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-5 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Master Media. সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
}
