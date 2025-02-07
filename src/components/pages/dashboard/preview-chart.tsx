"use client";
import { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const LightweightChart = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      // Create the chart
      const chart = createChart(chartContainerRef.current, {
        width: 800, // Adjust based on your requirements
        height: 400,
        layout: {
          textColor: "#d1d4dc",
        },
        grid: {
          vertLines: {
            color: "#363c4e",
          },
          horzLines: {
            color: "#363c4e",
          },
        },
        crosshair: {
          mode: 1, // Enables crosshair mode
        },
        timeScale: {
          timeVisible: true,
          secondsVisible: false,
        },
      });

      // Add a line series
      const candleSeries = chart.addCandlestickSeries({
        upColor: "#26a69a", // Green candles
        downColor: "#ef5350", // Red candles
        borderVisible: false,
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350",
      });

      // Set chart data
      candleSeries.setData([]);

      // Resize the chart on window resize
      const handleResize = () => {
        chart.applyOptions({
          width: chartContainerRef.current!.offsetWidth,
        });
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        chart.remove();
      };
    }
  }, []);

  return (
    <div
      ref={chartContainerRef}
      className="h-[400px] w-full rounded-lg bg-background"
    ></div>
  );
};

export default LightweightChart;
