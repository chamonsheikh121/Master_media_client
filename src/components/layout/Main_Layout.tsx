"use client";

import * as React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"; // or wherever your sheet component is
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ListItem } from "./Navbar_items";
import { ModeToggle } from './../ui/ModeToggle';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const menuItems = [
    { title: "হোম", href: "/" },
    { title: "সেবা", href: "/services" },
    { title: "প্যাকেজসমূহ", href: "/packages" },
    { title: "যোগাযোগ", href: "/contact" },
  ];

  return (
    <nav className="w-full border-b ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold">Logo</div>

          {/* Desktop menus */}
          <div className="hidden md:flex space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        className={navigationMenuTriggerStyle()}
                        to={item.href}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                {/* Example with submenu */}
                <NavigationMenuItem>
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
                  
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <ModeToggle></ModeToggle>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger>
                <button className="p-2" aria-label="Open menu">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="flex items-center justify-between px-4 py-4 border-b">
                  <div className="text-xl font-bold">Menu</div>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2"
                    aria-label="Close menu"
                  >
                    <X size={24} />
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
                      {item.title}
                    </Link>
                  ))}
                  {/* Example submenu */}
                  <div>
                    <div className="mt-4 font-semibold">আরও</div>
                    <Link
                      to="/about"
                      className="block mt-2"
                      onClick={() => setOpen(false)}
                    >
                      আমাদের সম্পর্কে
                    </Link>
                    <Link
                      to="/faq"
                      className="block mt-1"
                      onClick={() => setOpen(false)}
                    >
                      সাধারণ প্রশ্নাবলী
                    </Link>
                  </div>
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
