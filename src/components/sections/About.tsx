import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

import { Carousel } from "../ui/Carousel";

export function About() {
  const carouselImages = Array.from({ length: 16 }, (_, i) => `/foto${i + 1}.jpg`);

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden relative">
              <Carousel images={carouselImages} />
            </div>
            
            {/* Experience Badge */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-accent-500 text-white p-8 rounded-sm shadow-xl hidden md:block max-w-xs"
            >
              <div className="text-4xl font-heading font-bold mb-2">+100</div>
              <div className="text-sm text-accent-50 leading-snug">
                Projetos realizados com excelência técnica e aprovação dos órgãos ambientais.
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div>
            <SectionHeading 
              title="Transformando desafios em soluções sustentáveis" 
              align="left"
              subtitle="Fundada em dezembro de 2022 por Gustavo Moreira Saraiva, a GMS Florestal nasceu com a missão de elevar o padrão da consultoria ambiental e engenharia florestal no Brasil."
            />
            
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed mb-8">
              <p>
                Nosso foco é oferecer segurança técnica e jurídica para o licenciamento do seu empreendimento, através de estudos ambientais rigorosos, inventários precisos e soluções estratégicas que unem desenvolvimento ao respeito ambiental.
              </p>
              <p>
                Com forte presença regional e expansão contínua, unimos metodologias inovadoras e profissionais altamente qualificados para entregar agilidade sem comprometer a exatidão.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Atendimento a todas as normativas ambientais vigentes.",
                "Equipe multidisciplinar em engenharia e gestão ambiental.",
                "Compromisso intrínseco com prazos e precisão técnica.",
                "Experiência consolidadada em múltiplos ecossistemas e biomas."
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                  <span className="text-stone-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
