import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";

// ✅ Grid (Responsive Grid System)
const gridVariants = cva("grid", {
  variants: {
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "md:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-4",
      sm: "sm:grid-cols-1",
      md: "md:grid-cols-2",
      lg: "lg:grid-cols-3",
      xl: "xl:grid-cols-4",
      max4: "md:grid-cols-3 lg:grid-cols-4",
      max5: "md:grid-cols-3 lg:grid-cols-5",
    },
    gap: {
      base: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    },
  },
  defaultVariants: {
    cols: 3,
    gap: "md",
  },
});

export const Grid: React.FC<
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof gridVariants>
> = ({ className, cols, gap, children, ...props }) => {
  return (
    <div className={cn(gridVariants({ cols, gap }), className)} {...props}>
      {children}
    </div>
  );
};
