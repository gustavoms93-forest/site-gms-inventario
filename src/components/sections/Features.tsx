import { motion } from "motion/react";
import { CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const features = [
  {
    icon: <CheckCircle2 />,
    title: "Alta Qualidade Técnica",
    description: "Laudos e estudos elaborados com rigor acadêmico e em conformidade estrita com a legislação ambiental vigente.",
  },
  {
    icon: <Users />,
    title: "Atendimento Especializado",
    description: "Suporte personalizado durante todas as etapas do projeto, com total transparência e comunicação direta.",
  },
  {
    icon: <TrendingUp />,
    title: "Soluções Integradas",
    description: "Cuidamos de 100% do processo ambiental, permitindo que você foque no core business da sua empresa.",
  },
  {
    icon: <Zap />,
    title: "Agilidade e Precisão",
    description: "Processos otimizados com tecnologia de ponta para entregas dentro dos prazos mais desafiadores do mercado.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Por que escolher a GMS Florestal?" 
          subtitle="Nossos diferenciais vão além do básico. Entregamos valor real para viabilizar e proteger o seu negócio."
        />

        <div className="grid sm:grid-cols-2 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex gap-6 p-8 rounded-sm bg-white border border-stone-200 hover:border-accent-500 transition-colors duration-300"
            >
              <div className="shrink-0 w-12 h-12 rounded-sm bg-accent-50/50 flex items-center justify-center text-accent-500 [&>svg]:w-6 [&>svg]:h-6 border border-accent-100">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-2">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
