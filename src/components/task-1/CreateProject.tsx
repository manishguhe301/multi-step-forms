import { ChevronLeft, X } from "lucide-react";
import { useState } from "react";
import Step1 from "./Step1";

const CreateProject = () => {
  const totalSteps = 4;
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gray-100">
      <div className="absolute left-1/2 top-1/2 flex h-175 max-h-[90vh] w-112.5 max-w-[90vw] -translate-x-1/2 -translate-y-1/2 flex-col rounded-xl bg-white p-3 shadow-2xl">
        <X
          size={16}
          className="absolute right-3 top-3 cursor-pointer text-gray-400"
          strokeWidth={3}
        />

        <div className="flex h-full flex-col p-5">
          <div className="p-2">
            {
              currentStep === 1 && <Step1 />
            }
          </div>

          <div className="relative mt-auto flex items-center py-4">
            <button className="flex items-center gap-1 text-sm font-semibold text-gray-400">
              <ChevronLeft strokeWidth={3} size={16} />
              Back
            </button>

            <button className="absolute left-1/2 -translate-x-1/2 rounded bg-blue-500 px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600">
              Next
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
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