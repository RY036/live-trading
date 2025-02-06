import * as React from "react";

import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input"> & {
  suffixIcon?: React.ReactNode;
  prefixIcon?: React.ReactNode;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, suffixIcon, prefixIcon, ...props }, ref) => {
    return (
      <div className="relative w-auto">
        {prefixIcon && (
          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-white">
            {prefixIcon}
          </span>
        )}
        {suffixIcon && (
          <span className="absolute left-0 top-0">{suffixIcon}</span>
        )}

        <input
          type={type}
          className={cn(
            "flex h-[42px] w-full rounded-[12px] border border-input bg-foreground px-3 py-1 text-base text-white shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
