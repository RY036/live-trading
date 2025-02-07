import React from "react";


const FeatureSection: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 mt-20">
      <div className="mb-16 text-center">
        <h1 className="mb-6 text-[40px] font-normal leading-[1.2] tracking-[-0.02em] text-gray-900">
          Why Algo Atlas Edge Strategy
          <br />
          Stands Above the Rest
        </h1>
        <p className="mx-auto max-w-3xl text-xl text-zinc-600">
          Our trading strategy delivers consistent results with proven
          performance across market conditions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Consistent Profit Generation Card */}
        <div className="rounded-2xl border border-gray-100 bg-white p-8">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50">
            <svg
              className="h-6 w-6 text-emerald-400"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 17L9 11L13 15L21 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="mb-4 text-2xl font-medium text-gray-900">
            Consistent Profit Generation
          </h3>
          <p className="text-zinc-600">
            85% success rate in trade signals with proven track record across
            different market conditions.
          </p>
        </div>

        {/* Advanced Risk Management Card */}
        <div className="rounded-2xl border border-gray-100 bg-white p-8">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50">
            <svg
              className="h-6 w-6 text-emerald-400"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 6V20M8 6L4 10M8 6L12 10M16 6V20M16 6L12 10M16 6L20 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="mb-4 text-2xl font-medium text-gray-900">
            Advanced Risk Management
          </h3>
          <p className="text-zinc-600">
            Sophisticated algorithms ensure optimal position sizing and
            risk-reward ratios for every trade.
          </p>
        </div>

        {/* Real-Time Market Adaptation Card */}
        <div className="rounded-2xl border border-gray-100 bg-white p-8">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50">
            <svg
              className="h-6 w-6 text-emerald-400"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 6V12L16 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="mb-4 text-2xl font-medium text-gray-900">
            Real-Time Market Adaptation
          </h3>
          <p className="text-zinc-600">
            Dynamic strategy adjustments based on market conditions for optimal
            performance.
          </p>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="mt-12 flex justify-center gap-2">
        <button className="h-2 w-2 rounded-full bg-gray-300"></button>
        <button className="h-2 w-2 rounded-full bg-gray-600"></button>
        <button className="h-2 w-2 rounded-full bg-gray-300"></button>
      </div>
    </section>
  );
};

export default FeatureSection;
