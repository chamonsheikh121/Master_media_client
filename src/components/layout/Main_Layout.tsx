"use client";

import * as React from "react";
import logo from '../../assets/logo.png'
import { Link, NavLink } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"; // or wherever your sheet component is
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ModeToggle from "../ui/ModeToggle";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const menuItems = [
    { title: "হোম", href: "/" },
    { title: "আমাদের সম্পর্কে", href: "/about-us" },
    { title: "প্যাকেজ সমূহ ", href: "/packages" },
    { title: "গ্যালারী", href: "/galleries" },
    { title: "যোগাযোগ", href: "/contact-us" },
    { title: "কল করুন ", href: "tel:+880130934230" },
  ];
  return (
    <nav className="w-full border-b ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold">
            <img src={logo} className="w-20 h-10" alt="" />
          </div>

          {/* Desktop menus */}
          <div className="hidden md:flex space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          `${navigationMenuTriggerStyle()} ${
                            isActive
                              ? "text-red-500 font-bold  border-red-500"
                              : " hover:text-red-500"
                          }`
                        }
                      >
                        {item.href.includes("/") ? (
                          <span className="">{item.title}</span>
                        ) : null}
                        {item.href.includes("+880") ? (
                          <span className="text-green-600 flex justify-center items-center gap-2">
                            <Phone className="text-green-600" />
                            {item.title}
                          </span>
                        ) : null}
                      </NavLink>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                {/* Example with submenu */}
                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger>আরও</NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <ul className="space-y-2 p-4">
                      <ListItem href="/about" title="আমাদের সম্পর্কে">
                        আমাদের সম্পর্কে আরও জানুন
                      </ListItem>
                      <ListItem href="/faq" title="সাধারণ প্রশ্নাবলী">
                        প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem> */}
              </NavigationMenuList>
            </NavigationMenu>

            <ModeToggle></ModeToggle>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger>
                <span className="p-2" aria-label="Open menu">
                  <Menu size={24} />
                </span>
            </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="flex items-center justify-between px-4 py-4 border-b">
                  <div className="text-xl w-full font-bold flex justify-around items-center">
                    <div> <img src={logo} className="w-20 h-10" alt="" /></div>
                    <ModeToggle></ModeToggle>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2"
                    aria-label="Close menu"
                  >
                    {/* <X size={24} /> */}
                  </button>
                </div>
                <div className="p-4 space-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block text-lg font-medium"
                      onClick={() => setOpen(false)}
                    >
                      {item.href.includes("/") ? (
                          <span className="">{item.title}</span>
                        ) : null}
                        {item.href.includes("+880") ? (
                          <span className="text-green-600 flex justify-start items-center gap-2">
                            <Phone className="text-green-600" />
                            {item.title}
                          </span>
                        ) : null}
                    </Link>
                  ))}
                  {/* Example submenu */}
                  <ModeToggle></ModeToggle>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
