"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { parseAsString, useQueryState } from "nuqs";
import { useQueryClient } from "@tanstack/react-query";

const tabs = [
  { id: 1, title: "Live Data" },
  { id: 2, title: "Historical" },
];

export const DashboardFilter: React.FC = () => {
  const queryClient = useQueryClient();

  const [selectedTab, setSelectedTab] = useQueryState(
    "tab",
    parseAsString.withDefault("Live Data"),
  );

  const [selectedTicker, setSelectedTicker] = useQueryState(
    "ticker",
    parseAsString.withDefault("BANKNIFTY"),
  );

  return (
    <div className="flex items-end justify-between">
      {/* Mode Toggle */}
      <div className="flex flex-col items-start gap-2">
        <label className="font-inter text-sm font-bold text-[#9798a1]">
          Mode
        </label>

        <div className="inline-flex h-12 items-center justify-start gap-1.5 rounded-xl bg-[#2a292f] p-2 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.20)]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center justify-center gap-2.5 rounded-lg px-2.5 py-2 ${
                selectedTab === tab.title ? "h-[33px] bg-[#01e165]" : ""
              }`}
              onClick={() => setSelectedTab(tab.title)}
            >
              <span
                className={`text-sm font-medium ${
                  selectedTab === tab.title
                    ? "text-[#0e291c]"
                    : "text-[#9798a1]"
                }`}
              >
                {tab.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start gap-2">
        <label className="font-inter text-sm font-bold text-[#9798a1]">
          Ticker
        </label>
        <Select
          disabled={selectedTab === "Live Data"}
          value={selectedTicker}
          onValueChange={setSelectedTicker}
        >
          <SelectTrigger className="w-[188px] text-gray-400">
            <SelectValue placeholder="53300" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="BANKNIFTY">BANKNIFTY</SelectItem>
            <SelectItem value="NIFTY 50">NIFTY 50</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Strike Price */}
      <div className="flex flex-col items-start gap-2">
        <label className="font-inter text-sm font-bold text-[#9798a1]">
          Strike Price
        </label>
        <Select disabled={selectedTab === "Live Data"}>
          <SelectTrigger className="w-[188px] text-gray-400">
            <SelectValue placeholder="53300" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="53000">53000</SelectItem>
            <SelectItem value="53300">53300</SelectItem>
            <SelectItem value="53500">53500</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Date */}
      <div className="flex flex-col items-start gap-2">
        <label className="font-inter text-sm font-bold text-[#9798a1]">
          Date
        </label>
        <Select disabled={selectedTab === "Live Data"}>
          <SelectTrigger className="w-[188px] text-gray-400">
            <SelectValue placeholder="Thu, Jan 8, 2025" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2025-01-08">Thu, Jan 8, 2025</SelectItem>
            <SelectItem value="2025-01-09">Fri, Jan 9, 2025</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Expiry Date */}
      <div className="flex flex-col items-start gap-2">
        <label className="font-inter text-sm font-bold text-[#9798a1]">
          Expiry Date
        </label>
        <Select disabled={selectedTab === "Live Data"}>
          <SelectTrigger className="w-[188px] text-gray-400">
            <SelectValue placeholder="Thu, Jan 8, 2025" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2025-01-08">Thu, Jan 8, 2025</SelectItem>
            <SelectItem value="2025-01-15">Thu, Jan 15, 2025</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Time Interval */}
      <div className="flex flex-col items-start gap-2">
        <label className="font-inter text-sm font-bold text-[#9798a1]">
          Time Interval
        </label>
        <Select disabled={selectedTab === "Live Data"}>
          <SelectTrigger className="w-[188px] text-gray-400">
            <SelectValue placeholder="15 min" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="15">15 min</SelectItem>
            <SelectItem value="30">30 min</SelectItem>
            <SelectItem value="60">1 hour</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Go Button */}
      <button
        className="rounded-lg bg-green-500 px-6 py-2 text-sm font-medium text-black hover:bg-green-600 focus:outline-none"
        onClick={() => {
          queryClient.invalidateQueries({
            queryKey: [
              "historical-data",
              {
                tradingsymbol: selectedTicker,
              },
            ],
          });
        }}
      >
        Go
      </button>
    </div>
  );
};
