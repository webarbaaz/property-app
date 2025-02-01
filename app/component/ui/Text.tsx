import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/utils/cn";

// ✅ Define Text Variants
const textVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
    },
    weight: {
      thin: "font-thin",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
    },
    color: {
      primary: "text-blue-600",
      secondary: "text-gray-600",
      success: "text-green-600",
      danger: "text-red-600",
      warning: "text-yellow-600",
      white: "text-white",
      black: "text-black",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    responsive: {
      sm: "sm:text-sm",
      md: "md:text-base",
      lg: "lg:text-lg",
      xl: "xl:text-xl",
    },
  },
  defaultVariants: {
    size: "md",
    weight: "normal",
    color: "black",
    align: "left",
  },
});

// ✅ Define Text Component
export const Text: React.FC<
  React.HTMLAttributes<HTMLParagraphElement> & VariantProps<typeof textVariants>
> = ({
  className,
  size,
  weight,
  color,
  align,
  responsive,
  children,
  ...props
}) => {
  return (
    <p
      className={cn(
        textVariants({ size, weight, color, align, responsive }),
        className
      )}
      {...props}>
      {children}
    </p>
  );
};

export default Text;
