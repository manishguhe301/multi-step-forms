import YourProfile from "./YourProfile";
import BusinessInformation from "./BusinessInformation";
import AdditionalUsers from "./AdditionalUsers";
import type { ProfileFormData } from "../../utils/helper";

const steps = [
  "Your Profile",
  "Business Information",
  "Additional Users",
];

const ProfileForm = ({
  currentStep,
  setCurrentStep,
  formData,
  setFormData,
  errors
}: {
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  formData: ProfileFormData
  setFormData: React.Dispatch<React.SetStateAction<ProfileFormData>>
  errors: Partial<Record<keyof ProfileFormData, string>>
}) => {

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl">
      <div className="flex w-full shrink-0 overflow-hidden rounded-t-2xl  bg-[#EBF1FE]">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCurrent = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <button
              key={step}
              type="button"
              onClick={() => {
                if (isCompleted) {
                  setCurrentStep(stepNumber);
                }
              }}
              className={`
  relative z-0 flex min-w-0 flex-1 items-center justify-center gap-3 px-4 py-4
  text-left transition-all duration-300
  sm:px-6 sm:py-5
  ${isCurrent
                  ? "z-10 bg-linear-to-r from-[#A1DEFE] to-[#6CACFB] text-white  "
                  : isCompleted
                    ? "bg-[#A1DEFE] text-white "
                    : "bg-[#EBF1FE] text-white"
                }
${index > 0 ? "-ml-px" : ""}
${isCurrent && currentStep !== 3 ? "rounded-r-full" : ""}
`}
            >
              <span
                className={`
            flex size-6 shrink-0 items-center justify-center rounded-full
            text-sm font-semibold transition-all duration-300
            sm:size-8
            ${isCurrent || isCompleted
                    ? "bg-white text-[#98D7FE]"
                    : "bg-[#BDC7E8] text-white"
                  }
          `}
              >
                {stepNumber}
              </span>

              <span className={`min-w-0 truncate text-xs font-normal ${isCompleted || isCurrent ? 'text-white' : 'text-[#BDC7E8]'} sm:text-[16.5px]`}>
                {step}
              </span>
            </button>
          );
        })}
      </div>


      <div className="min-h-0 flex-1 overflow-y-auto p-6 sm:p-8">
        {currentStep === 1 &&
          <YourProfile
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />}
        {currentStep === 2 &&
          <BusinessInformation
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />}
        {currentStep === 3 && <AdditionalUsers />}
      </div>
    </div>
  );
};

export default ProfileForm;