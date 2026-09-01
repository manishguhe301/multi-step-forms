import type React from 'react';

export const today = new Date().toISOString().split('T')[0];

export type StepProps = {
  formData: ProjectFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProjectFormData>>;
  errors?: FormErrors;
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

export type FormErrors = Partial<Record<keyof ProjectFormData, string>>;

export const validateStep = (
  step: number,
  formData: ProjectFormData,
): FormErrors => {
  const errors: FormErrors = {};

  if (step === 1) {
    if (!formData.projectName.trim()) {
      errors.projectName = 'Project name is required';
    }

    if (!formData.client) {
      errors.client = 'Please select a client';
    }

    if (!formData.startDate) {
      errors.startDate = 'Start date is required';
    } else if (formData.startDate < today) {
      errors.startDate = 'Start date cannot be before today';
    }

    if (!formData.endDate) {
      errors.endDate = 'End date is required';
    } else if (formData.startDate && formData.endDate < formData.startDate) {
      errors.endDate = 'End date must be after the start date';
    }
  }

  if (step === 2) {
    if (!formData.projectType) {
      errors.projectType = 'Please select a project type';
    }

    if (formData.projectType === 'Time & Materials') {
      if (!formData.hourlyRateType) {
        errors.hourlyRateType = 'Please select an hourly rate type';
      }

      if (!formData.hourlyRate) {
        errors.hourlyRate = 'Hourly rate is required';
      } else if (Number(formData.hourlyRate) <= 0) {
        errors.hourlyRate = 'Hourly rate must be greater than 0';
      }
    }

    if (!formData.budgetType) {
      errors.budgetType = 'Please select a budget type';
    }

    if (formData.budgetAlertEnabled) {
      if (!formData.budgetAlertPercentage) {
        errors.budgetAlertPercentage = 'Alert percentage is required';
      } else {
        const percentage = Number(formData.budgetAlertPercentage);

        if (percentage <= 0 || percentage > 100) {
          errors.budgetAlertPercentage = 'Percentage must be between 1 and 100';
        }
      }
    }
  }

  if (step === 3) {
    if (!formData.view) {
      errors.view = 'Please select a view';
    }
  }

  if (step === 4) {
    if (!formData.projectPermission) {
      errors.projectPermission = 'Please select who can manage the project';
    }
  }

  return errors;
};
