import { motion } from "motion/react";
import { TreePine, Leaf, Map, ClipboardList, ShieldCheck, Sprout, MapPinned, FileSearch } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const services = [
  {
    icon: <TreePine />,
    title: "Inventário Florestal",
    description: "Levantamento quantitativo e qualitativo das espécies arbóreas, garantindo precisão volumétrica para intervenções.",
  },
  {
    icon: <ClipboardList />,
    title: "Censo Florestal",
    description: "Medição e identificação individual de todas as árvores em uma área específica para projetos de supressão seletiva.",
  },
  {
    icon: <Leaf />,
    title: "Levantamento Florístico",
    description: "Identificação detalhada de espécies vegetais para embasar estudos de impacto e preservação ambiental.",
  },
  {
    icon: <FileSearch />,
    title: "Estudos Ambientais",
    description: "Elaboração de EAI, DTA, EAS e RAS, e outros estudos obrigatórios para a viabilidade do seu negócio.",
  },
  {
    icon: <ShieldCheck />,
    title: "Licenciamento Ambiental",
    description: "Gestão completa do processo junto aos órgãos ambientais (LP, LI, LO), evitando embargos e multas.",
  },
  {
    icon: <Sprout />,
    title: "PRAD",
    description: "Plano de Recuperação de Áreas Degradadas, desenvolvendo técnicas eficientes para restauração ecológica.",
  },
  {
    icon: <MapPinned />,
    title: "Georreferenciamento / GIS",
    description: "Mapeamento digital avançado e topografia para demarcação exata de propriedades e reservas legais.",
  },
  {
    icon: <Map />,
    title: "Consultoria Especializada",
    description: "Acompanhamento estratégico, auditorias e gestão ambiental continuada para o seu empreendimento.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Nossas Especialidades e Serviços" 
          subtitle="Oferecemos um portfólio completo de soluções ambientais, desenvolvidas com absoluto rigor técnico e respaldo científico."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-stone-50 rounded-sm p-6 border border-stone-200 hover:border-accent-500 hover:shadow-lg hover:shadow-accent-500/5 transition-all duration-300 group cursor-default"
            >
              <div className="text-accent-500 mb-4 [&>svg]:w-6 [&>svg]:h-6">
                {service.icon}
              </div>
              <h3 className="text-sm font-bold text-stone-900 mb-2 uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="text-stone-600 leading-tight text-xs">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
