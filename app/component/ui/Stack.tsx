import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";
import React from "react";

// ✅ Stack (Flexible Stack with Responsive Direction)
const stackVariants = cva("flex flex-col", {
  variants: {
    spacing: {
      "0": "space-y-0",
      "1": "space-y-1",
      "2": "space-y-2",
      "4": "space-y-4",
      "6": "space-y-6",
      "8": "space-y-8",
      "10": "space-y-10",
      "12": "space-y-12",
    },
  },
  defaultVariants: {
    spacing: "2",
  },
});

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {
  asChild?: boolean;
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, spacing, children, ...props }, ref) => {
    const Comp = "div";
    return (
      <Comp
        className={cn(stackVariants({ spacing, className }))}
        ref={ref}
        {...props}>
        {children}
      </Comp>
    );
  }
);
Stack.displayName = "Stack";

export default Stack;
