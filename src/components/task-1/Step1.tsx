import { Plus } from "lucide-react"
import InputContainer from "../elements/InputContainer"
import Label from "../elements/Label"
import Input from "../elements/Input"
import Select from "../elements/Select"
import { useState } from "react"
import { today } from "../../utils/helpers"
import DateInput from "../elements/DateInput"

const Step1 = () => {
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);

  return (
    <div className="flex flex-col gap-4 py-4">
      <h1 className="text-center font-semibold text-xl text-gray-900">Create a project</h1>
      <div className="flex w-full flex-col gap-6">
        <InputContainer>
          <Label htmlFor="projectName" label="Project name" />
          <Input
            type="text"
            id="projectName"
            placeholder="Enter project name here"
          />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="client" label="Client" />

          <div className="flex items-center gap-2">
            <div className="flex-1">
              <Select
                id="client"
                options={[
                  { value: "acme", label: "Acme Corporation" },
                  { value: "google", label: "Google" },
                  { value: "microsoft", label: "Microsoft" },
                  { value: "amazon", label: "Amazon" },
                ]}
              />
            </div>

            <span className="shrink-0 text-sm text-gray-400">
              Or
            </span>

            <button className="flex shrink-0 items-center justify-center gap-2 rounded-sm border-2 border-gray-300 px-3 sm:px-4 py-2 text-sm text-gray-600 transition-colors duration-200 hover:bg-gray-300 focus:outline-none cursor-pointer">
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
        </InputContainer>

        <InputContainer>
          <Label htmlFor="startDate" label="Dates" />

          <div className="flex min-w-0 items-center gap-2">
            <DateInput
              id="startDate"
              min={today}
              value={startDate}
              onChange={setStartDate}
            />

            <span className="shrink-0 text-sm text-gray-400">-</span>

            <DateInput
              id="endDate"
              min={startDate}
              value={endDate}
              onChange={setEndDate}
            />
          </div>
        </InputContainer>

        <InputContainer>
          <Label htmlFor="notes" label="notes" />

          <textarea
            id="notes"
            placeholder="Optional"
            className="w-full h-24 rounded-sm border-2 border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-500 focus:border-blue-400 focus:ring-blue-400 outline-none resize-none"
          />
        </InputContainer>
      </div>
    </div>
  )
}

export default Step1