import React from 'react';

const StepLoading: React.FC = () => {
  return (
    <div className="bg-card p-8 rounded-2xl shadow-xl text-center min-h-[400px] flex flex-col items-center justify-center">
      <h1 className="text-primary text-2xl font-bold mb-4">Analisando Perfil...</h1>
      
      <div className="relative w-16 h-16 my-6">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-secondary rounded-full border-t-transparent animate-spin"></div>
      </div>

      <p className="text-gray-500 mb-2">
        Estamos consultando nossos bancos parceiros para encontrar a melhor oferta para você.
      </p>
      <p className="text-gray-400 text-sm italic animate-pulse">
        Verificando restrições no CPF...
      </p>
    </div>
  );
};

export default StepLoading;