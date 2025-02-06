"use client";

import { useState, useEffect } from "react";

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: string;
  Img: string;
};

const features: Feature[] = [
  {
    id: 0,
    title: "Real-Time Analytics",
    description:
      "Stay ahead with real-time analytics for instant market insights and smarter decisions.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7feb48704ec883713f3b6dd7162166a25dc4a56df604d301532ac9f5bf0a0419?placeholderIfAbsent=true&apiKey=d324b045a78e41d09d8faa0621196924",
    Img: "./feature0.png"
  },
  {
    id: 1,
    title: "Advanced Charts",
    description: "Gain insights with our state-of-the-art charting tools.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bbed233884c459baeffe5b7c3b35e55eee2f5163401cb480499207aba2421701?placeholderIfAbsent=true&apiKey=d324b045a78e41d09d8faa0621196924",
    Img: "./feature1.png"
  },
  {
    id: 2,
    title: "Backtesting",
    description: "Test strategies against historical data to improve accuracy.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/86c9222868d374d218237369a0484a110066b59694a0f8a4dd14dc12a3c31f50?placeholderIfAbsent=true&apiKey=d324b045a78e41d09d8faa0621196924",
    Img: "./feature2.png"
  },
  {
    id: 3,
    title: "Split Screen Charting",
    description:
      "Compare multiple charts side by side for better decision-making.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/71e3a086fe6b6d673d21a4eee403f5e45741275ee240dc7de0bfd0eaa7720428?placeholderIfAbsent=true&apiKey=d324b045a78e41d09d8faa0621196924",
    Img: "./feature3.png"
  },
];

export default function FeatureSection() {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000); // Change feature every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section
        className="mt-16 flex flex-col self-start max-md:mt-10 max-md:max-w-full"
        aria-labelledby="features-heading"
      >
        <h2
          id="features-heading"
          className="text-7xl font-light leading-none text-neutral-800 max-md:max-w-full max-md:text-4xl"
        >
          Features
        </h2>
        <p className="mt-6 self-start text-center text-2xl text-zinc-600 max-md:max-w-full">
          Explore Key Features That Elevate Your Trading Strategy
        </p>
      </section>

      <div className="mt-20 flex flex-wrap justify-center  items-center gap-8 max-md:mt-10 max-md:max-w-full">
        <div className="my-auto flex w-[529px] min-w-[240px] flex-col self-stretch max-md:max-w-full">
          {features.map((feature) => (
            <button
              key={feature.id}
              className={`mt-7 mb-2 flex w-full max-w-[529px] flex-col  justify-center rounded-3xl border border-solid border-black border-opacity-10 p-5 shadow-lg transition-all duration-300 max-md:max-w-full ${
                activeFeature === feature.id ? "bg-green-500" : "bg-gray-50"
              }`}
              onClick={() => setActiveFeature(feature.id)}
              aria-expanded={activeFeature === feature.id}
            >
              <div className="flex items-center gap-6">
                <div className="flex h-12 w-12 items-center gap-2.5 rounded-3xl border border-solid border-black border-opacity-10 bg-gray-50 p-3 shadow-md">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-6 object-contain"
                  />
                </div>
                <h3 className="text-2xl  font-medium text-neutral-800">
                  {feature.title}
                </h3>
              </div>
              {activeFeature === feature.id && (
                <p className="mt-4 text-sm leading-7 text-left text-white">
                  {feature.description}
                </p>
              )}
            </button>
          ))}
        </div>

        <img
          loading="lazy"
          src={features[activeFeature].Img}
          alt={features[activeFeature].title}
          className="my-auto aspect-[1.42] w-[720px] min-w-[240px] self-stretch object-contain max-md:max-w-full"
        />
      </div>
    </div>
  );
}