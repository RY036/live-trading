import { ChartDownIcon } from "@/components/icons/chart-down";
import { ChartUpIcon } from "@/components/icons/chart-up";
import React from "react";

export interface OverviewItemProps {
  title: string;
  value: string;
  isLow: boolean;
}

export const OverviewItem = ({ title, value, isLow }: OverviewItemProps) => {
  const formatter = new Intl.NumberFormat("en-IN", {
    currencySign: "accounting",
    minimumFractionDigits: 2,
    roundingPriority: "morePrecision",
  });
  return (
    <div className="flex items-end gap-3 px-6 first:pl-0">
      {isLow ? (
        <ChartDownIcon width={34} height={34} />
      ) : (
        <ChartUpIcon width={34} height={34} />
      )}
      <div className="space-y-3">
        <p className="font-inter text-base font-medium leading-5 text-muted">
          {title}
        </p>
        <span className="text-lg font-semibold leading-[21px] text-white">
          {formatter.format(+value)}
        </span>
      </div>
    </div>
  );
};
