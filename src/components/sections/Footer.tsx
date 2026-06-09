import { Trees } from "lucide-react";
import { logo1Base64 } from "../../logos";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-600 pt-16 pb-8 border-t border-brand-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1 border-brand-600">
            <div className="flex items-center mb-6">
              <a href="#" className="flex items-center">
                <img src={logo1Base64} alt="GMS Florestal Logo" className="h-[72px] md:h-20 w-auto object-contain" />
              </a>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed pr-4 font-sans">
              Excelência técnica em engenharia florestal e consultoria ambiental para impulsionar o seu negócio com total segurança jurídica.
            </p>
          </div>

          <div>
            <h4 className="text-white text-[10px] uppercase tracking-widest font-bold mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><a href="#sobre" className="text-stone-400 hover:text-white transition-colors text-sm">Sobre Nós</a></li>
              <li><a href="#resultados" className="text-stone-400 hover:text-white transition-colors text-sm">Números e Resultados</a></li>
              <li><a href="#servicos" className="text-stone-400 hover:text-white transition-colors text-sm">Nossos Serviços</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] uppercase tracking-widest font-bold mb-6">Serviços</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors text-sm">Inventário Florestal</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors text-sm">Estudos Ambientais</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors text-sm">Licenciamento Integrado</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] uppercase tracking-widest font-bold mb-6">Contato Oficial</h4>
            <ul className="space-y-4 text-sm text-stone-400">
              <li>WhatsApp: (89) 99467-3037</li>
              <li>E-mail: contato@gmsflorestal.com.br</li>
              <li>Atendimento: PI, MA, CE, GO</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm font-medium">
            &copy; {currentYear} GMS Florestal. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-stone-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
