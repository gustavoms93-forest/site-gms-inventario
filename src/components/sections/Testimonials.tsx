import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const testimonials = [
  {
    content: "A GMS Florestal foi crucial para o licenciamento do nosso projeto. A agilidade na entrega do inventário florestal e a precisão do laudo impressionaram nossos auditores.",
    author: "Diretor de Engenharia",
    company: "Construtora Regional",
    rating: 5,
  },
  {
    content: "Excelente atendimento! O estudo ambiental que realizaram foi extremamente completo e nos evitou muitas dores de cabeça junto ao órgão ambiental estadual. Recomendo muito.",
    author: "Gerente de Empreendimento",
    company: "Setor Energético",
    rating: 5,
  },
  {
    content: "Trabalhar com a equipe liderada pelo Gustavo nos deu a segurança necessária para avançar nossa expansão no Maranhão e no Piauí. Excelência técnica inquestionável.",
    author: "Sócio Administrador",
    company: "Holding Agroindustrial",
    rating: 5,
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Casos de Sucesso" 
          subtitle="A confiança não se promete, se constrói. Veja o que dizem aqueles que viabilizaram seus negócios com a nossa consultoria."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white border border-stone-200 rounded-sm p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-stone-200" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-500 text-brand-500" />
                ))}
              </div>

              <p className="text-stone-700 leading-relaxed mb-8">
                "{item.content}"
              </p>

              <div className="mt-auto flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-500 rounded-sm flex items-center justify-center text-white font-bold font-sans">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-stone-900 text-sm">{item.author}</div>
                  <div className="text-[10px] uppercase tracking-widest text-stone-500 mt-1">{item.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
