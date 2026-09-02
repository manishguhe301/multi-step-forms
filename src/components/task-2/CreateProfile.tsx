import { ChevronLeft, ChevronRight } from "lucide-react";

import gradient from "../../assets/gradient.png";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const navigate = useNavigate()

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${gradient})` }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[70%] backdrop-blur-sm" />

      <div className="absolute left-1/2 top-1/2 h-[72vh] w-[78vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-2xl">

      </div>

      <div className="absolute left-1/2 top-[calc(50%-36vh-3rem)] flex w-[78vw] max-w-5xl -translate-x-1/2 items-center justify-center">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="absolute left-0 cursor-pointer text-white/90 transition-opacity hover:text-white flex items-center gap-1 text-sm"
        >
          <ChevronLeft size={16} strokeWidth={3} /> Back to home
        </button>

        <h1 className="text-2xl font-normal text-white">
          Create New Account
        </h1>

        <button
          type="button"
          className="absolute right-0 cursor-pointer text-sm font-medium text-white/90 transition-opacity hover:text-white"
        >
          Contact Us
        </button>
      </div>

      <div className="absolute left-1/2 top-[calc(50%+36vh+1.5rem)] flex w-[78vw] max-w-5xl -translate-x-1/2 items-center justify-between">
        <button
          type="button"
          className="flex cursor-pointer items-center gap-1.5  text-[#5FACFA] transition-colors "
        >
          <ChevronLeft size={17} strokeWidth={2.5} />
          Back to Login
        </button>

        <button
          type="button"
          className="flex cursor-pointer items-center gap-1 rounded-sm bg-linear-to-r from-[#8993F7] to-[#747FEA] px-8 py-2.5 font-medium text-white shadow-sm transition-all hover:opacity-90 text-base"
        >
          Next Step
          <ChevronRight size={17} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default CreateProfile;