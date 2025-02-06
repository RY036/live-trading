"use client";
import { AllMenuIcon } from "@/components/icons/all-menu";
import { BellIcon } from "@/components/icons/bell";
import { LogoIcon } from "@/components/icons/logo";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import { NavigationBar } from "./navigation-bar";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-border bg-background px-6 py-5">
      {openMenu && <NavigationBar />}
      <div className="flex items-center gap-[92px]">
        <LogoIcon width={132} height={50} />
        <button
          className="flex cursor-pointer items-center"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <AllMenuIcon />
          <div className="ml-3 font-inter text-lg font-medium text-[#01e165]">
            All Menu
          </div>
          <ChevronDown
            width={18}
            height={18}
            className={cn("ml-1 text-primary transition-all", {
              "rotate-180": openMenu,
            })}
          />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="">
          <Input
            placeholder="Search"
            className="w-[369px] rounded-xl px-6 pl-[52px] placeholder:text-zinc-300"
            prefixIcon={<Search width={18} height={18} />}
          />
        </div>

        <button
          type="button"
          className="flex aspect-square h-[42px] w-[42px] items-center justify-center rounded-xl bg-foreground"
        >
          <BellIcon className="text-white" width={18} height={18} />
        </button>

        <div className="flex items-center gap-2">
          <Avatar className="h-[42px] w-[42px]">
            <AvatarFallback>RA</AvatarFallback>
          </Avatar>

          <div>
            <p className="font-inter text-base font-medium leading-5 text-white">
              Rahul Arya
            </p>
            <span className="text-sm font-medium text-[#9798a1]">
              jerome11@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
