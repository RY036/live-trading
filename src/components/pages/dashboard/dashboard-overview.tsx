"use client";
import { Card } from "@/components/ui/card";
import React from "react";
import { OverviewItem } from "./overview-item";
import Image from "next/image";
import { SettingIcon } from "@/components/icons/setting";
import { useGetTickerEOD } from "@/hooks/api/stock/useGetTickerEOD";

export const DashboardOverview = () => {
  const { data: overview } = useGetTickerEOD();
  const overviewData = overview?.result[0];

  const data = overviewData
    ? [
        {
          label: "OP",
          value: `${overviewData.op}`,
          trend: overviewData.op < overviewData.cp ? "up" : "down",
        },
        {
          label: "Market Cap",
          value: `${overviewData.vol * overviewData.cp}`,
          trend: "down",
        }, // Placeholder as market cap isn't directly available
        {
          label: "HP",
          value: `${overviewData.hp}`,
          trend: "up",
        },
        {
          label: "LP",
          value: `${overviewData.lp}`,
          trend: "down",
        },
        {
          label: "CP",
          value: `${overviewData.cp}`,
          trend: overviewData.cp > overviewData.op ? "up" : "down",
        },
        {
          label: "Volume",
          value: `${overviewData.vol}`,
          trend: "down",
        },
      ]
    : [];

  return (
    <Card className="mt-9 flex w-full items-center gap-6 rounded-[24px] py-4 pl-4 pr-6">
      <div className="flex w-full items-center justify-between gap-6">
        {/* Left Section - Asset Info */}
        <div className="flex items-center gap-4 pr-10">
          <Image
            src="/bitcoin.svg"
            alt="Ethereum Icon"
            className="h-[54px] w-[54px] rounded-full object-cover"
            width={54}
            height={54}
          />
          <div className="space-y-1">
            <p className="whitespace-nowrap text-lg font-semibold text-[#f3f3f3]">
              NIFTY 50
            </p>
            {/* <div className="text-base font-medium text-[#9798a1]">Ethereum</div> */}
          </div>
        </div>

        {/* Overview Items */}
        <div className="flex w-full justify-between divide-x divide-[#393b42]">
          {data.map((item, index) => (
            <OverviewItem
              key={index}
              title={item.label}
              value={item.value}
              isLow={item.trend === "down"}
            />
          ))}
        </div>

        {/* Settings Icon */}
        <button>
          <SettingIcon />
        </button>
      </div>
    </Card>
  );
};
