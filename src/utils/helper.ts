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
      errors.endDate = 'End date cannot be before the start date';
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

export const defaultFields = {
  projectName: '',
  client: '',
  startDate: today,
  endDate: today,
  notes: '',

  projectType: 'Time & Materials',
  hourlyRateType: '',
  hourlyRate: '',
  budgetType: 'hours-person',
  budgetResetsMonthly: false,
  budgetAlertEnabled: false,
  budgetAlertPercentage: '80',

  view: 'List',
  projectPermission: 'Everyone',
};

export type ProfileFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;

  brandName: string;
  brandType: string;
  streetAddress: string;
  city: string;
  zipCode: string;
  taxIdNumber: string;
};

export type ProfileFormErrors = Partial<Record<keyof ProfileFormData, string>>;

export const defaultProfileFields: ProfileFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',

  brandName: '',
  brandType: '',
  streetAddress: '',
  city: '',
  zipCode: '',
  taxIdNumber: '',
};

export const validateProfileStep = (
  step: number,
  formData: ProfileFormData,
): ProfileFormErrors => {
  const errors: ProfileFormErrors = {};

  if (step === 1) {
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Enter a valid email address';
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
  }

  if (step === 2) {
    if (!formData.brandName.trim()) {
      errors.brandName = 'Brand name is required';
    }

    if (!formData.brandType) {
      errors.brandType = 'Brand type is required';
    }

    if (!formData.streetAddress.trim()) {
      errors.streetAddress = 'Street address is required';
    }

    if (!formData.city.trim()) {
      errors.city = 'City is required';
    }

    if (!formData.zipCode.trim()) {
      errors.zipCode = 'Zip code is required';
    }

    if (!formData.taxIdNumber.trim()) {
      errors.taxIdNumber = 'Tax ID number is required';
    }
  }

  return errors;
};
