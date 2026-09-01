import { useState } from "react";
import StepHeader from "../elements/StepHeader"
import InputContainer from "../elements/InputContainer";
import Label from "../elements/Label";
import Select from "../elements/Select";
import Input from "../elements/Input";
import { IndianRupee } from "lucide-react";

const types = ["Time & Materials", "Fixed Fee", "Non-Billable"]

const Step2 = () => {
  const [selectedType, setSelectedType] = useState(types[0]);

  return (
    <div className="flex flex-col gap-4 py-4 h-full">
      <StepHeader
        stepTitle="Project type"
        subTitle="Don't panic - You can also customize this types in settings"
      />

      <div className="flex w-full h-full flex-col gap-6">
        <div className="flex w-full overflow-hidden rounded-sm border border-gray-300 mt-4">
          {types.map((type, index) => {
            const isSelected = selectedType === type;

            return (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`flex flex-1 items-center justify-center px-3 py-2.5 text-xs  font-medium transition-colors duration-200 tracking-tight ${isSelected
                  ? "bg-blue-500 text-white"
                  : "bg-gray-50 text-gray-400 hover:bg-gray-200 cursor-pointer"
                  } ${index !== types.length - 1 ? "border-r-2 border-gray-300" : ""
                  }`}
              >
                {type}
              </button>
            );
          })}
        </div>

        <InputContainer>
          <Label
            label="Hourly"
            htmlFor="hourly"
            desc={"We need hourly rates to track your project's billable amount."}
          />

          <div className="flex items-center gap-2 mt-2.5">
            <Select
              id="hourly"
              textToShow="Project Hourly Rate"
              options={[
                { value: "per-hour", label: "Per Hour" },
                { value: "per-day", label: "Per Day" },
                { value: "per-week", label: "Per Week" },
              ]}
              className="w-1/2! "
            />
            <div className="relative w-[30%]">
              <IndianRupee className="absolute top-3 left-2 text-gray-400" strokeWidth={3} size={16} />
              <Input
                type="number"
                placeholder="0.00"
                className='pl-6 appearance-none'

              />
            </div>
          </div>
        </InputContainer>

        <InputContainer>
          <Label
            htmlFor="budget"
            label="Budget"
            desc={"We need hourly rates to track your project's billable amount."}
          />
          <Select
            id="budget"
            options={[
              { value: "hours-person", label: "Hours per Person" },
              { value: "hours-project", label: "Hours per Project" },
              { value: "hours-week", label: "Hours per Week" },
            ]}
            defaultValue="hours-person"
            className="w-1/2! mt-2.5"
          />

          <div className="flex flex-col gap-1.5 mt-2.5">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="reset" id="reset" />
              <label htmlFor="reset" className="text-sm text-gray-400">Budget resets every month</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="alert" id="alert" />
              <div className="flex flex-row  items-center  gap-2 text-sm text-gray-400">
                <label htmlFor="alert">
                  Send email alerts if project exceeds
                </label>
                <Input
                  type="number"
                  placeholder="0.00"
                  className="w-16! p-1! "
                  value="80.00"
                  disabled
                />
                <label htmlFor="alert">
                  % of budget
                </label>
              </div>
            </div>
          </div>
        </InputContainer>
      </div>
    </div>
  )
}

export default Step2