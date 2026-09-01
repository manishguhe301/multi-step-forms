import { CircleUser, PackageOpen, Users } from "lucide-react"
import StepHeader from "../elements/StepHeader"
import { useState } from "react"

const options = [
  {
    type: "Everyone",
    desc: "All users can view the project, but guests cannot access it.",
    icon: PackageOpen,
  },
  {
    type: "Only Admins",
    desc: "Only admins can manage everything.",
    icon: CircleUser,
  },
  {
    type: "Specific People",
    desc: "Only selected people can view the project.",
    icon: Users,
  },
];

const Step4 = () => {
  const [selectedOption, setSelectedOption] = useState(options[0].type)

  return (
    <div className="flex flex-col gap-4 py-4 ">
      <StepHeader
        stepTitle="Who can manage projects"
        subTitle="Don't panic - You can also customize this permissions in settings"
      />

      <div className="flex w-full flex-col gap-4 py-4 sm:gap-6 ">
        {options.map((option) => {
          const isSelected = selectedOption === option.type;
          const Icon = option.icon;

          return (
            <button
              key={option.type}
              type="button"
              onClick={() => setSelectedOption(option.type)}
              className={`flex w-full cursor-pointer items-center gap-4 rounded-sm border-2 p-4 text-left transition-all duration-200 ${isSelected
                ? "border-blue-500 shadow-sm"
                : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                }`}
            >
              <div
                className={`flex size-12 shrink-0 items-center justify-center rounded-sm `}
              >
                <Icon
                  size={28}
                  strokeWidth={1.8}
                  className={isSelected ? "text-blue-500" : "text-gray-400"}
                />
              </div>

              <div className="min-w-0 flex-1">
                <p
                  className={`font-semibold ${isSelected ? "text-gray-700" : "text-gray-600"
                    }`}
                >
                  {option.type}
                </p>

                <p className="mt-1 text-sm leading-5 text-gray-400 font-medium">
                  {option.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  )
}

export default Step4