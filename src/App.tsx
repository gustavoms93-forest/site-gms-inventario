import React, { useState } from 'react';
import { motion } from 'motion/react';
import logo from './logo.png';
import logo02 from './logo02.png';
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
  Leaf
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
          <img src={logo02} alt="GMS Inventário Logo" className="w-10 h-10 object-contain mix-blend-screen" />
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
  return (
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
              LANÇAMENTO 2.0 • OFFLINE-FIRST
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              O Seu Inventário Florestal, <br className="hidden md:block"/>
              <span className="text-brand-blue-600">Do Campo à Planilha.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Um sistema comercial robusto que garante rapidez na coleta, funcionamento offline impecável e processamento de dados seguro para o seu licenciamento ambiental.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
              <button className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-brand-blue-500/30 transition-all w-full sm:w-auto">
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
            <div className="w-full h-[550px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden relative mx-auto flex flex-col">
              <div className="absolute top-0 w-full h-6 bg-slate-800 flex justify-center items-end pb-1 z-20">
                <div className="w-16 h-4 bg-slate-900 rounded-full"></div>
              </div>
              <div className="w-full h-full p-4 flex flex-col font-sans pt-10">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-white font-bold text-lg tracking-tight">Projeto #42</div>
                  <div className="w-8 h-8 rounded-full bg-brand-blue-500 flex items-center justify-center text-[10px] text-white font-bold">
                    GPS
                  </div>
                </div>
                
                <div className="space-y-3 relative z-10">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <div className="text-[10px] text-brand-blue-200 uppercase font-bold tracking-widest mb-1">DAP Atual</div>
                    <div className="text-2xl text-white font-mono tracking-tight">28.5 cm</div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <div className="text-[10px] text-brand-green-200 uppercase font-bold tracking-widest mb-1">Localização</div>
                    <div className="text-[10px] text-brand-green-400 font-mono tracking-wider">-23.5505, -46.6333</div>
                  </div>
                  <div className="bg-gradient-to-r from-brand-blue-500 to-brand-green-500 p-4 rounded-xl mt-4 cursor-pointer hover:shadow-lg hover:shadow-brand-blue-500/20 transition-all">
                    <div className="text-center font-bold text-white tracking-tight">SALVAR INDIVÍDUO</div>
                  </div>
                </div>

                <div className="mt-6 flex-1 overflow-hidden relative z-10">
                   <h4 className="text-[10px] font-semibold text-white/70 mb-3 uppercase tracking-wider">Últimas Inserções</h4>
                   <div className="space-y-2">
                     {[
                        { num: 12, esp: 'Eucalyptus u.', dap: 28.5 },
                        { num: 11, esp: 'Eucalyptus u.', dap: 15.2 },
                        { num: 10, esp: 'Eucalyptus u.', dap: 19.8 },
                      ].map((item) => (
                        <div key={item.num} className="bg-white/5 p-2 rounded-lg border border-white/5 flex justify-between items-center">
                          <div className="flex gap-2 items-center">
                            <div className="w-6 h-6 rounded bg-brand-blue-500/20 text-brand-blue-300 flex items-center justify-center text-[10px] font-bold">
                              #{item.num}
                            </div>
                            <div>
                              <p className="text-[10px] font-semibold text-white/90">{item.esp}</p>
                              <p className="text-[9px] text-white/50 font-mono">DAP {item.dap}cm</p>
                            </div>
                          </div>
                          <CheckCircle2 className="w-3 h-3 text-brand-green-400" />
                        </div>
                      ))}
                   </div>
                </div>
                
                <div className="mt-auto grid grid-cols-2 gap-2 pb-2 pt-2 relative z-10">
                   <div className="h-16 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center justify-center">
                     <span className="text-[8px] text-brand-lime-400 font-bold tracking-widest mb-1">ESPÉCIES</span>
                     <span className="text-xs font-medium text-white">Cedrela f.</span>
                   </div>
                   <div className="h-16 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center justify-center">
                     <span className="text-[8px] text-brand-lime-400 font-bold tracking-widest mb-1">PARCELA</span>
                     <span className="text-xs font-medium text-white">B-12</span>
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
      description: 'Volume por árvore, conversão automática de CAP para DAP e resumo estatístico instantâneo. Controle as suas médias enquanto ainda está no campo.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Exportação',
      description: 'Gere planilhas em Excel formatadas nos padrões corporativos e arquivos KML espaciais. Envie por WhatsApp ou E-mail da sua tenda no campo.'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-brand-bg relative z-20 -mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-6">
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
                Personalize os parâmetros da parcela, erro de amostragem (5% a 20%), probabilidade estatística e variáveis de coleta exigidas em campo.
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
                <strong className="text-slate-900 font-semibold block mb-1">Captura de Sinal Estabilizado</strong>
                Navegação com indicador de precisão em tempo real (Verde, Amarelo, Vermelho) adaptado para avaliações reais sob o dossel denso da floresta.
              </div>
              <div>
                <strong className="text-slate-900 font-semibold block mb-1">Visualização Híbrida e Multinível</strong>
                Alterne entre mapas de ruas e satélite. Visualize a disposição global de projetos, as parcelas no terreno e a geolocalização exata de cada árvore inserida.
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
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-green-50 text-brand-green-600 rounded-xl flex items-center justify-center">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-slate-900 font-bold text-sm">Relatório_Inv_Fazenda.xlsx</h5>
                    <p className="text-[10px] text-slate-400 font-medium tracking-wide">Modificado agora • 1.2 MB</p>
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
              <div className="flex text-[10px] text-slate-400 gap-3 mt-2 font-bold tracking-wider uppercase">
                 <span className="px-2 py-1 bg-brand-blue-50 text-brand-blue-700 rounded">Dados Brutos</span>
                 <span className="px-2 py-1">Estatística</span>
                 <span className="px-2 py-1">Estratos</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-xl flex justify-between items-center">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center">
                    <MapIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-slate-900 font-bold text-sm">Poligonos_Arvores.kml</h5>
                    <p className="text-[10px] text-slate-400 font-medium tracking-wide">Pronto para o QGIS</p>
                  </div>
                </div>
                <button className="text-brand-blue-600 text-xs font-bold bg-brand-blue-50 px-4 py-2 rounded-lg hover:bg-brand-blue-100 transition-colors uppercase tracking-wider">
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
                Limite de 2 projetos
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                <Check className="w-5 h-5 text-brand-green-500" />
                Até 5 parcelas por projeto
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                <Check className="w-5 h-5 text-brand-green-500" />
                Catálogo offline básico
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                <Check className="w-5 h-5 text-brand-green-500" />
                Coleta 100% offline
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
                <CheckCircle2 className="w-5 h-5 text-brand-green-400" />
                Projetos e parcelas ilimitadas
              </li>
              <li className="flex items-center gap-3 text-white/90 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-green-400" />
                Sincronização em nuvem segura
              </li>
              <li className="flex items-center gap-3 text-white/90 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-green-400" />
                Exportação avançada (Excel / KML)
              </li>
              <li className="flex items-center gap-3 text-white/90 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-green-400" />
                Todas as metodologias liberadas
              </li>
              <li className="flex items-center gap-3 text-white/90 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-green-400" />
                Suporte prioritário via WhatsApp
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
              <img src={logo} alt="GMS Inventário Logo" className="h-10 w-auto mix-blend-multiply" />
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
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-brand-blue-50 text-slate-400 hover:text-brand-blue-600 transition-colors font-bold text-sm">
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
              <li><a href="#" className="hover:text-brand-blue-600 transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-brand-blue-600 transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-brand-blue-600 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-brand-blue-600 transition-colors">Política de Privacidade</a></li>
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
