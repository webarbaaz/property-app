import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

// ✅ Define Button Variants
const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm md:text-base",
        lg: "px-5 py-2.5 text-lg",
      },
      variant: {
        primary: "bg-black text-white hover:bg-gray-800",
        secondary:
          "bg-white/95 text-gray-800 hover:bg-gray-300 hover:opacity-80 focus:ring-blue-500",
        link: "text-gray-600 focus:ring-blue-500 hover:underline",
        outline:
          "border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-blue-500",
        ghost:
          "bg-transparent text-gray-800 hover:bg-gray-100 focus:ring-blue-500",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  }
);

// ✅ Define Button Props
export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  color?:
    | "custom"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "transparent";
  disabled?: boolean;
}

// ✅ Define Button Component
export const Button: React.FC<ButtonProps> = ({
  className,
  size,
  variant,
  color,
  fullWidth,
  disabled,
  isLoading,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        buttonVariants({ size, variant, color, fullWidth, disabled }),
        className
      )}
      disabled={disabled || isLoading}
      {...props}>
      {isLoading ? (
        <span className="flex items-center">
          <svg
            className="animate-spin h-5 w-5 mr-2 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
