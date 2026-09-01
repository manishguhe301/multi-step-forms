import { SquareKanban, SquareText } from "lucide-react"
import StepHeader from "../elements/StepHeader"
import type { StepProps } from "../../utils/helper";

const items = [
  { title: "List", icon: SquareText },
  { title: "Board", icon: SquareKanban },
];

const Step3 = ({ formData, setFormData, errors }: StepProps) => {
  return (
    <div className="flex flex-col gap-4 py-4 ">
      <StepHeader
        stepTitle="Select a view"
        subTitle="You can also customize this views in settings"
      />

      <div className="flex w-full flex-col gap-4 py-4 sm:flex-row sm:gap-6 ">
        {items.map((item) => {
          const isSelected = formData.view === item.title;
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex w-full flex-col items-center gap-2"
            >
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, view: item.title, }))}
                className={`flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-sm border-2 p-10 transition-colors ${isSelected
                  ? "border-blue-500 shadow-sm hover:bg-blue-50"
                  : "border-gray-300 hover:bg-gray-100"
                  }`}
              >
                <Icon
                  size={60}
                  strokeWidth={1.5}
                  className={isSelected ? "text-blue-500 transition-colors duration-200" : "text-gray-400"}
                />
              </button>

              <span
                className={`text-sm ${isSelected
                  ? "font-semibold text-gray-600"
                  : "font-medium text-gray-400"
                  }`}
              >
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
      {errors?.view && (
        <p className="text-center text-xs font-medium text-red-500">
          {errors.view}
        </p>
      )}
    </div>
  )
}

export default Step3