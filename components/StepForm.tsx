import React from 'react';
import { CircleDollarSign } from 'lucide-react';

interface StepFormProps {
  onConsult: () => void;
}

const StepForm: React.FC<StepFormProps> = ({ onConsult }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConsult();
  };

  return (
    <div className="bg-card p-8 rounded-2xl shadow-xl text-center">
      <h1 className="text-primary text-2xl font-bold mb-2 flex items-center justify-center gap-2">
        <CircleDollarSign className="w-8 h-8" />
        Crédito Facilitado
      </h1>
      <p className="text-gray-500 mb-6 text-sm">
        Empréstimo para negativados com aprovação imediata.
      </p>

      <form onSubmit={handleSubmit} className="text-left space-y-4">
        <div>
          <label className="block text-sm font-bold mb-1.5 text-gray-700">Nome Completo</label>
          <input 
            type="text" 
            placeholder="Seu nome completo" 
            required 
            className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1.5 text-gray-700">Data de Nascimento</label>
          <input 
            type="date" 
            required 
            className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1.5 text-gray-700">Nome Completo da Mãe</label>
          <input 
            type="text" 
            placeholder="Nome da sua mãe" 
            required 
            className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1.5 text-gray-700">CPF</label>
          <input 
            type="text" 
            placeholder="000.000.000-00" 
            required 
            className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1.5 text-gray-700">Ocupação / Trabalho</label>
          <input 
            type="text" 
            placeholder="Ex: Autônomo, CLT..." 
            required 
            className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1.5 text-gray-700">Endereço Completo</label>
          <input 
            type="text" 
            placeholder="Rua, Número, Bairro" 
            required 
            className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1.5 text-gray-700">CEP</label>
          <input 
            type="text" 
            placeholder="00000-000" 
            required 
            className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1.5 text-gray-700">Motivo do Empréstimo</label>
          <select 
            required 
            className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
          >
            <option value="">Selecione...</option>
            <option value="contas">Pagar Contas</option>
            <option value="investimento">Investimento</option>
            <option value="emergencia">Emergência Médica</option>
            <option value="outros">Outros</option>
          </select>
        </div>

        <button 
          type="submit" 
          className="w-full p-4 bg-primary text-white font-bold text-lg rounded-lg mt-4 hover:bg-green-800 transition-colors shadow-md"
        >
          CONSULTAR OFERTAS
        </button>
      </form>
    </div>
  );
};

export default StepForm;