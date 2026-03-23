import React from 'react';
import { Lock, ShieldCheck } from 'lucide-react';

interface StepInsuranceProps {
  onFinalize: () => void;
}

const StepInsurance: React.FC<StepInsuranceProps> = ({ onFinalize }) => {
  return (
    <div className="bg-card p-8 rounded-2xl shadow-xl text-center">
      <h1 className="text-primary text-2xl font-bold mb-4 flex items-center justify-center gap-2">
        <Lock className="w-7 h-7" />
        Finalize sua Solicitação
      </h1>
      
      <p className="text-gray-600 mb-6 text-sm">
        Para garantir a segurança da transação e a liberação do montante pelo banco parceiro, é necessária a ativação do <b>Seguro Garantia</b>.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-xl border border-dashed border-secondary mb-6 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 opacity-10">
            <ShieldCheck className="w-24 h-24 text-secondary" />
        </div>
        <p className="font-bold text-gray-800 mb-2 z-10 relative">Por que o seguro é necessário?</p>
        <p className="text-xs text-gray-600 mb-4 leading-relaxed z-10 relative">
          O banco parceiro exige este seguro para garantir o contrato em casos de inadimplência, permitindo a liberação do crédito para pessoas com restrições.
        </p>
        <hr className="border-blue-200 mb-4" />
        <span className="block text-2xl font-bold text-red-600 text-center">
          Valor do Seguro: R$ 9,90
        </span>
      </div>

      <p className="text-xs text-gray-500 mb-6">
        Após o pagamento da taxa única de R$ 9,90, o valor de <b>R$ 480,00</b> será depositado automaticamente na sua conta informada.
      </p>
      
      <button 
        onClick={onFinalize}
        className="w-full p-4 bg-secondary text-white font-bold text-lg rounded-lg hover:bg-blue-800 transition-colors shadow-md"
      >
        PAGAR SEGURO E RECEBER R$ 480,00
      </button>
      
      <p className="text-[0.7rem] text-gray-400 mt-4 flex items-center justify-center gap-1">
        <span className="inline-block">🏦</span> Transação protegida por criptografia bancária.
      </p>
    </div>
  );
};

export default StepInsurance;