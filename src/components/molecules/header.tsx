"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { scroller } from "react-scroll";
import { Menu, X } from "lucide-react";

import ContactTemplate from "../organisms/home/contactTemplate";

interface HeaderProps {
  setIsModalOpen?: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = () => {
  const router = useRouter();
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1045);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const storedScrollTo = sessionStorage.getItem("scrollTo");
    if (storedScrollTo) {
      setActiveLink(storedScrollTo);
      scroller.scrollTo(storedScrollTo, { smooth: true, duration: 500 });
      sessionStorage.removeItem("scrollTo");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (section: string) => {
    setActiveLink(section);
    setMenuOpen(false);
    if (section === "performance") {
      router.push("/performance");
      sessionStorage.setItem("scrollTo", section);
      return;
    }
    if (window.location.pathname !== "/") {
      sessionStorage.setItem("scrollTo", section);
      router.push("/");
    } else {
      scroller.scrollTo(section, { smooth: true, duration: 500 });
    }
  };

  const handleContact = (): void => {
    setContactModalOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full transition-all duration-300 pl-2 pr-2 z-[100] ${
          isScrolled
            ? "bg-white py-2 border-gray-200 shadow-[0px_2px_20px_2px_rgba(0,0,0,0.2)]"
            : "py-5"
        } ${isMobile ? "border-gray-200 shadow-[0px_2px_20px_2px_rgba(0,0,0,0.2)]" : ""}`}
      >
        <div
          className={`flex w-full items-center px-10 max-md:px-5 border-gray-200 ${
            isScrolled ? "justify-between" : ""
          }`}
        >
          <img
            loading="lazy"
            src="./logo.gif"
            className={`w-[10rem] h-[4rem] ml-2 ${!isScrolled ? "mr-52" : ""}`}
            alt="Algo Atlas Edge logo"
          />

          {isMobile && (
            <button className="ml-auto" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          )}

          {!isMobile && (
            <nav
              className={`flex items-center gap-5 rounded-[40px] transition-all z-50 duration-300 py-2.5 px-10 text-neutral-800 mr-2 ${
                isScrolled ? "bg-transparent" : "bg-gray-100"
              }`}
              role="navigation"
            >
              {["HOME", "FEATURES", "PRICING", "PERFORMANCE", "FAQ", "CONTACT"].map(
                (label) => {
                  const section = label.toLowerCase();

                  return (
                    <span
                      key={section}
                      onClick={() =>
                        section !== "contact"
                          ? handleNavigation(section)
                          : handleContact()
                      }
                      className={`cursor-pointer ${
                        activeLink === section ? "text-green-500" : ""
                      }`}
                    >
                      {label}
                    </span>
                  );
                }
              )}
              <button className="bg-green-500 px-4 py-2 text-white rounded-3xl">
                Get Started
              </button>
            </nav>
          )}
        </div>
      </div>

      {menuOpen && isMobile && (
        <div className="fixed top-20 left-0 w-full bg-gray-100 p-5 flex flex-col gap-4 shadow-lg z-50">
          {["HOME", "FEATURES", "PRICING", "PERFORMANCE", "FAQ", "CONTACT"].map(
            (label) => {
              const section = label.toLowerCase();
              return (
                <span
                  key={section}
                  onClick={() => {
                    setMenuOpen(false);
                    if (section !== "contact") {
                      handleNavigation(section);
                    } else {
                      handleContact();
                    }
                  }}
                  className={`cursor-pointer ${
                    activeLink === section ? "text-green-500" : ""
                  }`}
                >
                  {label}
                </span>
              );
            }
          )}
          <button className="bg-green-500 px-4 py-2 text-white rounded-3xl">
            Get Started
          </button>
        </div>
      )}

      {contactModalOpen && <ContactTemplate CloseFunc={handleContact} />}
    </>
  );
};

export default Header;
