"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { scroller } from "react-scroll";
import HomeTemplate from "@/components/templates/homeTemplate";

export default function HomePage() {
  const searchParams = useSearchParams() ?? new URLSearchParams(); // Ensuring it's never null
  const scrollTo = searchParams.get("scrollTo") || ""; // Default to empty string

  useEffect(() => {
    if (scrollTo) {
      scroller.scrollTo(scrollTo, { smooth: true, duration: 500 });
    }
  }, [scrollTo]);

  return <HomeTemplate />;
}
