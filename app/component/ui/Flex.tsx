import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";

const flexVariants = cva("flex", {
  variants: {
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      sm: "sm:justify-start",
      md: "md:justify-center",
      lg: "lg:justify-between",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      sm: "sm:items-start",
      md: "md:items-center",
      lg: "lg:items-end",
    },
  },
});

export const Flex: React.FC<
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof flexVariants>
> = ({ className, justify, align, children, ...props }) => {
  return (
    <div className={cn(flexVariants({ justify, align }), className)} {...props}>
      {children}
    </div>
  );
};

export default Flex;
