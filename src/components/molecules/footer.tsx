"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { scroller } from "react-scroll";
import { useState } from "react";
import PerformanceModal from "@/components/organisms/home/performancsModal";
import ContactTemplate from "../organisms/home/contactTemplate";


export default function Footer() {
  const [isPerfomModalOpen, setIsPerfomModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (section: string) => {
    if (pathname !== "/") {
      router.push("/?scrollTo=" + section);
    } else {
      scroller.scrollTo(section, { smooth: true, duration: 500 });
    }
  };

  
  const handleContactModal = () => {
    setIsContactModalOpen((prev) => !prev);
  }

  return (
    <>
      <footer className="w-full bg-[#F8F6F9] py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex justify-center space-x-8">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                className="text-[#4B4B4B] hover:text-gray-900"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>

          <nav className="mb-12 flex flex-col justify-center space-y-4 md:flex-row md:space-x-12 md:space-y-0">
            {navLinks.map(({ label, section }) => (
              <button
                key={label}
                onClick={() => handleNavigation(section)}
                className="text-center text-sm font-medium text-[#4B4B4B] hover:text-gray-900"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => setIsPerfomModalOpen(true)}
              className="text-center text-sm font-medium text-[#4B4B4B] hover:text-gray-900"
            >
              PERFORMANCE
            </button>
            <button
              onClick={handleContactModal}
              className="text-center text-sm font-medium text-[#4B4B4B] hover:text-gray-900"
            >
              CONTACT
            </button>
          </nav>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <p className="text-sm text-[#4B4B4B]">
              © Algo Atlas Edge, powered by QuantumCona. All rights reserved.
              </p>
              <div className="flex flex-col items-center space-y-2 text-sm text-[#4B4B4B] md:flex-row md:space-x-4 md:space-y-0">
                {footerLinks.map(({ href, label }) => (
                  <Link key={label} href={href} className="hover:text-gray-900">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
      {isPerfomModalOpen && (
        <PerformanceModal handleCloseFunc={() => setIsPerfomModalOpen(false)} />
      )}
      {isContactModalOpen && (
        <ContactTemplate CloseFunc={handleContactModal} />
      )}
    </>
  );
}

const socialLinks = [
  {
    href: "#",
    label: "Facebook",
    icon: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "YouTube",
    icon: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: "HOME", section: "home" },
  { label: "FEATURES", section: "features" },
  { label: "PRICING", section: "pricing" },
  { label: "FAQ'S", section: "faq" },
];

const footerLinks = [
  { href: "#", label: "Terms & Conditions" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Cookie Policy" },
];
