import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LOGO_TOP, LOGO_BOTTOM } from './logos';
import {
  WifiOff,
  Calculator,
  FileSpreadsheet,
  Settings,
  ShieldAlert,
  Map as MapIcon,
  CheckCircle2,
  ChevronRight,
  Download,
  Smartphone,
  Check,
  Share2,
  Menu,
  Leaf,
  PieChart,
  ScanLine,
  Barcode,
  ChevronLeft,
  Search,
  Plus,
  TreePine,
  Navigation,
  Info
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 }
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-blue-200 selection:text-brand-blue-900 bg-brand-bg">
      <Navbar />
      <Hero />
      <Benefits />
      <Features />
      <Reports />
      <Pricing />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1655af] shadow-md py-3 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={LOGO_TOP} alt="GMS Inventário Logo" className="w-10 h-10 object-contain mix-blend-screen" />
          <span className="text-xl font-bold tracking-tight">
            GMS Inventário
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#benefits" className="text-white/80 hover:text-white transition-colors">Benefícios</a>
          <a href="#features" className="text-white/80 hover:text-white transition-colors">Funcionalidades</a>
          <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Planos</a>
          <button className="bg-white text-[#1655af] hover:bg-slate-50 px-5 py-2 rounded-full transition-all text-sm font-bold shadow-sm">
            Teste Grátis no Campo
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
    <section className="relative pt-20 pb-0 overflow-hidden bg-brand-bg lg:h-[800px]">
      <div className="flex flex-col lg:flex-row h-full max-w-7xl mx-auto bg-white lg:shadow-2xl lg:overflow-hidden relative z-10 w-full mb-10 mt-6 lg:rounded-2xl border-x border-slate-100">
        
        {/* Left Content */}
        <div className="w-full lg:w-7/12 px-6 md:px-12 py-16 lg:py-24 flex flex-col justify-center relative z-10 bg-white">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue-50 text-brand-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6 w-fit border border-brand-blue-100">
              LANÇAMENTO EM BREVE
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              O Seu Inventário Florestal, <br className="hidden md:block"/>
              <span className="text-brand-blue-600">Do Campo à Planilha.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Um sistema comercial robusto que garante rapidez na coleta, funcionamento offline impecável e processamento de dados seguro para o seu licenciamento ambiental.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
              <button 
                onClick={() => setShowModal(true)}
                className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-brand-blue-500/30 transition-all w-full sm:w-auto"
              >
                Baixar Agora
              </button>
              <div className="text-sm text-slate-400 font-medium sm:border-l border-slate-200 sm:pl-4 py-2 hidden sm:block">
                Desenvolvido por especialistas<br/>da <strong className="text-brand-green-600">GMS Florestal Ltda</strong>.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-5/12 bg-slate-900 relative overflow-hidden flex items-center justify-center py-20 lg:py-12 border-t lg:border-t-0 lg:border-l border-slate-800">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
          <div className="absolute top-20 -right-20 w-64 h-64 bg-brand-blue-500/20 rounded-full blur-3xl z-0"></div>
          <div className="absolute bottom-10 -left-10 w-48 h-48 bg-brand-green-500/30 rounded-full blur-2xl z-0"></div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 w-64 md:w-[280px]"
          >
            {/* Phone Mockup Re-styled Sleek */}
            <div className="w-full h-[550px] bg-white rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden relative mx-auto flex flex-col font-sans">
              <div className="absolute top-0 w-full h-6 bg-slate-800 flex justify-center items-end pb-1 z-20">
                <div className="w-16 h-4 bg-slate-900 rounded-full"></div>
              </div>
              <div className="w-full h-full flex flex-col pt-8 bg-[#fafafa]">
                
                {/* Header */}
                <div className="flex items-center gap-3 px-4 py-3 bg-white border-b border-slate-100">
                  <ChevronLeft className="w-5 h-5 text-slate-600" />
                  <div className="flex flex-col text-brand-blue-600">
                     <TreePine className="w-5 h-5 -mb-1" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-[17px]">Coleta de Dados</h3>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
                  {/* Tabs */}
                  <div className="bg-slate-100 p-1 rounded-xl flex gap-1 shadow-inner">
                    <div className="bg-white text-brand-blue-600 flex-1 py-2.5 rounded-lg text-center text-sm font-bold shadow-sm border border-slate-200">
                      Novo Indivíduo
                    </div>
                    <div className="text-slate-500 flex-1 py-2.5 rounded-lg text-center text-sm font-medium">
                      Fuste Adicional
                    </div>
                  </div>

                  {/* Arvore info */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-sm flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-extrabold text-slate-900 text-[15px]">Árvore 4</span>
                      <span className="text-xs text-slate-500 font-bold mt-0.5">Fuste 01</span>
                    </div>
                    <button className="flex shrink-0 items-center gap-1.5 bg-[#262423] border border-[#363433] text-white px-3.5 py-2 rounded-[14px] text-xs font-bold shadow-sm hover:bg-black transition-colors whitespace-nowrap">
                      <Navigation className="w-3.5 h-3.5 stroke-[2.5]" />
                      Capturar GPS
                    </button>
                  </div>

                  {/* Especie */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 tracking-wider">ESPÉCIE</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-slate-400" />
                      </div>
                      <div className="w-full pl-9 pr-3 py-3 border border-slate-200 rounded-xl bg-white text-slate-900 text-base shadow-sm">
                        jatoba
                      </div>
                    </div>
                  </div>

                  {/* CAP / DAP Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 tracking-wider">CAP</label>
                      <div className="relative">
                        <div className="w-full pl-3 pr-8 py-3 border border-slate-200 rounded-xl bg-white text-slate-900 text-lg tracking-widest text-center shadow-sm font-medium">
                          68,5
                        </div>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-sm font-bold text-slate-400">cm</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 tracking-wider">DAP</label>
                      <div className="relative">
                        <div className="w-full pl-3 pr-8 py-3 border border-slate-200 rounded-xl bg-white text-slate-900 text-lg tracking-widest text-center shadow-sm font-medium">
                          21,8
                        </div>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-sm font-bold text-slate-400">cm</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Numero Plaqueta */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 tracking-wider">NUMERO PLAQUETA</label>
                    <div className="relative">
                      <div className="w-full pl-4 pr-12 py-3.5 border border-slate-200 rounded-xl bg-white text-slate-900 text-base font-bold shadow-sm">
                        5060
                      </div>
                      <div className="absolute inset-y-0 right-1.5 flex items-center">
                        <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors shadow-sm">
                          <Barcode className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Alturas Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 tracking-wider">ALT. TOT (M)</label>
                      <div className="w-full px-3 py-3.5 border border-slate-200 rounded-xl bg-white text-slate-900 text-lg tracking-widest text-center shadow-sm font-medium">
                        7,5
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 tracking-wider">ALT. COM (M)</label>
                      <div className="w-full px-3 py-3.5 border border-slate-200 rounded-xl bg-white text-slate-300 text-lg tracking-widest text-center shadow-sm font-medium">
                        0,0
                      </div>
                    </div>
                  </div>

                  {/* Qualidade do Fuste */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-900">Qualidade do Fuste (1-4)</span>
                      <Info className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <button className="py-2 border border-slate-200 bg-white rounded-xl font-bold text-slate-900 hover:bg-slate-50 shadow-sm text-sm">1</button>
                      <button className="py-2 border border-slate-200 bg-white rounded-xl font-bold text-slate-900 hover:bg-slate-50 shadow-sm text-sm">2</button>
                      <button className="py-2 border border-slate-200 bg-white rounded-xl font-bold text-slate-900 hover:bg-slate-50 shadow-sm text-sm">3</button>
                      <button className="py-2 border border-slate-200 bg-white rounded-xl font-bold text-slate-900 hover:bg-slate-50 shadow-sm text-sm">4</button>
                    </div>
                  </div>

                  {/* Sanidade da Arvore */}
                  <div className="space-y-2 pb-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-900">Sanidade da Árvore (1-4)</span>
                      <Info className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <button className="py-2 border border-slate-200 bg-white rounded-xl font-bold text-slate-900 hover:bg-slate-50 shadow-sm text-sm">1</button>
                      <button className="py-2 border border-slate-200 bg-white rounded-xl font-bold text-slate-900 hover:bg-slate-50 shadow-sm text-sm">2</button>
                      <button className="py-2 border border-slate-200 bg-white rounded-xl font-bold text-slate-900 hover:bg-slate-50 shadow-sm text-sm">3</button>
                      <button className="py-2 border border-slate-200 bg-white rounded-xl font-bold text-slate-900 hover:bg-slate-50 shadow-sm text-sm">4</button>
                    </div>
                  </div>

                  {/* Observação */}
                  <div className="space-y-1.5 pb-24">
                    <label className="text-xs font-bold text-slate-700 tracking-wider">OBSERVAÇÃO</label>
                    <textarea 
                      className="w-full h-20 px-3 py-2 border border-slate-200 rounded-xl bg-white text-slate-500 text-[13px] placeholder:text-slate-400 resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500"
                      placeholder="Observações gerais da árvore (opcional)"
                    ></textarea>
                  </div>
                </div>

                {/* Bottom Actions Fixed Area */}
                <div className="absolute bottom-0 w-full bg-white border-t border-slate-100 p-4 pt-3 space-y-3 z-30 pb-6 rounded-b-[2.5rem]">
                  <button className="w-full py-3.5 border border-brand-blue-200 bg-white text-brand-blue-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-blue-50 transition-colors shadow-sm text-sm">
                    <Plus className="w-4 h-4" />
                    Salvar e Add Fuste
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="w-full py-[14px] border border-slate-200 bg-white text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-colors shadow-sm text-sm">
                      Cancelar
                    </button>
                    <button className="w-full py-[14px] bg-[#18539e] text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-800 transition-colors shadow-md text-sm px-4">
                      <Check className="w-4 h-4 shrink-0 stroke-[3]" />
                      <div className="flex-1 text-center -ml-2 leading-tight">
                        Salvar<br/>Árvore
                      </div>
                    </button>
                  </div>
                </div>

              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>

    {/* Launch Modal */}
    {showModal && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center"
        >
          <div className="w-16 h-16 bg-brand-blue-50 text-brand-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Smartphone className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">O lançamento está próximo!</h3>
          <p className="text-slate-600 mb-8 leading-relaxed font-medium">
            O aplicativo GMS Inventário será lançado em breve nas lojas. Convidamos você a acompanhar nossas novidades e ser um dos primeiros a testar!
          </p>
          <div className="space-y-3">
            <a 
              href="https://www.instagram.com/gmsinvetario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full py-4 bg-brand-blue-500 hover:bg-brand-blue-600 text-white rounded-xl font-bold transition-colors"
            >
              Acompanhar no Instagram
            </a>
            <button 
              onClick={() => setShowModal(false)}
              className="block w-full py-4 text-slate-500 hover:text-slate-700 font-bold transition-colors"
            >
              Fechar
            </button>
          </div>
        </motion.div>
      </div>
    )}
    </>
  );
}

function Benefits() {
  const benefits = [
    {
      icon: WifiOff,
      title: '100% Offline',
      description: 'Continue trabalhando mesmo sem sinal. O sistema salva localmente e sincroniza automaticamente com a nuvem quando detecta conexão. Sem perdas.'
    },
    {
      icon: Calculator,
      title: 'Cálculo Real',
      description: 'Volume por árvore, conversão automática de CAP para DAP e resumo estatístico instantâneo. Acompanhe Volume Total (m³), Volume por hectare (M³/ha), Média de DAP/Altura e Coeficiente de Variação (CV%) . Controle as suas médias enquanto ainda está no campo.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Exportação',
      description: 'Gere planilhas em Excel formatadas nos padrões corporativos e arquivos KML espaciais. Envie por WhatsApp ou E-mail da sua tenda no campo.'
    },
    {
      icon: PieChart,
      title: 'Suficiência Amostral',
      description: 'Calcule o erro de amostragem em tempo real. Saiba na hora se o número de parcelas atingiu a precisão estatística exigida pelo órgão ambiental, evitando retornos desnecessários ao campo.'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-brand-bg relative z-20 -mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-white p-6 md:p-8 rounded-2xl border border-brand-blue-100 shadow-sm"
            >
              <div className="w-14 h-14 bg-brand-blue-50 text-brand-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <b.icon className="w-7 h-7 stroke-[1.5]" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-tighter">{b.title}</h4>
              <p className="text-slate-500 leading-relaxed text-[13px] font-medium">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-brand-blue-600 uppercase mb-3">O Motor do Sistema</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Projetado por quem vive a floresta.</h3>
        </motion.div>

        {/* Block 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="aspect-square bg-brand-bg rounded-[3rem] border border-slate-100 p-8 relative flex items-center justify-center">
               <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-30 rounded-[3rem]"></div>
               <div className="relative z-10 w-full max-w-sm bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 border border-brand-blue-100">
                 <div className="flex items-center gap-3 mb-6">
                   <Settings className="text-brand-blue-600 w-6 h-6" />
                   <h4 className="font-bold text-lg text-slate-900">Metodologia</h4>
                 </div>
                 <div className="space-y-4">
                   <div className="p-3 rounded-lg border border-brand-blue-200 bg-brand-blue-50 flex justify-between items-center">
                     <span className="font-medium text-brand-blue-900 text-sm">Amostragem Casual Simples</span>
                     <CheckCircle2 className="text-brand-blue-600 w-5 h-5" />
                   </div>
                   <div className="p-3 rounded-lg border border-slate-100 text-slate-500 text-sm">Amostragem Estratificada</div>
                   <div className="p-3 rounded-lg border border-slate-100 text-slate-500 text-sm">Censo 100%</div>
                 </div>
                 <div className="mt-6 pt-6 border-t border-slate-100">
                   <div className="flex justify-between text-sm mb-2">
                     <span className="text-slate-500">Erro Admitido</span>
                     <span className="font-bold text-slate-900">10%</span>
                   </div>
                   <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                     <div className="h-full bg-brand-green-500 w-1/3"></div>
                   </div>
                 </div>
               </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Gestão de Projetos e <br />Precisão Metodológica</h3>
            <div className="space-y-6 text-slate-600 font-light">
              <div>
                <strong className="text-slate-900 font-semibold block mb-1">Múltiplas Metodologias</strong>
                Suporte para Amostragem (Casual Simples ou Estratificada) e Censo 100%, com validação matemática rigorosa de estratos.
              </div>
              <div>
                <strong className="text-slate-900 font-semibold block mb-1">Configuração Dinâmica</strong>
                Personalize os parâmetros da parcela, erro de amostragem (5% a 25%), probabilidade estatística (75% a 99%) e variáveis de coleta exigidas em campo.
              </div>
              <div>
                <strong className="text-slate-900 font-semibold block mb-1">Modo Silvicultura</strong>
                Opções otimizadas para florestas plantadas com fixação de espécie-alvo para máxima agilidade.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Block 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Coleta Inteligente e <br />Prevenção de Erros</h3>
            <div className="space-y-6 text-slate-600 font-light">
              <div>
                <strong className="text-slate-900 font-semibold block mb-1">Prevenção de Anomalias (Outliers)</strong>
                Alertas visuais impedem a digitação de dados absurdos (ex: DAP {'<'} 2cm ou alturas incompatíveis com o bioma), garantindo a qualidade técnica da amostra.
              </div>
              <div>
                <strong className="text-slate-900 font-semibold block mb-1">Entrada Dinâmica</strong>
                Separação inteligente de "Novo Indivíduo" e "Fuste Adicional", com catálogo de espécies que aprende com o seu histórico de inserções.
              </div>
              <div>
                <strong className="text-slate-900 font-semibold block mb-1">Segurança Máxima</strong>
                Rascunhos automáticos protegem seus dados caso o aplicativo seja fechado acidentalmente. Bloqueio inteligente contra plaquetas duplicadas.
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square bg-brand-bg rounded-[3rem] border border-slate-100 p-8 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-30 rounded-[3rem]"></div>
               <div className="relative z-10 w-full max-w-sm bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                       <ShieldAlert className="text-red-500 w-5 h-5" />
                       <h4 className="font-bold text-red-600">Alerta de Padrão</h4>
                    </div>
                  </div>
                  <div className="bg-red-50 text-red-800 p-4 rounded-xl text-sm mb-6 border border-red-100 font-medium">
                    O DAP informado (185 cm) excede o limite histórico desta espécie no bioma Cerrado. Tem certeza?
                  </div>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Espécie</label>
                      <div className="text-slate-900 font-bold text-lg border-b border-slate-100 pb-1">Caryocar brasiliense</div>
                    </div>
                    <div>
                      <label className="text-[10px] text-red-500 uppercase font-bold tracking-wider">DAP (cm)</label>
                      <div className="text-red-600 font-bold text-3xl border-b border-red-100 pb-1">185.0</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 py-3 text-sm font-bold border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors">Corrigir</button>
                    <button className="flex-1 py-3 text-sm font-bold bg-red-100 text-red-700 rounded-xl hover:bg-red-200 transition-colors">Confirmar</button>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Block 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
           <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="aspect-square bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 p-8 relative overflow-hidden flex items-center justify-center">
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" alt="Map View" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity" />
               <div className="absolute inset-0 bg-brand-blue-900/40"></div>
               
               <div className="relative z-10 w-full h-full flex flex-col justify-between pt-4">
                 <div className="self-end bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/10 flex items-center gap-2 text-xs font-semibold text-white">
                   <div className="w-2 h-2 rounded-full bg-brand-green-400"></div>
                   Alta Precisão (±3m)
                 </div>
                 
                 <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl p-5 shadow-2xl mb-4 border border-white/10 w-full">
                    <h5 className="font-bold text-white text-sm mb-1">Parcela 04 - Pinus</h5>
                    <p className="text-xs text-white/50 mb-4">12 indivíduos levantados</p>
                    <div className="grid grid-cols-2 gap-3 text-xs text-center font-medium">
                      <div className="bg-white/5 border border-white/5 rounded-xl py-3">
                        <span className="block text-white font-mono text-sm leading-tight">468m</span>
                        <span className="text-[10px] text-white/40 tracking-widest uppercase mt-1 block">Distância</span>
                      </div>
                      <div className="bg-brand-blue-500 text-white hover:bg-brand-blue-400 cursor-pointer rounded-xl py-3 flex flex-col justify-center items-center font-bold transition-colors">
                        <span>NAVEGAR</span>
                      </div>
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Mapeamento e <br />GPS Avançado</h3>
            <div className="space-y-6 text-slate-600 font-light">
              <div>
                <strong className="text-slate-900 font-semibold block mb-1">Captura de GPS por Indivíduo</strong>
                Fixação de coordenadas estabilizadas sob o dossel para cada árvore.
              </div>
              <div>
                <strong className="text-slate-900 font-semibold block mb-1">Importação de Áreas (KML/KMZ)</strong>
                Visualize os polígonos do local do inventário diretamente no mapa do app (offline).
              </div>
              <div>
                <strong className="text-slate-900 font-semibold block mb-1">Exportação Espacial (KML)</strong>
                Gere mapas de pontos prontos para o QGIS e Google Earth.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Block 4 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Leitor de Plaquetas <br />Integrado</h3>
            <div className="space-y-6 text-slate-600 font-light">
              <p>
                Sabemos que o dia a dia no campo exige praticidade. Digitar números longos de etiquetas enquanto se usa luvas ou debaixo de sol forte toma tempo e gera inconsistências.
              </p>
              <p>
                Pensando nisso, o GMS Inventário traz um leitor de código de barras e QR Code embutido, totalmente otimizado para a leitura de plaquetas florestais (como as da Signumat). Com um único toque, a câmera captura o código e insere a informação automaticamente no sistema, funcionando perfeitamente mesmo offline nas áreas mais remotas.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square bg-slate-50 rounded-[3rem] border border-slate-100 p-8 relative flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-30 rounded-[3rem]"></div>
               <div className="relative z-10 w-full h-full max-w-sm bg-slate-900 rounded-[2.5rem] shadow-2xl p-2 border-[6px] border-slate-800 flex flex-col justify-between">
                 {/* App Topbar */}
                 <div className="pt-6 pb-2 px-4 flex justify-between items-center text-white">
                   <div className="text-xs font-bold">Ler Plaqueta</div>
                   <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center"><Check className="w-3 h-3 text-brand-green-400" /></div>
                 </div>
                 {/* Camera Viewfinder */}
                 <div className="flex-1 my-2 bg-slate-800 rounded-2xl relative overflow-hidden flex items-center justify-center border border-slate-700">
                    <video 
                      src="/video.mp4" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="absolute inset-0 w-full h-full object-cover opacity-90"
                    >
                      {/* Placeholder fallback se o vídeo não carregar */}
                      <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80" alt="Camera View" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale mix-blend-overlay" />
                    </video>
                    {/* Viewfinder brackets - kept for overlay effect if desired, or we can just let the video play. Since the video already has the viewfinder, we can remove the fake green brackets or keep them subtle */}
                    {/* Corner marks */}
                    <div className="absolute inset-4 pointer-events-none">
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/50 rounded-tl-lg"></div>
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/50 rounded-tr-lg"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/50 rounded-bl-lg"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/50 rounded-br-lg"></div>
                    </div>
                 </div>
                 {/* Bottom Action */}
                 <div className="p-4">
                   <div className="bg-brand-blue-500 rounded-xl p-4 flex items-center justify-center gap-2 cursor-pointer hover:bg-brand-blue-400 transition-colors">
                     <ScanLine className="w-5 h-5 text-brand-green-400" />
                     <span className="text-white font-bold text-sm">Capturar Código</span>
                   </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Block 5 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="aspect-square bg-slate-50 border border-slate-100 rounded-[3rem] p-8 relative flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
               {/* UI Mockup for Flora Catalog */}
               <div className="relative z-10 w-full max-w-sm bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 border border-slate-200 overflow-hidden h-[450px]">
                 
                 {/* Top Info */}
                 <div className="flex items-center justify-between mb-6">
                   <div className="flex flex-col">
                     <span className="font-extrabold text-slate-900 text-[18px]">Árvore 3</span>
                     <span className="text-[13px] text-slate-500 font-bold mt-0.5">Fuste 01</span>
                   </div>
                   <button className="flex shrink-0 items-center justify-center gap-2 bg-[#262423] text-white px-4 py-2.5 rounded-[12px] text-sm font-bold shadow-sm hover:bg-black transition-colors whitespace-nowrap">
                     <Navigation className="w-4 h-4 stroke-[2.5] -rotate-45" />
                     Capturar GPS
                   </button>
                 </div>

                 {/* Espécie */}
                 <div className="space-y-2 relative z-20">
                   <label className="text-xs font-bold text-slate-700 tracking-wider">ESPÉCIE</label>
                   
                   <div className="relative">
                     <div className="relative z-20">
                       <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                         <Search className="h-[18px] w-[18px] text-slate-400 stroke-[2.5]" />
                       </div>
                       <input type="text" value="Jato|" readOnly className="w-full bg-white border-[1.5px] border-brand-blue-400/60 ring-2 ring-brand-blue-50 rounded-xl pl-10 pr-3 py-3 text-[17px] text-slate-900 font-medium focus:outline-none shadow-sm rounded-b-none border-b-0" />
                     </div>
                     
                     {/* Dropdown Menu */}
                     <div className="absolute left-0 right-0 top-full bg-white border border-slate-200 rounded-b-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] z-30 pt-1 pb-1">
                       
                       <div className="px-4 py-3 border-b border-slate-100 hover:bg-slate-50 cursor-pointer">
                         <div className="flex justify-between items-center mb-1">
                           <span className="font-bold text-slate-900 text-[15px]">Jatobá</span>
                           <span className="text-[10px] text-slate-400 font-bold tracking-wider">FABACEAE</span>
                         </div>
                         <div className="flex items-center gap-2 text-brand-green-600">
                           <Leaf className="w-3.5 h-3.5 stroke-[2.5]" />
                           <span className="text-[14px] italic text-slate-500 font-medium">Hymenaea courbaril L.</span>
                         </div>
                       </div>

                       <div className="px-4 py-3 border-b border-slate-100 hover:bg-slate-50 cursor-pointer">
                         <div className="flex justify-between items-center mb-1">
                           <span className="font-bold text-slate-900 text-[15px]">Jatobá-do-cerrado</span>
                           <span className="text-[10px] text-slate-400 font-bold tracking-wider">FABACEAE</span>
                         </div>
                         <div className="flex items-start gap-2 text-brand-green-600">
                           <Leaf className="w-3.5 h-3.5 stroke-[2.5] mt-1 shrink-0" />
                           <span className="text-[14px] italic text-slate-500 font-medium leading-snug">Hymenaea stigonocarpa Mart. ex Hayn</span>
                         </div>
                       </div>

                       <div className="px-4 py-3 hover:bg-slate-50 cursor-pointer">
                         <div className="flex justify-between items-center mb-1">
                           <span className="font-bold text-slate-900 text-[15px]">Jatobá</span>
                           <span className="text-[10px] text-slate-400 font-bold tracking-wider">FABACEAE</span>
                         </div>
                         <div className="flex items-center gap-2 text-brand-green-600">
                           <Leaf className="w-3.5 h-3.5 stroke-[2.5]" />
                           <span className="text-[14px] italic text-slate-500 font-medium">Hymenaea courbaril L.</span>
                         </div>
                       </div>

                     </div>
                   </div>
                 </div>

                 {/* Qualidade do fuste placeholder under dropdown */}
                 <div className="absolute top-[370px] left-6 right-6 space-y-2 opacity-50 pointer-events-none">
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-medium text-slate-900">Qualidade do Fuste (1-4)</span>
                      <Info className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <button className="py-2.5 border border-slate-200 bg-white rounded-xl font-bold text-slate-900 text-sm">1</button>
                      <button className="py-2.5 border border-slate-200 bg-white rounded-xl font-bold text-slate-900 text-sm">2</button>
                      <button className="py-2.5 border border-slate-200 bg-white rounded-xl font-bold text-slate-900 text-sm">3</button>
                      <button className="py-2.5 border border-slate-200 bg-white rounded-xl font-bold text-slate-900 text-sm">4</button>
                    </div>
                 </div>

               </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Catálogo de Espécies Offline <br />e Personalizado</h3>
            <p className="text-slate-600 font-light leading-relaxed">
              Importação simplificada e automação de ponta a ponta no inventário nativo. Esqueça as listas fixas que não se aplicam à sua região ou as horas gastas digitando nomes científicos no meio do mato. O GMS Inventário traz uma solução de gerenciamento botânico inteligente e 100% offline:
            </p>
            <div className="space-y-6 text-slate-600 font-light mt-6">
              <div>
                <strong className="text-slate-900 font-semibold block mb-1">Sua Lista, Suas Regras</strong>
                Carregue o seu próprio catálogo de espécies direto no aplicativo. Basta preparar uma planilha simples em formato CSV com <span className="font-mono text-[11px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 border border-slate-200 shadow-sm">NOME POPULAR</span>, <span className="font-mono text-[11px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 border border-slate-200 shadow-sm">NOME CIENTÍFICO</span> e <span className="font-mono text-[11px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 border border-slate-200 shadow-sm">FAMÍLIA</span>.
              </div>
              <div>
                <strong className="text-slate-900 font-semibold block mb-1">Vínculo Instantâneo em Campo</strong>
                Apenas selecione ou digite o Nome Popular da planta. O aplicativo cruza os dados e preenche de forma invisível o Nome Científico e a Família.
              </div>
              <div>
                <strong className="text-slate-900 font-semibold block mb-1">Pós-Processamento Automático</strong>
                Na exportação final, a planilha no Excel já conta com as três colunas preenchidas corretamente por árvore. Zero digitação no escritório.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Block 6 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Modo Silvicultura: Máxima<br/> Velocidade em Plantios</h3>
            <p className="text-slate-600 font-light leading-relaxed">
              Otimização extrema para inventário de florestas plantadas.
              O monitoramento de plantios comerciais (como eucalipto ou pinus) exige rapidez de movimentação entre as linhas e parcelas. O Modo Silvicultura foi desenhado especificamente para essa dinâmica de alta produtividade:
            </p>
            <div className="space-y-6 text-slate-600 font-light mt-6">
              <div>
                <strong className="text-slate-900 font-semibold block mb-1">Configuração em Um Clique</strong>
                Ao ativar o modo silvicultural na parcela, o usuário define apenas uma vez qual é a espécie plantada que será inventariada.
              </div>
              <div>
                <strong className="text-slate-900 font-semibold block mb-1">Foco no que Importa</strong>
                Durante a medição das árvores, a interface se fecha no essencial. O operador só precisa inserir o Diâmetro (DAP) e a Altura.
              </div>
              <div>
                <strong className="text-slate-900 font-semibold block mb-1">Preenchimento Automatizado</strong>
                O nome da espécie configurada no início é injetado automaticamente em cada novo registro, eliminando etapas repetitivas de seleção.
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-sm mx-auto"
          >
            {/* Phone Mockup Re-styled Sleek */}
            <div className="w-full h-[550px] bg-white rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden relative mx-auto flex flex-col font-sans bg-[#fafafa]">
              <div className="absolute top-0 w-full h-6 bg-slate-800 flex justify-center items-end pb-1 z-20">
                <div className="w-16 h-4 bg-slate-900 rounded-full"></div>
              </div>
              <div className="w-full h-full flex flex-col pt-8 bg-[#fafafa]">
                
                {/* Header */}
                <div className="flex items-center gap-3 px-4 py-3 bg-white border-b border-slate-100">
                  <ChevronLeft className="w-5 h-5 text-slate-600" />
                  <div className="flex flex-col text-brand-blue-600">
                     <TreePine className="w-5 h-5 -mb-1" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-[17px]">Coleta de Dados</h3>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 bottom-[90px] overflow-y-auto px-4 py-4 space-y-4">
                    {/* Tabs */}
                    <div className="bg-slate-100 p-1 rounded-xl flex gap-1 shadow-inner">
                      <div className="bg-white text-brand-blue-600 flex-1 py-2.5 rounded-lg text-center text-sm font-bold shadow-sm border border-slate-200">
                        Novo Indivíduo
                      </div>
                      <div className="text-slate-500 flex-1 py-2.5 rounded-lg text-center text-sm font-medium">
                        Fuste Adicional
                      </div>
                    </div>

                    {/* Arvore info */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-sm flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-extrabold text-slate-900 text-[15px]">Árvore 3</span>
                        <span className="text-xs text-slate-500 font-bold mt-0.5">Fuste 01</span>
                      </div>
                      <button className="flex shrink-0 items-center gap-1.5 bg-[#262423] border border-[#363433] text-white px-3.5 py-2 rounded-[14px] text-xs font-bold shadow-sm hover:bg-black transition-colors whitespace-nowrap">
                        <Navigation className="w-3.5 h-3.5 stroke-[2.5]" />
                        Capturar GPS
                      </button>
                    </div>

                    {/* Especie */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 tracking-wider">ESPÉCIE</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Search className="h-4 w-4 text-slate-400" />
                        </div>
                        <div className="w-full pl-9 pr-3 py-3 border border-slate-200 rounded-xl bg-white text-slate-900 text-base shadow-sm font-medium">
                          Eucalyptus grandis
                        </div>
                      </div>
                    </div>

                    {/* CAP / DAP Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 tracking-wider">CAP</label>
                        <div className="relative">
                          <div className="w-full pl-3 pr-8 py-3 border border-slate-200 rounded-xl bg-white text-slate-900 text-lg tracking-widest text-center shadow-sm font-medium">
                            82,0
                          </div>
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <span className="text-sm font-bold text-slate-400">cm</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 tracking-wider">DAP</label>
                        <div className="relative">
                          <div className="w-full pl-3 pr-8 py-3 border border-slate-200 rounded-xl bg-white text-slate-900 text-lg tracking-widest text-center shadow-sm font-medium">
                            26,1
                          </div>
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <span className="text-sm font-bold text-slate-400">cm</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Altura */}
                    <div className="space-y-1.5 pb-8">
                      <label className="text-xs font-bold text-slate-700 tracking-wider">ALT. TOT (M)</label>
                      <div className="w-full px-3 py-3.5 border border-green-500 ring-2 ring-green-100 rounded-xl bg-white text-slate-900 text-lg tracking-widest text-center shadow-sm font-medium">
                        10,0
                      </div>
                    </div>
                  </div>

                  {/* Bottom Actions Fixed Area */}
                  <div className="absolute bottom-0 w-full bg-[#fafafa] border-t border-slate-100 p-4 pt-3 space-y-3 z-30 pb-6 rounded-b-[2.5rem]">
                    <button className="w-full py-3.5 border border-brand-blue-200 bg-white text-brand-blue-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-blue-50 transition-colors shadow-sm text-sm">
                      <Plus className="w-4 h-4" />
                      Salvar e Add Fuste
                    </button>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="w-full py-[14px] border border-slate-200 bg-white text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-colors shadow-sm text-sm">
                        Cancelar
                      </button>
                      <button className="w-full py-[14px] bg-[#18539e] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors shadow-md text-sm px-4">
                        <Check className="w-4 h-4 shrink-0 stroke-[3]" />
                        <span>Salvar Árvore</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function Reports() {
  return (
    <section className="py-24 bg-brand-blue-900 text-white relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-blue-500/20 rounded-full blur-[100px] translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-green-500/20 rounded-full blur-[120px] -translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-8"
        >
          <div>
            <h2 className="text-sm font-bold tracking-widest text-brand-green-400 uppercase mb-3">Relatórios e Entregáveis</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">Do Celular para o Relatório Técnico em Segundos.</h3>
          </div>
          
          <p className="text-brand-blue-100 font-light leading-relaxed text-lg">
            Ganhe dias de trabalho no escritório. O aplicativo estrutura seus dados brutos de campo e gera relatórios espaciais e planilhas limpas, prontas para uso.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-brand-green-400 shrink-0" />
              <span className="text-white/80 font-light">Exportação de planilhas <strong className="text-white">.xlsx nativas</strong> com abas separadas por projeto e estratos.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-brand-green-400 shrink-0" />
              <span className="text-white/80 font-light">Inventário ordenado logicamente (Parcela {'>'} Árvore {'>'} Fuste).</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-brand-green-400 shrink-0" />
              <span className="text-white/80 font-light">Exportação <strong className="text-white">KML automática</strong> compatível com Google Earth e QGIS.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-brand-green-400 shrink-0" />
              <span className="text-white/80 font-light">Cores, formatação e padrões corporativos aplicados na exportação.</span>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
            <div className="bg-white rounded-2xl p-5 shadow-xl">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-4 mb-4 gap-3 sm:gap-0">
                <div className="flex items-center gap-3 overflow-hidden w-full">
                  <div className="w-10 h-10 bg-brand-green-50 text-brand-green-600 rounded-xl flex items-center justify-center shrink-0">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h5 className="text-slate-900 font-bold text-sm truncate">Relatório_Inv_Fazenda.xlsx</h5>
                    <p className="text-[10px] text-slate-400 font-medium tracking-wide truncate">Modificado agora • 1.2 MB</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 mb-4">
                <div className="h-6 bg-slate-100 rounded w-full"></div>
                <div className="h-6 bg-slate-100 rounded w-full"></div>
                <div className="h-6 bg-slate-100 rounded w-full"></div>
                <div className="h-6 bg-slate-100 rounded w-full"></div>
                <div className="h-6 bg-slate-50 rounded w-full"></div>
                <div className="h-6 bg-slate-50 rounded w-full"></div>
                <div className="h-6 bg-slate-50 rounded w-full"></div>
                <div className="h-6 bg-slate-50 rounded w-full"></div>
              </div>
              <div className="flex flex-wrap text-[10px] text-slate-400 gap-2 mt-2 font-bold tracking-wider uppercase">
                 <span className="px-2 py-1 bg-brand-blue-50 text-brand-blue-700 rounded">Dados Brutos</span>
                 <span className="px-2 py-1">Estatística</span>
                 <span className="px-2 py-1">Estratos</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-xl flex justify-between items-center gap-3">
               <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center shrink-0">
                    <MapIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-slate-900 font-bold text-sm truncate">Pontos_Arvores.kml</h5>
                  </div>
                </div>
                <button className="text-brand-blue-600 text-[10px] md:text-xs font-bold bg-brand-blue-50 px-3 md:px-4 py-2 rounded-lg hover:bg-brand-blue-100 transition-colors uppercase tracking-wider shrink-0">
                  Compartilhar
                </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-blue-600 uppercase mb-3">Planos e Preços</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Ferramentas profissionais para todo tamanho de projeto.</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Basic Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col"
          >
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Plano Básico</h4>
              <p className="text-slate-900 font-extrabold text-2xl mb-4">Gratuito p/ Testar</p>
              <div className="mb-8">
                <span className="text-5xl font-extrabold tracking-tight text-slate-900">R$0</span>
                <span className="text-slate-400 font-medium">/mês</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                <Check className="w-5 h-5 text-brand-green-500" />
                Limite de até 3 projetos
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                <Check className="w-5 h-5 text-brand-green-500" />
                Máximo de 5 parcela por projeto
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                <Check className="w-5 h-5 text-brand-green-500" />
                Coleta 100% offline
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                <Check className="w-5 h-5 text-brand-green-500" />
                Exportação de inventario florestal em Excel
              </li>
            </ul>
            
            <button className="w-full py-4 rounded-xl font-bold border-2 border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-colors">
              Começar Grátis
            </button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-blue-900 text-white rounded-3xl p-8 shadow-2xl relative flex flex-col md:-translate-y-4"
          >
            <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 bg-brand-green-500 text-white font-bold text-[10px] rounded-full tracking-widest uppercase shadow-lg shadow-brand-green-500/30">
              Recomendado
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-blue-300 uppercase tracking-widest mb-2">Plano Premium</h4>
              <p className="text-white font-extrabold text-2xl mb-4">Ilimitado + Sinc Nuvem</p>
              <div className="mb-2">
                <span className="text-5xl font-extrabold tracking-tight text-white">R$89,90</span>
                <span className="text-brand-blue-200 font-medium">/mês</span>
              </div>
              <p className="text-xs text-brand-blue-300 mb-8 font-medium">ou R$899 anualmente (desconto de 2 meses)</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-white/90 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-green-400 shrink-0" />
                <span>Inventários ilimitados</span>
              </li>
              <li className="flex items-center gap-3 text-white/90 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-green-400 shrink-0" />
                <span>Dashboard Estatístico de Volume e volume por hectare em tempo real</span>
              </li>
              <li className="flex items-center gap-3 text-white/90 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-green-400 shrink-0" />
                <span>Indicador de suficiência amostral, erro amostral e coeficiente de variação em tempo real</span>
              </li>
              <li className="flex items-center gap-3 text-white/90 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-green-400 shrink-0" />
                <span>Backup em nuvem (Sincronização automática)</span>
              </li>
              <li className="flex items-center gap-3 text-white/90 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-green-400 shrink-0" />
                <span>Exportação e importação de Planilhas Excel (.xlsx) e CSV</span>
              </li>
              <li className="flex items-center gap-3 text-white/90 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-green-400 shrink-0" />
                <span>Importação e Exportação de coordenadas (KML/KMZ)</span>
              </li>
              <li className="flex items-center gap-3 text-white/90 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-green-400 shrink-0" />
                <span>GPS, captura de coordenadas de árvore e parcelas</span>
              </li>
              <li className="flex items-center gap-3 text-white/90 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-green-400 shrink-0" />
                <span>Catálogo de espécies e Modo Silvicultura</span>
              </li>
              <li className="flex items-center gap-3 text-white/90 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-green-400 shrink-0" />
                <span>Suporte prioritário via WhatsApp</span>
              </li>
            </ul>
            
            <button className="w-full py-4 rounded-xl font-bold text-white bg-brand-blue-500 hover:bg-brand-blue-400 transition-colors shadow-lg shadow-brand-blue-500/25">
              Assinar Plano Premium
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white text-slate-500 py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={LOGO_BOTTOM} alt="GMS Inventário Logo" className="h-10 w-auto mix-blend-multiply" />
              <span className="text-xl font-extrabold tracking-tight text-brand-blue-900">
                GMS <span className="font-medium text-brand-green-600">Inventário</span>
              </span>
            </div>
            <p className="font-medium text-sm leading-relaxed max-w-sm mb-6 text-slate-500">
              Desenvolvemos soluções tecnológicas para a engenharia florestal moderna, focando na precisão dos dados, velocidade em campo e facilidade nas entregas técnicas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-brand-blue-50 text-slate-400 hover:text-brand-blue-600 transition-colors font-bold text-sm">
                in
              </a>
              <a href="https://www.instagram.com/gmsinvetario" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-brand-blue-50 text-slate-400 hover:text-brand-blue-600 transition-colors font-bold text-sm">
                ig
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6 tracking-tight">Produto</h4>
            <ul className="space-y-3 font-medium text-sm">
              <li><a href="#features" className="hover:text-brand-blue-600 transition-colors">Funcionalidades</a></li>
              <li><a href="#benefits" className="hover:text-brand-blue-600 transition-colors">Benefícios</a></li>
              <li><a href="#pricing" className="hover:text-brand-blue-600 transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-brand-blue-600 transition-colors">App Store</a></li>
              <li><a href="#" className="hover:text-brand-blue-600 transition-colors">Google Play</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6 tracking-tight">Institucional</h4>
            <ul className="space-y-3 font-medium text-sm">
              <li><a href="https://gms-florestal.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue-600 transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-brand-blue-600 transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-brand-blue-600 transition-colors">Termos de Uso</a></li>
              <li><a href="https://sites.google.com/view/gms-inventario-politicapvcdd" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue-600 transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
          <p>© {new Date().getFullYear()} GMS Inventário. Todos os direitos reservados.</p>
          <p>Feito para quem vive a floresta.</p>
        </div>
      </div>
    </footer>
  );
}
