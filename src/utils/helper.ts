import type React from 'react';

export const today = new Date().toISOString().split('T')[0];

export type StepProps = {
  formData: ProjectFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProjectFormData>>;
};

export type ProjectFormData = {
  projectName: string;
  client: string;
  startDate: string;
  endDate: string;
  notes: string;

  projectType: string;
  hourlyRateType: string;
  hourlyRate: string;
  budgetType: string;
  budgetResetsMonthly: boolean;
  budgetAlertEnabled: boolean;
  budgetAlertPercentage: string;

  view: string;
  projectPermission: string;
};
