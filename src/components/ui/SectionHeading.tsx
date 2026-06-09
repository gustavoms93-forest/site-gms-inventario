import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, align = "center", className, light = false }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-4 mb-12", 
      align === "left" && "items-start text-left",
      align === "center" && "items-center text-center",
      align === "right" && "items-end text-right",
      className
    )}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight",
          light ? "text-white" : "text-brand-500"
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn(
            "text-lg md:text-xl max-w-2xl font-sans mt-2",
            light ? "text-stone-200" : "text-stone-600"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
