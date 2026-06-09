import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { MapPin } from "lucide-react";

export function GeographicScope() {
  const states = [
    { name: "Piauí", abbr: "PI", highlight: true },
    { name: "Maranhão", abbr: "MA", highlight: true },
    { name: "Ceará", abbr: "CE", highlight: true },
    { name: "Goiás", abbr: "GO", highlight: true },
  ];

  return (
    <section className="py-24 bg-white border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              title="Forte Presença Regional" 
              subtitle="Atuamos com conhecimento aprofundado nas particularidades ambientais de diferentes biomas, levando nossa excelência para múltiplos estados do Brasil."
              align="left"
            />
            
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {states.map((state, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4 p-4 rounded-sm border border-stone-200 bg-stone-50 hover:border-brand-500 hover:bg-white transition-all group cursor-default"
                >
                  <div className="w-12 h-12 rounded-sm bg-brand-100 text-brand-500 flex items-center justify-center font-bold tracking-wider group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    {state.abbr}
                  </div>
                  <div>
                    <span className="font-sans font-bold text-stone-900 block">{state.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <p className="mt-8 text-stone-500 font-medium italic flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-500" />
              Sede em estruturação estratégica para atendimento dedicado.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-full min-h-[400px] md:min-h-[500px] rounded-sm overflow-hidden bg-stone-100 shadow-sm border border-stone-200"
          >
            {/* Overlay invisível para bloquear a interação com o menu de compartilhamento do Google Maps no canto superior direito */}
            <div className="absolute top-0 right-0 w-24 h-16 z-10 bg-transparent pointer-events-auto"></div>
            
            <iframe 
              src="https://www.google.com/maps/d/u/0/embed?mid=1qxS55YxYAJimnJeB-HQYAqWvro2UkIs" 
              width="100%" 
              height="100%" 
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
