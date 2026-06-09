import { motion } from "motion/react";
import { Smartphone, WifiOff, FileSpreadsheet, ArrowRight, Calculator } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

export function AppCallout() {
  return (
    <section id="aplicativo" className="py-24 bg-brand-50 border-y border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-900 text-white rounded-sm mb-6">
              <Smartphone className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Inovação Tecnológica</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-stone-900 leading-[1.1] tracking-tight mb-6">
              GMS Inventário App
            </h2>
            <h3 className="text-xl md:text-2xl font-sans text-brand-600 font-medium mb-6">
              O Seu Inventário Florestal, Do Campo à Planilha.
            </h3>
            
            <p className="text-stone-600 leading-relaxed mb-8">
              Desenvolvemos um sistema comercial robusto que nós mesmos utilizamos. Ele garante rapidez na coleta, funcionamento offline impecável e processamento de dados seguro para acelerar o seu inventário florestal.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-sm bg-white border border-stone-200 flex items-center justify-center text-brand-600 shrink-0">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Cálculo Real</h4>
                  <p className="text-sm text-stone-600">Volume por árvore, conversão automática de CAP para DAP e resumo estatístico instantâneo. Acompanhe Volume Total (m³), Volume por hectare (M³/ha), Média de DAP/Altura e Coeficiente de Variação (CV%). Controle as suas médias enquanto ainda está no campo.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-sm bg-white border border-stone-200 flex items-center justify-center text-brand-600 shrink-0">
                  <WifiOff className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">100% Offline</h4>
                  <p className="text-sm text-stone-600">Continue trabalhando mesmo sem sinal. Sincronização automática na nuvem sem perda de dados.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-sm bg-white border border-stone-200 flex items-center justify-center text-brand-600 shrink-0">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Exportação</h4>
                  <p className="text-sm text-stone-600">Gere planilhas em Excel e arquivos KML do campo direto para o seu whatsApp e-mail em segundos.</p>
                </div>
              </div>
            </div>

            <a 
              href="https://site-gms-inventario.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#109BD8] text-white hover:bg-[#1C59A4] transition-colors rounded-sm font-bold uppercase tracking-widest text-xs shadow-md"
            >
              Conhecer o Aplicativo
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-4 text-xs font-medium text-stone-500 uppercase tracking-widest">
              Lançamento em breve
            </p>
          </div>
          
          <div className="relative">
            {/* Abstract visual representation of the app */}
            <div className="aspect-square bg-white rounded-xl shadow-2xl border border-stone-100 overflow-hidden relative">
              <div className="absolute inset-0 bg-[#F4F8FC] opacity-50" />
              <div className="absolute inset-0 bg-[radial-gradient(#109BD8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.05]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] flex flex-col gap-4">
                <div className="bg-white p-5 rounded-md border-l-4 border-l-[#259A6D] border border-y-stone-100 border-r-stone-100 relative shadow-md">
                   <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                     <span className="w-2 h-2 rounded-full bg-[#259A6D]"></span> Última Inserção
                   </div>
                   <div className="font-bold text-stone-900 text-lg">Eucalyptus u.</div>
                   <div className="text-sm text-brand-600 font-medium">DAP 28.5cm</div>
                   <div className="absolute right-5 top-1/2 -translate-y-1/2 w-8 h-8 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 text-xs font-bold">#12</div>
                </div>
                <div className="bg-white p-5 rounded-md border border-stone-200 relative opacity-70">
                   <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Inserção Anterior</div>
                   <div className="font-bold text-stone-900 text-lg">Eucalyptus u.</div>
                   <div className="text-sm text-brand-600 font-medium">DAP 15.2cm</div>
                   <div className="absolute right-5 top-1/2 -translate-y-1/2 w-8 h-8 bg-stone-50 rounded-full flex items-center justify-center text-stone-500 text-xs font-bold">#11</div>
                </div>
                <div className="bg-white p-5 rounded-md border border-stone-200 relative opacity-40">
                   <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Inserção</div>
                   <div className="font-bold text-stone-900 text-lg">Eucalyptus u.</div>
                   <div className="text-sm text-brand-600 font-medium">DAP 19.8cm</div>
                   <div className="absolute right-5 top-1/2 -translate-y-1/2 w-8 h-8 bg-stone-50 rounded-full flex items-center justify-center text-stone-500 text-xs font-bold">#10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
