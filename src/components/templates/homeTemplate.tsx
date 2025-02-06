"use client";

import Header from "@/components/molecules/header";
import FeatureSection from "@/components/organisms/home/features";
import PriceSection from "@/components/organisms/home/pricing";
import PerformanceSection from "@/components/organisms/home/perfomancSection";
import Feedback from "@/components/organisms/home/feedback";
import Faq from "@/components/organisms/home/faq";
import TradingUI from "@/components/organisms/home/tradingUi";
import Footer from "@/components/molecules/footer";

export default function HomeTemplate() {
  return (
    <div className="bg-white pt-3">
      <div className=" flex w-full flex-col px-20 max-md:max-w-full max-md:px-5">
        <Header />
        <div id="home">
          <TradingUI />
        </div>
        <div id="features">
          <FeatureSection />
        </div>
        <div id="pricing">
          <PriceSection />
        </div>
        <div id="performance">
          <PerformanceSection />
        </div>
        {/* <div id="feedback">
          <Feedback />
        </div> */}
        <div id="faq">
          <Faq />
        </div>
        <div id="contact mb-3"></div>
      </div>
      <Footer />
    </div>
  );
}
