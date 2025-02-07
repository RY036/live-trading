"use client";
import dynamic from "next/dynamic";
const AdvancedRealTimeChart = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  },
);

export function AdvancedChart() {
  return (
    <div className="h-[628px] w-full">
      <AdvancedRealTimeChart
        theme="dark"
        autosize
        symbol="NSE:BANKNIFTY"
      ></AdvancedRealTimeChart>
    </div>
  );
}
