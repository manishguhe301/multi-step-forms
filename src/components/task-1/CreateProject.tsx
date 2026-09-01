import { ChevronLeft, X } from "lucide-react";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { today, type ProjectFormData, type FormErrors } from "../../utils/helper";

const CreateProject = () => {
  const totalSteps = 4;
  const [currentStep, setCurrentStep] = useState(1)

  const [formData, setFormData] = useState<ProjectFormData>({
    projectName: "",
    client: "",
    startDate: today,
    endDate: today,
    notes: "",

    projectType: "Time & Materials",
    hourlyRateType: "",
    hourlyRate: "",
    budgetType: "hours-person",
    budgetResetsMonthly: false,
    budgetAlertEnabled: false,
    budgetAlertPercentage: "80",

    view: "List",
    projectPermission: "Everyone",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    if (step === 1) {
      if (!formData.projectName.trim()) {
        newErrors.projectName = "Project name is required";
      }

      if (!formData.client) {
        newErrors.client = "Please select a client";
      }

      if (!formData.startDate) {
        newErrors.startDate = "Start date is required";
      } else if (formData.startDate < today) {
        newErrors.startDate = "Start date cannot be before today";
      }

      if (!formData.endDate) {
        newErrors.endDate = "End date is required";
      } else if (formData.endDate < formData.startDate) {
        newErrors.endDate = "End date must be after the start date";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gray-100">
      <div className="absolute left-1/2 top-1/2 flex h-162.5 max-h-[calc(100vh-2rem)] w-121 max-w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 flex-col rounded-xl bg-white p-3 shadow-2xl">
        <X
          size={16}
          className="absolute right-3 top-3 cursor-pointer text-gray-400"
          strokeWidth={3}
        />

        <div className="flex h-full min-h-0 flex-col p-3 sm:p-5">
          <div className="min-h-0 flex-1 overflow-y-auto no-scrollbar">
            {
              currentStep === 1 &&
              <Step1
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />
            }
            {currentStep === 2 && (
              <Step2
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />
            )}
            {
              currentStep === 3 && <Step3
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />
            }
            {
              currentStep === 4 && <Step4
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />
            }
          </div>

          <div className="relative mt-auto flex items-center py-4 shrink-0">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-semibold text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
              onClick={() => { setCurrentStep((prev) => Math.max(prev - 1, 1)) }}
              disabled={currentStep === 1}
            >
              <ChevronLeft strokeWidth={3} size={16} />
              Back
            </button>

            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 rounded bg-blue-500 px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 cursor-pointer"
              onClick={() => {
                if (currentStep === totalSteps) {
                  console.log(formData)
                  return;
                }

                if (validateStep(currentStep)) {
                  setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
                }
              }}
            >
              {currentStep === 4 ? "Submit" : "Next"}
            </button>
          </div>

          <div className="mt-4 flex shrink-0 items-center justify-center gap-2">
            {Array.from({ length: totalSteps }).map((_, index) => {
              const step = index + 1;
              const isActive = step === currentStep;

              return (
                <div
                  key={step}
                  className={`h-2 rounded-full transition-all duration-300 ${isActive
                    ? "w-3.5 bg-gray-400"
                    : "w-2 bg-gray-200"
                    }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;