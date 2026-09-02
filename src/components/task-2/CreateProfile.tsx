import { ChevronLeft, ChevronRight } from "lucide-react";

import gradient from "../../assets/gradient.png";
import { useNavigate } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import { useState } from "react";

const CreateProfile = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  return (
    <div
      className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto bg-cover bg-center bg-no-repeat px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
      style={{ backgroundImage: `url(${gradient})` }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full backdrop-blur-sm" />

      <div className="absolute left-1/2 top-1/2 h-[86vh] w-[78vw] max-w-7xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-2xl my-14">

        <ProfileForm setCurrentStep={setCurrentStep} currentStep={currentStep} />
      </div>

      <div className="relative z-10 mx-auto mb-6 flex  items-center justify-center  w-[78vw] max-w-7xl ">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="absolute left-0 flex cursor-pointer items-center gap-1 text-sm text-white/90 transition-opacity hover:text-white max-sm:hidden"
        >
          <ChevronLeft size={16} strokeWidth={3} />
          <span className="hidden sm:inline">Back to home</span>
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

      <div className="absolute left-1/2 top-[calc(50%+43vh+2rem)] flex w-[78vw] max-w-7xl -translate-x-1/2 items-center justify-between py-14">
        <button
          type="button"
          className="flex cursor-pointer items-center gap-1.5  text-[#5FACFA] transition-colors "
          onClick={() => navigate("/")}
        >
          <ChevronLeft size={17} strokeWidth={2.5} />
          Back to Login
        </button>

        <button
          type="button"
          className="flex cursor-pointer items-center gap-1 rounded-sm bg-linear-to-r from-[#8993F7] to-[#747FEA] px-8 py-2.5 font-medium text-white shadow-sm transition-all hover:opacity-90 text-base"
          onClick={() => {
            if (currentStep < totalSteps) {
              setCurrentStep((prev) => prev + 1);
            }
          }}
        >
          Next Step
          <ChevronRight size={17} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default CreateProfile;