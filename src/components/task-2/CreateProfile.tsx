import { ChevronLeft, ChevronRight } from "lucide-react";
import gradient from "../../assets/gradient.png";
import { useNavigate } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import { useState } from "react";
import { defaultProfileFields, validateProfileStep, type ProfileFormData, type ProfileFormErrors } from "../../utils/helper";
import Success from "../elements/Success";

const CreateProfile = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const totalSteps = 3;

  const [formData, setFormData] =
    useState<ProfileFormData>(defaultProfileFields);

  const [errors, setErrors] =
    useState<ProfileFormErrors>({});

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    const newErrors = validateProfileStep(currentStep, formData);

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    const newErrors = validateProfileStep(currentStep, formData);

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    localStorage.setItem(
      "profile-form",
      JSON.stringify(formData)
    );

    console.log("Profile submitted:", formData);

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData(defaultProfileFields);
      setCurrentStep(1);
      setErrors({});
    }, 5000);
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto bg-cover bg-center bg-no-repeat px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
      style={{ backgroundImage: `url(${gradient})` }}
    >
      <div className="pointer-events-none fixed inset-0 backdrop-blur-sm" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center">

        <div className="relative flex w-full items-center justify-center pb-8 sm:pb-10">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="absolute left-0 flex cursor-pointer items-center gap-1 text-sm text-white/90 transition-opacity hover:text-white max-sm:hidden"
          >
            <ChevronLeft size={16} strokeWidth={3} />
            <span>Back to home</span>
          </button>

          <h1 className="text-xl font-normal text-white sm:text-2xl">
            Create New Account
          </h1>

          <button
            type="button"
            className="absolute right-0 cursor-pointer text-sm font-medium text-white/90 transition-opacity hover:text-white max-sm:hidden"
          >
            Contact Us
          </button>
        </div>

        <div className="w-full max-w-7xl rounded-2xl bg-white shadow-2xl">
          {isSubmitted ? (
            <Success
              successMsg="Account created successfully"
              desc=" Your information has been saved successfully."
              className="flex min-h-[400px] flex-col items-center justify-center px-6 text-center"
            />
          ) : (
            <ProfileForm
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}
        </div>

        {!isSubmitted && (
          <div className="flex w-full items-center justify-between pt-8 sm:pt-10">
            <button
              type="button"
              className="flex cursor-pointer items-center gap-1.5 text-[#5FACFA]"
              onClick={() => navigate("/")}
            >
              <ChevronLeft size={17} strokeWidth={2.5} />
              Back to Login
            </button>

            <button
              type="button"
              className="flex cursor-pointer items-center gap-1 rounded-sm bg-linear-to-r from-[#8993F7] to-[#747FEA] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:opacity-90 sm:px-8 sm:text-base"
              onClick={
                currentStep === totalSteps
                  ? handleSubmit
                  : handleNext
              }
            >
              {currentStep === totalSteps ? (
                "Submit"
              ) : (
                <>
                  Next Step
                  <ChevronRight size={17} strokeWidth={2.5} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateProfile;
