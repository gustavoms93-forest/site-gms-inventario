import { motion } from "motion/react";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const service = formData.get("service") as string;
    
    // Configurações do FormSubmit
    const data = Object.fromEntries(formData.entries());
    data._subject = `${name || 'Novo Contato'} - ${service}`; // Assunto dinâmico
    data._template = "table"; // Template visual para o email
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/gmsflorestal+site@gmail.com", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-24 bg-brand-950 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-white">
          <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.6,-46.4C91.4,-33.8,98,-18.6,98.3,-3.3C98.6,12,92.5,27.5,82.7,40.1C72.8,52.8,59.1,62.7,45.1,72.4C31.1,82.1,16.8,91.6,1.4,89.5C-14,87.4,-28.1,73.8,-42.6,62.9C-57,52,-71.8,43.8,-82.2,30.9C-92.6,18.1,-98.6,0.6,-96.2,-15.8C-93.7,-32.2,-82.8,-47.5,-70,-59.2C-57.2,-70.9,-42.6,-79,-28,-81.4C-13.4,-83.9,1.1,-80.7,15.6,-76.4C30.2,-72.2,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <SectionHeading 
              title="Pronto para avançar com o seu projeto?" 
              subtitle="Entre em contato com nossa equipe de especialistas. Responderemos de forma rápida e objetiva para garantir o andamento da sua licença."
              align="left"
              light
            />
            
            <div className="space-y-8 mt-12">
              <a href="https://wa.me/5589994673037" target="_blank" rel="noreferrer" className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-accent-500 transition-colors duration-300">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-1">Falar no WhatsApp</h4>
                  <p className="text-white text-xl font-heading font-bold group-hover:text-accent-400 transition-colors">Solicitar Orçamento Ágil</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-accent-500 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-1">E-mail Comercial</h4>
                  <p className="text-white text-lg font-heading font-bold">contato@gmsflorestal.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-accent-500 transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-1">Escritório Central</h4>
                  <p className="text-white text-lg font-heading font-bold">Atendimento: PI, MA, CE, GO</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-sm p-8 shadow-xl relative"
          >
            <h3 className="text-2xl font-heading font-bold text-stone-900 mb-6">Envie uma Mensagem</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input type="text" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-widest text-stone-700 mb-2">Nome Completo</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-sm border border-stone-200 focus:outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500 transition-shadow outline-none" placeholder="João da Silva" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-[10px] font-bold uppercase tracking-widest text-stone-700 mb-2">Empresa</label>
                  <input type="text" id="company" name="company" className="w-full px-4 py-3 rounded-sm border border-stone-200 focus:outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500 transition-shadow outline-none" placeholder="Sua Empresa Ltda" />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest text-stone-700 mb-2">E-mail Profissional</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-sm border border-stone-200 focus:outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500 transition-shadow outline-none" placeholder="joao@empresa.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-widest text-stone-700 mb-2">Telefone / WhatsApp</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-sm border border-stone-200 focus:outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500 transition-shadow outline-none" placeholder="(00) 00000-0000" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-[10px] font-bold uppercase tracking-widest text-stone-700 mb-2">Serviço de Interesse</label>
                <select id="service" name="service" required className="w-full px-4 py-3 rounded-sm border border-stone-200 focus:outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500 transition-shadow outline-none bg-white">
                  <option>Inventário Florestal</option>
                  <option>Estudos Ambientais</option>
                  <option>Licenciamento</option>
                  <option>Outros / Consultoria</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-widest text-stone-700 mb-2">Detalhes do Projeto</label>
                <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 rounded-sm border border-stone-200 focus:outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500 transition-shadow outline-none resize-none" placeholder="Conte-nos brevemente o que você precisa..."></textarea>
              </div>

              <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
              </Button>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 text-green-700 text-sm rounded-sm border border-green-200">
                  Sua solicitação foi enviada com sucesso! Em breve entraremos em contato.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 text-red-700 text-sm rounded-sm border border-red-200">
                  Houve um erro ao enviar sua mensagem. Por favor, tente novamente ou nos chame no WhatsApp.
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
