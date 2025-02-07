"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { scroller } from "react-scroll"
import { Menu, X } from "lucide-react"

import ContactTemplate from "../organisms/home/contactTemplate"

interface HeaderProps {
  setIsModalOpen?: (isOpen: boolean) => void
}

const Header: React.FC<HeaderProps> = () => {
  const router = useRouter()
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100)
    }
    
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Scroll to section if user navigates to a different page

  useEffect(() => {
    const storedScrollTo = sessionStorage.getItem("scrollTo")
    if (storedScrollTo) {
      setActiveLink(storedScrollTo)
      scroller.scrollTo(storedScrollTo, { smooth: true, duration: 500 })
      sessionStorage.removeItem("scrollTo")
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (section: string) => {
    setActiveLink(section)
    setMenuOpen(false)
    if (section === "performance") {
      router.push("/performance")
      sessionStorage.setItem("scrollTo", section)
      return
    }
    if (window.location.pathname !== "/") {
      sessionStorage.setItem("scrollTo", section)
      router.push("/")
    } else {
      scroller.scrollTo(section, { smooth: true, duration: 500 })
    }
  }

  const handleContact = (): void => {
    setContactModalOpen((prev) => !prev)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full transition-all duration-300 z-[100] ${
          isScrolled ? "bg-white py-2 border-b border-gray-200 shadow-md" : "py-3 md:py-5"
        } ${isMobile ? "bg-white shadow-md" : ""}`}
      >
        <div  className={`container mx-auto px-4 flex items-center ${
            isScrolled || isMobile ? "justify-between" : "justify-center"
          }`}>
          <img
            loading="lazy"
            src="./logo.gif"
            className={`w-[10rem] h-[4rem]   mr-20 ${!isScrolled && !isMobile ? "absolute left-10" : ""}`}
            alt="Algo Atlas Edge logo"
          />

          {isMobile ? (
            <button className="text-gray-600 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          ) : (
            <nav
              className={`flex items-center ml-20 gap-4 md:gap-6 rounded-full transition-all duration-300 py-2 px-4 md:px-6 text-sm md:text-base ${
                isScrolled ? "bg-transparent" : "bg-gray-100"
              }`}
              role="navigation"
            >
              {["HOME", "FEATURES", "PRICING", "PERFORMANCE", "FAQ", "CONTACT"].map((label) => {
                const section = label.toLowerCase()
                return (
                  <span
                    key={section}
                    onClick={() => (section !== "contact" ? handleNavigation(section) : handleContact())}
                    className={`cursor-pointer hover:text-green-500 transition-colors ${
                      activeLink === section ? "text-green-500" : "text-gray-700"
                    }`}
                  >
                    {label}
                  </span>
                )
              })}
              <button className="bg-green-500 px-4 py-2 text-white rounded-full hover:bg-green-600 transition-colors">
                Get Started
              </button>
            </nav>
          )}
        </div>
      </header>

      {menuOpen && isMobile && (
        <div className="fixed top-[80px] left-0 w-full bg-white p-4 flex flex-col gap-4 shadow-lg z-50 border-t border-gray-200">
          {["HOME", "FEATURES", "PRICING", "PERFORMANCE", "FAQ", "CONTACT"].map((label) => {
            const section = label.toLowerCase()
            return (
              <span
                key={section}
                onClick={() => {
                  setMenuOpen(false)
                  if (section !== "contact") {
                    handleNavigation(section)
                  } else {
                    handleContact()
                  }
                }}
                className={`cursor-pointer py-2 text-center ${
                  activeLink === section ? "text-green-500" : "text-gray-700"
                }`}
              >
                {label}
              </span>
            )
          })}
          <button className="bg-green-500 px-4 py-2 text-white rounded-full hover:bg-green-600 transition-colors">
            Get Started
          </button>
        </div>
      )}

      {contactModalOpen && <ContactTemplate CloseFunc={handleContact} />}
    </>
  )
}

export default Header

