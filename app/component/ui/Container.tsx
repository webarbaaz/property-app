import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils/cn";

// Define variants using cva
const containerVariants = cva("max-w-7xl mx-auto px-4", {
  variants: {
    variant: {
      default: "bg-white shadow-md",
      dark: "bg-gray-900 text-white",
      outline: "border border-gray-300",
      none: "",
    },
    size: {
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
      none: "",
    },
  },
  defaultVariants: {
    variant: "none",
    size: "none",
  },
});

// Define Props Type
type ContainerProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerVariants> & {
    className?: string;
  };

// Container Component
const Container: React.FC<ContainerProps> = ({
  className,
  variant,
  size,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(containerVariants({ variant, size }), className)}
      {...props}>
      {children}
    </div>
  );
};

export default Container;
