"use client"

import type { FC } from "react"

interface Plan {
  id: string
  title: string
  price: string
  duration: string
  features: string[]
  badge?: string
}

// plan
const plans: Plan[] = [
  {
    id: "basic-plan",
    title: "Basic",
    price: "\u20b9699",
    duration: "/ Month",
    features: ["Real-time analytics", "Backtesting Engine"],
  },
  {
    id: "standard-plan",
    title: "Standard",
    price: "\u20b92999",
    duration: "/ 6 Month",
    features: ["Real-time analytics", "Backtesting Engine"],
    badge: "Best Choice",
  },
  {
    id: "premium-plan",
    title: "Premium",
    price: "\u20b94999",
    duration: "/ Year",
    features: ["Real-time analytics", "Backtesting Engine", "Priority support"],
  },
]

const PriceSection: FC = () => {
  return (
    <div>
      <section
        className="mt-20 flex flex-col self-start max-md:mt-10 max-md:max-w-full"
        aria-labelledby="pricing-heading"
      >
        <h2
          id="pricing-heading"
          className="text-7xl font-light leading-none text-neutral-800 max-md:max-w-full max-md:text-4xl"
        >
          Pricing
        </h2>
        <p className="mt-6 self-start text-center text-2xl text-zinc-600 max-md:max-w-full">
          Select the Plan That Aligns with Your Goals
        </p>
      </section>

      <div
        className="mx-auto mb-0 mt-10 flex max-w-[886px] gap-8 p-5 max-md:flex-wrap max-md:justify-center max-md:gap-5 max-sm:flex-col max-sm:p-2.5"
        role="region"
        aria-label="Pricing Plans"
      >
        {plans.map((plan, index) => (
          <div
            key={index}
            className="group relative flex h-full w-[282px] flex-1 flex-col rounded-3xl bg-gray-50 px-6 pb-11 pt-8 transition-all hover:bg-green-500 hover:text-white max-md:w-[calc(50%_-_10px)] max-sm:w-full"
          >
            {plan.badge && (
              <div
                className="absolute right-2 top-2 rounded-md bg-green-500 bg-opacity-40 px-2 py-1 text-xs font-medium text-white transition-colors group-hover:bg-white group-hover:text-green-500 sm:right-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-sm"
                aria-label="Best Choice"
              >
                {plan.badge}
              </div>
            )}
            <div className="flex h-full flex-col">
              <div className="mb-8">
                <h2
                  id={plan.id}
                  className="mb-1.5 text-xl font-bold text-gray-900 transition-colors group-hover:text-white"
                >
                  {plan.title}
                </h2>
                <p className="text-xs font-medium text-slate-600 transition-colors group-hover:text-white">
                  Perfect for {plan.title.toLowerCase()} traders
                </p>
              </div>
              <div className="mb-11">
                <p className="mb-1 text-4xl font-bold text-gray-900 transition-colors group-hover:text-white">
                  {plan.price}
                </p>
                <p className="text-xs font-medium text-slate-600 transition-colors group-hover:text-white">
                  {plan.duration}
                </p>
              </div>
              <ul className="flex flex-grow flex-col gap-3" role="list" aria-label="Plan features">
                <div>
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors group-hover:text-white"
                    >
                      <div className="flex h-5 w-5 items-center justify-center text-[8px] font-bold text-green-400 transition-colors group-hover:text-white">
                        ✔
                      </div>
                      <span className="mb-2">{feature}</span>
                    </li>
                  ))}
                </div>
                {plan?.id != "premium-plan" && <span className="invisible h-0 mt-5">Disabled Feature</span>}
              </ul>
              <button
                className="mt-10 w-full cursor-pointer rounded-xl border-[none] bg-green-500 p-2.5 text-sm font-medium text-white transition-all group-hover:bg-white group-hover:text-green-500"
                aria-label={`Get Started with ${plan.title} plan`}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PriceSection

