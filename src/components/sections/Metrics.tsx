import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { SectionHeading } from "../ui/SectionHeading";

// A small hook or component to animate numbers
function AnimatedCounter({ from = 0, to, duration = 2 }: { from?: number; to: number; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let start = null;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * (to - from) + from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(to);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count}</span>;
}

const metrics = [
  { value: 325, suffix: "+", label: "Cidades Atendidas" },
  { value: 4, suffix: "", label: "Estados" },
  { value: 100, suffix: "+", label: "Projetos Realizados" },
  { value: 2022, suffix: "", label: "Ano de Fundação" },
];

export function Metrics() {
  return (
    <section id="resultados" className="py-24 bg-brand-950 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 -right-24 w-[30rem] h-[30rem] bg-brand-500/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Números que Comprovam Nossa Excelência" 
          subtitle="Construindo um legado de aprovações e sucesso em múltiplos ecossistemas do Brasil."
          light
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center p-6 border border-accent-600 rounded-sm bg-brand-600"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-accent-400 mb-2 flex items-center justify-center">
                <AnimatedCounter to={metric.value} duration={2.5} />
                <span className="text-accent-500">{metric.suffix}</span>
              </div>
              <div className="text-brand-200 font-bold uppercase tracking-widest text-[10px] md:text-xs mt-2">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
