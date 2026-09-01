import { Plus } from "lucide-react"
import InputContainer from "../elements/InputContainer"
import Label from "../elements/Label"
import Input from "../elements/Input"
import Select from "../elements/Select"
import DateInput from "../elements/DateInput"
import StepHeader from "../elements/StepHeader"
import { today, type StepProps } from "../../utils/helper"

const Step1 = ({ formData, setFormData, errors }: StepProps) => {
  return (
    <div className="flex flex-col gap-4 py-4">
      <StepHeader stepTitle="Create a project" />
      <div className="flex w-full flex-col gap-6">
        <InputContainer>
          <Label htmlFor="projectName" label="Project name" />
          <Input
            type="text"
            id="projectName"
            placeholder="Enter project name here"
            value={formData.projectName}
            onChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                projectName: value,
              }))
            }
          />
          {errors?.projectName && (
            <p className="mt-0 text-xs font-medium text-red-500">
              {errors.projectName}
            </p>
          )}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="client" label="Client" />

          <div className="flex items-center gap-2 max-sm:flex-col max-sm:w-full">
            <div className="flex-1 flex flex-row items-center gap-2 max-sm:w-full">
              <Select
                id="client"
                textToShow="Select a client"
                options={[
                  { value: "acme", label: "Acme Corporation" },
                  { value: "google", label: "Google" },
                  { value: "microsoft", label: "Microsoft" },
                  { value: "amazon", label: "Amazon" },
                ]}
                value={formData.client}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    client: value,
                  }))
                }
              />
              <span className="shrink-0 text-sm text-gray-400">
                Or
              </span>
            </div>

            <button
              type="button"
              className="flex shrink-0 items-center justify-center gap-1 rounded-sm border-2 border-gray-300 px-3 sm:px-4 py-2 text-sm text-gray-400 transition-colors duration-200 hover:bg-gray-300 focus:outline-none cursor-pointer max-sm:w-full">
              <Plus
                strokeWidth={3}
                size={16}
                className="text-gray-400"
              />
              <span className="whitespace-nowrap">
                New Client
              </span>
            </button>
          </div>

          {errors?.client && (
            <p className="text-xs font-medium text-red-500">
              {errors.client}
            </p>
          )}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="startDate" label="Dates" />

          <div className="flex min-w-0 items-center gap-2 max-sm:flex-col">
            <div className="flex  items-center gap-2 w-full">
              <DateInput
                id="startDate"
                min={today}
                value={formData.startDate}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    startDate: value,
                  }))
                }
              />

              <span className="shrink-0 text-sm text-gray-400">-</span>
            </div>

            <DateInput
              id="endDate"
              min={formData.startDate}
              value={formData.endDate}
              onChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  endDate: value,
                }))
              }
            />
          </div>
          {(errors?.startDate || errors?.endDate) && (
            <p className=" text-xs font-medium text-red-500">
              {errors.startDate || errors.endDate}
            </p>
          )}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="notes" label="notes" />

          <textarea
            id="notes"
            placeholder="Optional"
            value={formData.notes}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                notes: e.target.value,
              }))
            }
            className="w-full h-24 rounded-sm border-2 border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-500 focus:border-blue-400 focus:ring-blue-400 outline-none resize-none"
          />
        </InputContainer>
      </div>
    </div>
  )
}

export default Step1