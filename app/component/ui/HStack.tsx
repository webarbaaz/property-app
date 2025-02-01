import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

// ✅ HStack (Horizontal Stack)
const hStackVariants = cva("flex items-center", {
  variants: {
    spacing: {
      "0": "space-x-0",
      "1": "space-x-1",
      "2": "space-x-2",
      "3": "space-x-3",
      "4": "space-x-4",
      "5": "space-x-5",
      "6": "space-x-6",
      "8": "space-x-8",
      "10": "space-x-10",
      "12": "space-x-12",
      "16": "space-x-16",
      "20": "space-x-20",
    },
    justify: {
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    alignItems: {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
  },
  defaultVariants: {
    spacing: "2",
    justify: "start",
    alignItems: "center",
  },
});

export const HStack: React.FC<
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof hStackVariants>
> = ({ className, spacing, justify, alignItems, children, ...props }) => {
  return (
    <div
      className={cn(
        hStackVariants({ spacing, justify, alignItems }),
        className
      )}
      {...props}>
      {children}
    </div>
  );
};

export default HStack;
