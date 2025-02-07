import * as React from "react";
import { SVGProps } from "react";

export const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      stroke="#0E291C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m5.5 8.25 5.5 5.5 5.5-5.5"
    />
  </svg>
);
