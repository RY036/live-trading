"use client";
import React from "react";

const TradingUI: React.FC = () => {
  return (
    <div className="flex w-full flex-col px-10 max-md:max-w-full max-md:px-5  pt-[100px]">
      <div className="mt-16 flex items-center justify-center gap-2.5 self-center rounded-[40px] bg-green-100 px-5 py-1 text-sm font-medium uppercase tracking-wide text-green-500 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0747b5d139d8f7c01469daff27a01fdfb00401d242c0253b7b367c919d60d12?placeholderIfAbsent=true&apiKey=d324b045a78e41d09d8faa0621196924"
          alt=""
          className="my-auto aspect-square w-6 shrink-0 self-stretch object-contain"
        />
        <div className="my-auto self-stretch text-center max-md:text-sm">
          Transform STRATEGIES into Profitable Trades
        </div>
      </div>

      <h1 className="mt-9 text-center text-7xl font-light leading-[90px] text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-[55px]">
        Unlock Your Trading Potential
        <br />
        with Algo Atlas Edge
      </h1>

      <p className="mt-8 self-center text-center text-2xl text-zinc-600 max-md:max-w-full max-md:text-lg">
        Smart Tools. Sharp Decisions. Superior Trades
      </p>

      <img
        loading="lazy"
        src="./PerformanceReport.png"
        alt="Trading platform interface showcase"
        className="mt-7 aspect-[1.56] w-[954px] max-w-full self-center rounded-3xl object-contain max-md:aspect-auto max-md:w-full"
      />
    </div>
  );
};

export default TradingUI;
