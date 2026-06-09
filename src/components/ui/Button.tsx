import { cn } from "../../lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion, HTMLMotionProps } from "motion/react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
}

type MotionButtonProps = ButtonProps & Omit<HTMLMotionProps<"button">, keyof ButtonProps>;

export const Button = forwardRef<HTMLButtonElement, MotionButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-sm text-xs font-bold uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary: "bg-brand-500 text-white hover:bg-brand-600 shadow-md shadow-brand-500/10",
      secondary: "bg-brand-100 text-brand-500 hover:bg-brand-200",
      outline: "border border-brand-500 bg-transparent hover:bg-brand-500 hover:text-white text-brand-500",
      ghost: "hover:bg-brand-100 text-stone-600 hover:text-stone-900",
      accent: "bg-accent-500 text-white hover:bg-accent-600 shadow-md shadow-accent-500/20",
    };

    const sizes = {
      sm: "h-9 px-4",
      md: "h-12 px-8",
      lg: "h-14 px-10 text-sm",
    };

    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
