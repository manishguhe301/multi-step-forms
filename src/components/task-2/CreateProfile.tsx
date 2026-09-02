import { ChevronLeft, ChevronRight } from "lucide-react";
import gradient from "../../assets/gradient.png";
import { useNavigate } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import { useState } from "react";

const CreateProfile = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(2);

  const totalSteps = 3;

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
          <ProfileForm
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
          />
        </div>

        <div className="flex w-full items-center justify-between pt-8 sm:pt-10">
          <button
            type="button"
            className="flex cursor-pointer items-center gap-1.5 text-[#5FACFA] transition-colors"
            onClick={() => navigate("/")}
          >
            <ChevronLeft size={17} strokeWidth={2.5} />
            Back to Login
          </button>

          <button
            type="button"
            className="flex cursor-pointer items-center gap-1 rounded-sm bg-linear-to-r from-[#8993F7] to-[#747FEA] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:opacity-90 sm:px-8 sm:text-base"
            onClick={() => {
              if (currentStep < totalSteps) {
                setCurrentStep((prev) => prev + 1);
              }
            }}
          >
            {currentStep === 3 ? <span>Submit</span> :
              <>
                Next Step
                <ChevronRight size={17} strokeWidth={2.5} />
              </>
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
