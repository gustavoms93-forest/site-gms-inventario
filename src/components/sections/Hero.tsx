import { motion } from "motion/react";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 overflow-hidden bg-brand-50">
      <div className="absolute inset-0 bg-[radial-gradient(#109BD8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.05]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-4xl py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-brand-100 border border-brand-200 text-brand-700 mb-8"
          >
            <span className="text-[10px] font-bold tracking-widest uppercase">Referência em Licenciamento</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-extrabold font-heading text-stone-900 leading-[1.1] tracking-tight mb-8"
          >
            Soluções Ambientais com <br/> <span className="text-accent-500">Excelência Técnica.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-stone-600 mb-12 max-w-2xl leading-relaxed"
          >
            Mais de 325 cidades atendidas com estudos ambientais, inventários florestais e consultoria técnica especializada de alto padrão.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button 
              variant="accent" 
              size="lg" 
              className="w-full sm:w-auto px-10 py-6 text-sm"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Orçamento
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto px-10 py-6 text-sm"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça a GMS
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
