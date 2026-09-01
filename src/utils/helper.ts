import type React from 'react';
import type { ProjectFormData } from '../components/task-1/CreateProject';

export const today = new Date().toISOString().split('T')[0];

export type StepProps = {
  formData: ProjectFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProjectFormData>>;
};
