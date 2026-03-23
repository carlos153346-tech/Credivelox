export enum AppStep {
  FORM = 'FORM',
  LOADING = 'LOADING',
  APPROVED = 'APPROVED',
  INSURANCE = 'INSURANCE'
}

export interface LoanFormData {
  fullName: string;
  birthDate: string;
  motherName: string;
  cpf: string;
  occupation: string;
  address: string;
  zipCode: string;
  reason: string;
}