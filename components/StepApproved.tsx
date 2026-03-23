import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface StepApprovedProps {
  onContinue: () => void;
}

const StepApproved: React.FC<StepApprovedProps> = ({ onContinue }) => {
  return (
    <div className="bg-card p-8 rounded-2xl shadow-xl text-center">
      <div className="flex justify-center mb-4">
        <CheckCircle2 className="w-20 h-20 text-primary" />
      </div>
      
      <h1 className="text-primary text-2xl font-bold mb-2">PARABÉNS!</h1>
      <p className="text-gray-500 mb-6">
        Seu empréstimo pré-aprovado foi localizado com sucesso!
      </p>
      
      <div className="text-5xl font-bold text-primary my-8 tracking-tight">
        R$ 480,00
      </div>
      
      <p className="text-gray-600 mb-6">
        Este valor está disponível para transferência imediata via PIX ou DOC.
      </p>
      
      <ul className="text-left text-sm text-gray-600 space-y-2 mb-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
        <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
            Liberação mesmo para negativados.
        </li>
        <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
            Parcelamento em até 12x.
        </li>
        <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
            Dinheiro na conta em poucos minutos.
        </li>
      </ul>
      
      <button 
        onClick={onContinue}
        className="w-full p-4 bg-primary text-white font-bold text-lg rounded-lg hover:bg-green-800 transition-colors shadow-md"
      >
        FINALIZAR EMPRÉSTIMO
      </button>
    </div>
  );
};

export default StepApproved;