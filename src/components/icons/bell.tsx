import * as React from "react";
import { SVGProps } from "react";

export const BellIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M7.701 15.75a1.5 1.5 0 0 0 2.598 0M2.446 11.495A.75.75 0 0 0 3 12.75h12a.75.75 0 0 0 .555-1.255C14.557 10.467 13.5 9.375 13.5 6a4.5 4.5 0 1 0-9 0c0 3.374-1.058 4.467-2.054 5.495Z"
    />
  </svg>
);
