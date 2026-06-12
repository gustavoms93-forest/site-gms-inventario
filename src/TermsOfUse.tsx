import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-blue-200 selection:text-brand-blue-900 pb-20">
      {/* Header Minimalista */}
      <header className="bg-white border-b border-slate-200 py-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 flex items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-blue-600 transition-colors bg-slate-50 hover:bg-brand-blue-50 px-4 py-2 rounded-xl text-sm font-bold">
            <ChevronLeft className="w-4 h-4" />
            Voltar para a página inicial
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 md:px-12 mt-12 lg:mt-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl border border-slate-100">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Termos de Uso
          </h1>
          <p className="text-sm font-bold text-slate-400 tracking-wider uppercase mb-12">
            Última atualização: junho de 2026
          </p>

          <div className="max-w-none text-slate-600 leading-relaxed font-medium">
            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">1. ACEITAÇÃO DOS TERMOS</h3>
            <p className="mb-4">
              Este Termo de Uso constitui um contrato entre você, usuário, e a GMS FLORESTAL LTDA, inscrita no CNPJ sob nº 32.939.334/0001-11, com sede na Rua Juscelino Kubitschek, 947-A, Manoel Emídio – PI, CEP 64.875-000, doravante denominada GMS Florestal.
            </p>
            <p className="mb-8">
              Ao acessar ou utilizar o aplicativo GMS Inventário, você declara que leu, compreendeu e concorda integralmente com estes Termos. Caso não concorde, não utilize o aplicativo.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">2. FINALIDADE DO APLICATIVO</h3>
            <p className="mb-2">O GMS Inventário é uma ferramenta digital desenvolvida para:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Coleta de dados de inventários florestais em campo</li>
              <li>Armazenamento local e/ou sincronização de dados</li>
              <li>Exportação de informações em formatos compatíveis com análises técnicas (ex: Excel, KML ou outros)</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">3. LICENÇA DE USO</h3>
            <p className="mb-2">A GMS Florestal concede ao usuário uma licença:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Limitada</li>
              <li>Não exclusiva</li>
              <li>Intransferível</li>
              <li>Revogável</li>
            </ul>
            <p className="mb-4">O usuário não adquire propriedade sobre o aplicativo.</p>
            <p className="mb-2">É proibido:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Copiar, modificar ou distribuir o app</li>
              <li>Realizar engenharia reversa</li>
              <li>Comercializar ou sublicenciar o sistema</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">4. CADASTRO E RESPONSABILIDADE</h3>
            <p className="mb-2">Para uso completo do sistema, é necessário cadastro com:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Nome completo ou razão social</li>
              <li>CPF ou CNPJ válido</li>
              <li>E-mail profissional</li>
              <li>Telefone</li>
              <li>Endereço</li>
            </ul>
            <p className="mb-2">O usuário é responsável por:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Manter a confidencialidade da conta</li>
              <li>Todas as ações realizadas no aplicativo</li>
              <li>Veracidade das informações fornecidas</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">5. PLANOS E COBRANÇA</h3>
            <p className="mb-2">O aplicativo poderá oferecer:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Plano gratuito (com limitações)</li>
              <li>Planos pagos (mensais ou anuais)</li>
            </ul>
            <p className="mb-2">As cobranças serão realizadas via:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Google Play Store</li>
            </ul>
            <p className="mb-2"><strong className="text-slate-900">Renovação automática:</strong></p>
            <p className="mb-8">As assinaturas são renovadas automaticamente até cancelamento pelo usuário.</p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">6. CANCELAMENTO E REEMBOLSO</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Cancelamentos devem ser feitos diretamente pela Play Store</li>
              <li>Reembolsos seguem as políticas da Google</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">7. COLETA E USO DE DADOS</h3>
            <p className="mb-2">Podemos coletar dados como:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Informações do dispositivo</li>
              <li>Dados de uso do aplicativo</li>
              <li>Localização (quando autorizado)</li>
            </ul>
            <p className="mb-2">Esses dados são utilizados para:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Melhorar a performance do app</li>
              <li>Garantir funcionamento adequado</li>
              <li>Evolução da plataforma</li>
            </ul>
            <p className="mb-8">O usuário pode solicitar exclusão de dados a qualquer momento.</p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">8. PROTEÇÃO DE DADOS</h3>
            <p className="mb-2">A GMS Florestal compromete-se a:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Proteger os dados do usuário</li>
              <li>Não vender informações pessoais</li>
              <li>Cumprir a legislação vigente (LGPD)</li>
            </ul>
            <p className="mb-8"><strong className="text-slate-900">Contato:</strong> gmsflorestal+suporte@gmail.com</p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">9. ISENÇÃO DE GARANTIAS</h3>
            <p className="mb-4">O aplicativo é fornecido “como está”, podendo conter erros.</p>
            <p className="mb-2">A GMS Florestal:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Não garante funcionamento contínuo</li>
              <li>Não garante ausência de falhas ou perda de dados</li>
            </ul>
            <p className="mb-2"><strong className="text-slate-900">IMPORTANTE:</strong></p>
            <p className="mb-8">O usuário é responsável por manter backup dos dados coletados.</p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">10. LIMITAÇÃO DE RESPONSABILIDADE</h3>
            <p className="mb-2">A GMS Florestal não se responsabiliza por:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Perda de dados</li>
              <li>Falhas de hardware ou software</li>
              <li>Problemas de GPS ou precisão</li>
              <li>Interrupções de energia ou internet</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">11. MODIFICAÇÕES</h3>
            <p className="mb-2">A GMS Florestal pode:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Alterar funcionalidades</li>
              <li>Atualizar o aplicativo</li>
              <li>Modificar estes termos a qualquer momento</li>
            </ul>
            <p className="mb-8">O uso contínuo implica aceitação das mudanças.</p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">12. CANCELAMENTO DE CONTA</h3>
            <p className="mb-2">A conta poderá ser suspensa ou excluída em caso de:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Uso indevido</li>
              <li>Informações falsas</li>
              <li>Violação dos termos</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">13. RESTRIÇÕES DE USO</h3>
            <p className="mb-2">É proibido:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Uso automatizado (bots)</li>
              <li>Uso com VPN suspeita</li>
              <li>Criação de múltiplas contas indevidas</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">14. FUNCIONAMENTO DO SERVIÇO</h3>
            <p className="mb-2">O funcionamento pode ser afetado por:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Falhas de servidor</li>
              <li>Problemas de internet</li>
              <li>Manutenções programadas</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">15. DISPOSIÇÕES LEGAIS</h3>
            <p className="mb-2">Fica eleito o foro da comarca de:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong className="text-slate-900">Manoel Emídio – PI</strong></li>
            </ul>
            <p className="mb-8">Para resolução de quaisquer conflitos.</p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">16. CONTATO</h3>
            <p className="mb-2">Para dúvidas, suporte ou solicitações:</p>
            <p className="mb-8">📧 <strong className="text-slate-900">gmsflorestal+suporte@gmail.com</strong></p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">17. ACEITE FINAL</h3>
            <p className="mb-2">Ao se cadastrar ou utilizar o aplicativo, o usuário declara que:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Leu e compreendeu este termo</li>
              <li>Concorda com todas as condições</li>
              <li>Assume responsabilidade pelo uso do sistema</li>
            </ul>

            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col items-center text-center">
              <strong className="block text-slate-800">GMS FLORESTAL LTDA</strong>
              <span className="text-sm text-slate-500 mt-1">Todos os direitos reservados.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
