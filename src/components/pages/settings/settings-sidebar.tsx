"use client";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { id: "account", title: "Account" },
  { id: "notification", title: "Notification" },
  { id: "security", title: "Security & Privacy" },
  { id: "report-comm", title: "Report Comm" },
  { id: "help", title: "Help" },
  { id: "faqs", title: "FAQ's" },
];

export const SettingsSidebar: React.FC = () => {
  const pathName = usePathname();

  const isActive = (id: string) => {
    return pathName && pathName.includes(id);
  };

  return (
    <div className="sticky left-0 top-[115px] flex h-[82svh] w-[250px] flex-shrink-0 flex-grow-0 flex-col rounded-3xl bg-foreground p-6">
      <h3 className="mb-7 font-inter text-2xl font-semibold leading-normal text-white">
        Settings
      </h3>
      <nav className="flex-1 space-y-3">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={`/settings/${item.id}`}
            className={cn(
              "block h-12 items-center justify-start gap-2.5 rounded-xl px-6 py-3 text-[#f3f3f3] transition-colors duration-200 hover:bg-neutral-700",
              {
                "bg-primary text-background hover:bg-primary/80": isActive(
                  item.id,
                ),
              },
            )}
          >
            <span className="font-inter text-lg font-normal leading-normal">
              {item.title}
            </span>
          </Link>
        ))}
      </nav>
      <button className="mt-6 flex items-center rounded-md px-4 py-2 text-red-500 hover:bg-gray-800 focus:outline-none">
        <LogOut className="mr-3" />
        Logout
      </button>
    </div>
  );
};
