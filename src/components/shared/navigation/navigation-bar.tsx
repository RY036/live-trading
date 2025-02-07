import {
  BookText,
  ChartCandlestick,
  CircleHelp,
  Columns2,
  FileChartColumnIncreasing,
  Settings,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const navigationItems = [
  { name: "Split Screen", link: "/split-screen", icon: <Columns2 /> },
  {
    name: "Advanced Chart",
    link: "/advanced-chart",
    icon: <ChartCandlestick />,
  },
  {
    name: "Performance Report",
    link: "/performance-report",
    icon: <FileChartColumnIncreasing />,
  },
  { name: "Update Logs", link: "/update-logs", icon: <BookText /> },
  { name: "Settings", link: "/settings/account", icon: <Settings /> },
  { name: "Help & FAQ's", link: "/help", icon: <CircleHelp /> },
];

export const NavigationBar: React.FC = () => {
  return (
    <div className="absolute left-1/2 top-full flex w-[90%] -translate-x-1/2 items-center justify-around rounded-bl-3xl rounded-br-3xl border-b border-l border-r border-t border-[#393b42] bg-[#1e1d22] px-10 py-6 text-white transition-colors">
      {navigationItems.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className="flex items-center gap-4 text-lg font-medium text-[#f3f3f3] hover:text-primary"
        >
          <span className="text-lg">{item.icon}</span>
          {item.name}
        </Link>
      ))}
    </div>
  );
};
