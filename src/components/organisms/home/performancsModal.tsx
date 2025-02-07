"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface PerformanceModalProps {
  handleCloseFunc: () => void;
}

export default function PerformanceModal({
  handleCloseFunc,
}: PerformanceModalProps) {
  const [selectedIndex, setSelectedIndex] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleIndexClick = (index: string) => {
    setSelectedIndex(index);
  };

  const handleYearClick = (year: string) => {
    setSelectedYear(year);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedIndex && selectedYear) {
      console.log(`Selected Index: ${selectedIndex}, Selected Year: ${selectedYear}`);
      if (isMounted) {
        sessionStorage.setItem("scrollTo", "performance");
        router.push("/performance");
      }
      handleCloseFunc();
    } else {
      alert("Please select both an index and a year.");
    }
  };

  if (!isMounted) return null;

  return (
    <div 
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="relative w-full max-w-[600px] rounded-xl bg-white p-6 max-md:p-4 max-sm:p-3 mx-4 mt-6">
        <button
          onClick={handleCloseFunc}
          className="absolute right-6 top-6 cursor-pointer text-neutral-800"
        >
          ✕
        </button>
        <form
          onSubmit={handleSubmit}
          className="mx-auto my-0 flex w-full flex-col rounded-xl bg-white p-6 font-medium max-md:p-4 max-sm:p-3"
          aria-labelledby="performance-title"
        >
          <div className="flex flex-col items-start text-sm">
            <h2
              id="performance-title"
              className="mb-6 w-full text-sm text-neutral-800 max-sm:text-xs"
            >
              Please Select the Index and Year to View Performance Insights
            </h2>
            <div className="flex w-full flex-col">
              <label htmlFor="index-selection" className="mb-2 text-zinc-600">
                Select Index
              </label>
              <div
                className="mb-6 flex flex-wrap gap-3 max-md:gap-2 max-sm:gap-1"
                role="group"
                aria-labelledby="index-selection"
              >
                {["BANK NIFTY", "NIFTY 50", "SENSEX", "BANKEX", "MIDCINIFTY", "FINIFTY"].map((index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => handleIndexClick(index)}
                    className={`cursor-pointer rounded-2xl border border-green-500 px-4 py-2 transition-all max-md:px-3 max-md:py-1.5 max-sm:px-2 max-sm:py-1 max-sm:text-xs ${
                      selectedIndex === index ? "bg-green-500 text-white" : "text-green-500"
                    }`}
                    aria-pressed={selectedIndex === index}
                  >
                    {index}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex w-full flex-col">
              <label htmlFor="year-selection" className="mb-2 text-zinc-600">
                Select Year
              </label>
              <div
                className="flex flex-wrap gap-3 max-md:gap-2 max-sm:gap-1"
                role="group"
                aria-labelledby="year-selection"
              >
                {["2025", "2024", "2023", "2022", "2021", "2020", "All"].map((year) => (
                  <button
                    type="button"
                    key={year}
                    onClick={() => handleYearClick(year)}
                    className={`w-[60px] cursor-pointer rounded-2xl border border-green-500 px-3 py-1.5 text-center transition-all max-md:px-2 max-md:py-1 max-sm:px-1 max-sm:py-0.5 max-sm:text-xs ${
                      selectedYear === year ? "bg-green-500 text-white" : "text-green-500"
                    }`}
                    aria-pressed={selectedYear === year}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 cursor-pointer rounded-3xl bg-green-500 px-5 py-2.5 text-sm text-neutral-800 transition-all focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 max-sm:w-full max-sm:text-xs"
            >
              Check Performance
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}