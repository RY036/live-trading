"use client";
import { DashboardFilter } from "@/components/pages/dashboard/dashboard-filter";
import { HistoricalDataTable } from "@/components/pages/dashboard/historical-table";
import {
  MainTable,
  OptionMetricsResponse,
} from "@/components/pages/dashboard/main-table";
import {
  OptionData,
  OptionTable,
} from "@/components/pages/dashboard/option-table";
import { parseAsString, useQueryState } from "nuqs";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [tab] = useQueryState("tab", parseAsString.withDefault("Live Data"));
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [callOptions, setCallOptions] = useState<OptionData[]>([]);
  const [putOptions, setPutOptions] = useState<OptionData[]>([]);

  useEffect(() => {
    const socketUrl =
      "ws://localhost:8000/api/v1/calculation/ws/option_metrics";
    const ws = new WebSocket(socketUrl);

    ws.onopen = () => {
      console.log("Connected to WebSocket:", socketUrl);
      // If you need to send any subscription messages, do so here:
      // ws.send(JSON.stringify({ type: "subscribe", symbol: "XYZ" }));
    };

    ws.onmessage = (event) => {
      try {
        const response = JSON.parse(event.data) as OptionMetricsResponse;

        if (response.status === "success") {
          const calls = response.data
            .filter((item) => item.ticker.includes("CE"))
            .map((item) => ({
              strike: item.strike,
              open: item.metrics.real_time.open,
              high: item.metrics.real_time.high,
              low: item.metrics.real_time.low,
              close: item.metrics.real_time.ltp,
              mp:
                (item.metrics.real_time.high + item.metrics.real_time.low) / 2, // Midpoint calculation
              view:
                item.metrics.real_time.ltp > item.metrics.technical.poc
                  ? "Sell"
                  : "Buy",
              poc: item.metrics.technical.poc,
              buy45: item.metrics.technical.buy_level,
              sell45: item.metrics.technical.sell_level,
            }));

          const puts = response.data
            .filter((item) => item.ticker.includes("PE"))
            .map((item) => ({
              strike: item.strike,
              open: item.metrics.real_time.open,
              high: item.metrics.real_time.high,
              low: item.metrics.real_time.low,
              close: item.metrics.real_time.ltp,
              mp:
                (item.metrics.real_time.high + item.metrics.real_time.low) / 2, // Midpoint calculation
              view:
                item.metrics.real_time.ltp > item.metrics.technical.poc
                  ? "Sell"
                  : "Buy",
              poc: item.metrics.technical.poc,
              buy45: item.metrics.technical.buy_level,
              sell45: item.metrics.technical.sell_level,
            }));

          // We have received data, stop showing loading indicator
          setIsLoading(false);

          setCallOptions(calls);
          setPutOptions(puts);
        } else {
          console.error("WebSocket reported an error status:", response);
        }
      } catch (error) {
        console.error("Failed to parse WebSocket message:", error);
      }
    };

    ws.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed:", socketUrl);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="container pb-20">
      {/* <DashboardOverview /> */}
      <div className="mt-6 w-full">
        <DashboardFilter />
      </div>
      <div className="mt-6 w-full">
        {tab === "Live Data" ? <MainTable /> : <HistoricalDataTable />}
      </div>

      <div className="mt-6 flex gap-6">
        <OptionTable
          title="Call Option"
          data={callOptions}
          color="text-green-500"
          isLoading={isLoading}
        />
        <OptionTable
          title="Put Option"
          data={putOptions}
          isLoading={isLoading}
          color="text-red-500"
        />
      </div>
    </div>
  );
};
export default Page;
