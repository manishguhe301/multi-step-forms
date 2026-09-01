import StepHeader from "../elements/StepHeader"
import InputContainer from "../elements/InputContainer";
import Label from "../elements/Label";
import Select from "../elements/Select";
import Input from "../elements/Input";
import { IndianRupee } from "lucide-react";
import type { StepProps } from "../../utils/helper";

const types = ["Time & Materials", "Fixed Fee", "Non-Billable"]

const Step2 = ({ formData, setFormData, errors }: StepProps) => {
  return (
    <div className="flex flex-col gap-4 py-4 h-full">
      <StepHeader
        stepTitle="Project type"
        subTitle="Don't panic - You can also customize this types in settings"
      />

      <div className="flex h-full  flex-col gap-5 py-2">
        <div>

          <div className="flex w-full rounded-sm border border-gray-300 mt-4">
            {types.map((type, index) => {
              const isSelected = formData.projectType === type;

              return (
                <button
                  key={type}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      projectType: type,
                    }))
                  }
                  className={`flex flex-1 items-center justify-center px-3 py-2.5 text-xs  font-medium transition-colors duration-200  ${isSelected
                    ? `bg-blue-500 text-white hover:bg-blue-600 ${index === 0 ? "rounded-l-sm" : index === types.length - 1 ? "rounded-r-sm" : ""
                    }`
                    : "bg-gray-50 text-gray-500 hover:bg-gray-200 cursor-pointer"
                    } ${index !== types.length - 1 ? "border-r-2 border-gray-300" : ""
                    }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
          {errors?.projectType && (
            <p className="mt-1 text-xs font-medium text-red-500">
              {errors.projectType}
            </p>
          )}
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
              value={formData.hourlyRateType}
              onChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  hourlyRateType: value,
                }))
              }
            />
            <div className="relative w-[30%] max-sm:w-1/2">
              <IndianRupee
                className="absolute top-3 left-2 text-gray-400"
                strokeWidth={3}
                size={16} />
              <Input
                type="number"
                placeholder="0.00"
                className='pl-6 appearance-none'
                value={formData.hourlyRate}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    hourlyRate: value,
                  }))
                }
              />
            </div>
          </div>

          {errors?.hourlyRateType && (
            <p className="mt-1 text-xs font-medium text-red-500">
              {errors.hourlyRateType}
            </p>
          )}

          {errors?.hourlyRate && (
            <p className="mt-1 text-xs font-medium text-red-500">
              {errors.hourlyRate}
            </p>
          )}
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
            value={formData.budgetType}
            className="w-1/2! mt-2.5 max-sm:w-full!"
            onChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                budgetType: value,
              }))
            }
          />
          {errors?.budgetType && (
            <p className="mt-1 text-xs font-medium text-red-500">
              {errors.budgetType}
            </p>
          )}

          <div className="mt-2.5 flex flex-col gap-2">
            <label
              htmlFor="reset"
              className="flex cursor-pointer items-center gap-2 text-sm text-gray-400"
            >
              <input
                type="checkbox"
                name="reset"
                id="reset"
                className="size-3.5 shrink-0 cursor-pointer accent-blue-500"
                checked={formData.budgetResetsMonthly}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    budgetResetsMonthly: e.target.checked,
                  }))
                }
              />

              <span>Budget resets every month</span>
            </label>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="alert"
                id="alert"
                className="mt-0.5 size-3.5 shrink-0 cursor-pointer accent-blue-500"
                checked={formData.budgetAlertEnabled}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    budgetAlertEnabled: e.target.checked,
                  }))
                }
              />

              <div className="flex min-w-0 flex-wrap items-center gap-2 text-sm text-gray-400">
                <label htmlFor="alert">
                  Send email alerts if project exceeds
                </label>

                <Input
                  type="number"
                  placeholder="0.00"
                  className="w-16! shrink-0 p-1! text-sm! rounded-sm"
                  value={formData.budgetAlertPercentage}
                  onChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      budgetAlertPercentage: value,
                    }))
                  }
                  disabled={!formData.budgetAlertEnabled}

                />

                <span className="shrink-0">% of budget</span>
              </div>
            </div>
          </div>
          {errors?.budgetAlertPercentage && (
            <p className="mt-1 text-xs font-medium text-red-500">
              {errors.budgetAlertPercentage}
            </p>
          )}
        </InputContainer>
      </div>
    </div >
  )
}

export default Step2