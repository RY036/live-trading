// app/page.tsx
"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { scroller } from "react-scroll";
import HomeTemplate from "@/components/templates/homeTemplate";

export default function HomePage() {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scrollTo");

  useEffect(() => {
    if (scrollTo) {
      scroller.scrollTo(scrollTo, { smooth: true, duration: 500 });
    }
  }, [scrollTo]);

  return <HomeTemplate />;
}
