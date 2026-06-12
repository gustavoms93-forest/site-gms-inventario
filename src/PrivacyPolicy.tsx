import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
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
            Política de Privacidade
          </h1>
          <p className="text-sm font-bold text-slate-400 tracking-wider uppercase mb-12">
            Última atualização: junho de 2026
          </p>

          <div className="max-w-none text-slate-600 leading-relaxed font-medium">
            <p className="mb-4">
              Esta Política de Privacidade descreve como a GMS FLORESTAL LTDA, inscrita no CNPJ sob nº 32.939.334/0001-11, com sede na Rua Juscelino Kubitschek, 947-A, Manoel Emídio – PI, CEP 64.875-000, coleta, usa, armazena e protege as informações dos usuários do aplicativo GMS Inventário, disponível na Google Play.
            </p>
            <p className="mb-8">
              Ao utilizar o aplicativo, você concorda com esta Política.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">1. INFORMAÇÕES COLETADAS</h3>
            
            <h4 className="text-lg font-bold text-slate-900 mt-6 mb-3">1.1 Informações fornecidas pelo usuário</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Nome completo ou razão social</li>
              <li>CPF ou CNPJ</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Dados inseridos nos inventários florestais</li>
            </ul>

            <h4 className="text-lg font-bold text-slate-900 mt-6 mb-3">1.2 Informações coletadas automaticamente</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Tipo de dispositivo</li>
              <li>Sistema operacional</li>
              <li>Identificadores do dispositivo</li>
              <li>Endereço IP</li>
              <li>Informações de rede</li>
            </ul>

            <h4 className="text-lg font-bold text-slate-900 mt-6 mb-3">1.3 Dados de uso</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Interações com o aplicativo</li>
              <li>Funcionalidades acessadas</li>
              <li>Registros de atividades</li>
            </ul>

            <h4 className="text-lg font-bold text-slate-900 mt-6 mb-3">1.4 Dados de localização (GPS)</h4>
            <p className="mb-2">Coletados apenas com consentimento do usuário para:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Georreferenciamento de parcelas</li>
              <li>Registro de pontos de inventário</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">2. USO DAS INFORMAÇÕES</h3>
            <p className="mb-2">Utilizamos os dados para:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Operar e manter o aplicativo</li>
              <li>Sincronizar dados entre dispositivos</li>
              <li>Armazenar backups em nuvem</li>
              <li>Melhorar desempenho e funcionalidades</li>
              <li>Oferecer suporte técnico</li>
              <li>Enviar comunicações importantes</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">3. SERVIÇOS DE TERCEIROS</h3>
            <p className="mb-2">O aplicativo pode utilizar serviços de terceiros, incluindo:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Firebase (Google)</li>
              <li>Autenticação de usuários</li>
              <li>Armazenamento em nuvem (Firestore/Realtime Database)</li>
              <li>Analytics (uso do app)</li>
              <li>Google Play Services</li>
              <li>Gerenciamento de assinaturas</li>
              <li>Serviços de localização</li>
            </ul>
            <p className="mb-8">Esses serviços podem coletar dados conforme suas próprias políticas de privacidade.</p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">4. COMPARTILHAMENTO DE DADOS</h3>
            <p className="mb-2">A GMS Florestal:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Não vende dados pessoais</li>
              <li>Não compartilha dados com terceiros, exceto:
                <ul className="list-[circle] pl-6 mt-2 space-y-2">
                  <li>Para execução dos serviços (ex: Firebase)</li>
                  <li>Quando exigido por lei</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">5. ARMAZENAMENTO E SEGURANÇA</h3>
            <p className="mb-2">Os dados podem ser armazenados:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Localmente no dispositivo</li>
              <li>Em servidores seguros na nuvem (Firebase/Google Cloud)</li>
            </ul>
            <p className="mb-2">Medidas adotadas:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Criptografia de dados</li>
              <li>Controle de acesso</li>
              <li>Monitoramento de segurança</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">6. PERMISSÕES DO APLICATIVO</h3>
            <p className="mb-2">O aplicativo pode solicitar permissões como:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong className="text-slate-900">Localização (GPS)</strong> → para coleta de pontos geográficos</li>
              <li><strong className="text-slate-900">Internet</strong> → para sincronização de dados</li>
              <li><strong className="text-slate-900">Armazenamento</strong> → para exportação de arquivos</li>
            </ul>
            <p className="mb-8">Essas permissões são utilizadas exclusivamente para o funcionamento do app.</p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">7. DIREITOS DO USUÁRIO (LGPD)</h3>
            <p className="mb-2">Você pode:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Acessar seus dados</li>
              <li>Corrigir informações</li>
              <li>Solicitar exclusão de dados</li>
              <li>Revogar consentimento</li>
            </ul>
            <p className="mb-2"><strong className="text-slate-900">Exclusão de conta:</strong></p>
            <p className="mb-8">Disponível diretamente no aplicativo ou mediante solicitação por e-mail.</p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">8. RETENÇÃO DE DADOS</h3>
            <p className="mb-2">Os dados serão mantidos:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Enquanto a conta estiver ativa</li>
              <li>Ou conforme exigido por obrigações legais</li>
            </ul>
            <p className="mb-8">Após isso, poderão ser excluídos ou anonimizados.</p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">9. CRIANÇAS E ADOLESCENTES</h3>
            <p className="mb-8">O aplicativo não é destinado a menores de 18 anos.<br/> Não coletamos intencionalmente dados de menores.</p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">10. ALTERAÇÕES</h3>
            <p className="mb-8">Esta Política pode ser atualizada a qualquer momento.<br/> O uso contínuo do aplicativo indica concordância com as alterações.</p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">11. CONTATO</h3>
            <p className="mb-2">Para dúvidas ou solicitações relacionadas à privacidade:</p>
            <p className="mb-8">📧 <strong className="text-slate-900">gmsflorestal+suporte@gmail.com</strong></p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">12. ACEITE</h3>
            <p className="mb-2">Ao utilizar o aplicativo, você declara que:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Leu e compreendeu esta Política</li>
              <li>Concorda com a coleta e uso de dados conforme descrito</li>
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
