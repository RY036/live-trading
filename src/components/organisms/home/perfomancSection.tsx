"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PerformanceSection() {
  const router = useRouter();

  

  return (
    <>
      <section
        className="mt-20 flex w-full flex-col text-center max-md:mt-10 max-md:max-w-full"
        aria-labelledby="performance-heading"
      >
        <div className="flex w-full flex-col max-md:max-w-full">
          <h2
            id="performance-heading"
            className="text-7xl font-light leading-[90px] text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-[55px]"
          >
            Why Algo Atlas Edge Strategy Stands Above the Rest
          </h2>
          <p className="mt-6 max-w-[1040px] self-center text-2xl leading-9 text-zinc-600 max-md:max-w-full">
            Our trading strategy delivers consistent results with proven
            performance across market conditions.
          </p>
        </div>
        <button onClick={()=>router.push('/performance')}
          className="mt-8 flex min-h-[48px] cursor-pointer items-center justify-center gap-2 self-center rounded-[80px] bg-green-500 px-3 py-3.5 text-base font-medium text-neutral-800"
        >
          <span className="my-auto self-stretch">Check Performance</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e5af949c363511e17aedb7d453d0a0b8787e8be537214883579f17d8bbb720e?placeholderIfAbsent=true&apiKey=d324b045a78e41d09d8faa0621196924"
            alt=""
            className="my-auto aspect-square w-5 shrink-0 self-stretch object-contain"
          />
        </button>
      </section>

    </>
  );
}
