"use client";

import { useState } from "react";
import Header from "@/components/molecules/header";
import FeatureSection from "@/components/organisms/performance/performanceFirst";
import PerformanceSection from "@/components/organisms/performance/performanceSecond";
import Footer from "@/components/molecules/footer";
import PerformanceModal from "@/components/organisms/home/performancsModal";

interface SelectedValue {
  index: string;
  year: string;
}

export default function PerformanceTemplate() {
  const [isPerformanceModalOpen, setIsPerformanceModalOpen] = useState(true);
  const [selectedValue, setSelectedValue] = useState<SelectedValue>({ index: "", year: "" });

  const handleCloseModal = () => {
    setIsPerformanceModalOpen(false);
  };
  const handlesetValue=(index: string, year: string)=> {
    // use for store or set the value of index and year in selectedValue props and pass this selectedValue props to PerformanceSection component
    setSelectedValue({ index, year });
  }
  return (
    <div className="bg-white">
      <div className="pt-3 flex w-full flex-col px-20 max-md:max-w-full max-md:px-5">
        <Header />
        <div id="featuresec">
          <FeatureSection />
        </div>
        <div id="performancesec">
          <PerformanceSection />
        </div>
      </div>
      <Footer />
      {isPerformanceModalOpen && <PerformanceModal handleCloseFunc={handleCloseModal} />}
    </div>
  );
}