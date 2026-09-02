import StepHeading from './StepHeading'
import InputContainer from '../elements/InputContainer'
import Label from '../elements/Label'
import Input from '../elements/Input'
import Select from '../elements/Select'
import { Check, CircleQuestionMark, X } from 'lucide-react'
import { Tooltip } from '@mui/material'
import Button from '../elements/Button'
import type { ProfileProps } from './YourProfile'

const BusinessInformation = ({ errors, formData, setFormData }: ProfileProps) => {
  return (
    <div className='flex flex-col items-center gap-8'>
      <StepHeading
        currentStep='2'
        heading='Business Information'
        desc="Please, enter information about your company."
      />
      <div className='flex flex-col gap-8  justify-center lg:w-3xl  max-sm:w-full max-md:w-full max-sm:gap-2'>
        <div>
          <p className='text-[#6cb1fb] font-light! text-lg uppercase'>General Information</p>

          <div className='grid grid-cols-2 gap-4 lg:w-3xl max-sm:grid-cols-1 max-sm:w-full max-md:w-full mt-2'>
            <InputContainer>
              <Label isTask2 label='Brand Name' isRequired />
              <Input
                placeholder='Input your Brand Name'
                isTask2
                value={formData.brandName}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    brandName: value,
                  }))
                }
                error={errors.brandName}
              />
            </InputContainer>
            <InputContainer>
              <div className='flex items-center gap-2'>
                <Label isTask2 label='Brand Type' isRequired />
                <Tooltip describeChild
                  title={
                    <div className='flex flex-col gap-4'>
                      <p>
                        Local: Brands with distribution in 3 divisions or less OR multiple divisions but a total of 150 stores or less.
                      </p>
                      <p>
                        National: Brands with distribution in 4 or more divisions or in more than 150 stores.
                      </p>
                    </div>
                  }
                  placement='right' arrow>

                  <CircleQuestionMark className=" text-gray-400" size={16} />
                </Tooltip>
              </div>
              <Select
                id="brandType"
                textToShow="Select Type of Your Brand"
                options={[
                  { value: "local", label: "Local" },
                  { value: "national", label: "National" },
                ]}
                isTask2
                value={formData.brandType}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    brandType: value,
                  }))
                }
                error={errors.brandType}
              />
            </InputContainer>
            <InputContainer>
              <Label isTask2 label='Street Address' isRequired />
              <Input
                isTask2
                placeholder='Input your Street Address'
                value={formData.streetAddress}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    streetAddress: value,
                  }))
                }
                error={errors.streetAddress}
              />
            </InputContainer>
            <InputContainer>
              <Label isTask2 label='City' isRequired />
              <Input
                placeholder='Input City'
                isTask2
                value={formData.city}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    city: value,
                  }))
                }
                error={errors.city}
              />
            </InputContainer>
            <InputContainer>
              <Label isTask2 label='Zip Code' isRequired />
              <Input
                placeholder='Input Zip Code'
                isTask2
                value={formData.zipCode}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    zipCode: value,
                  }))
                }
                error={errors.zipCode}
              />
            </InputContainer>
            <InputContainer>
              <Label isTask2 label='Tax ID Number' isRequired />
              <Input
                placeholder='Input Tax ID Number'
                isTask2
                type='number'
                value={formData.taxIdNumber}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    taxIdNumber: value,
                  }))
                }
                error={errors.taxIdNumber}
              />
            </InputContainer>
          </div>

        </div>

        <div className='flex flex-col gap-2'>
          <p className='text-[#6cb1fb] font-light! text-lg uppercase'>Documents</p>

          <div className='flex flex-col gap-4'>
            <Label
              isTask2
              label="Once the following documents are signed, you'll be ready to get started"
            />

            <div className="w-full flex flex-row items-center  gap-4 mb-2">
              <div className='flex  items-center  justify-between w-full border px-5 py-2.5 rounded-sm border-gray-300 text-gray-500'>
                <p>Electronically sign the agreement(s)</p>
                <Check size={24} className='text-green-500' strokeWidth={4} />
              </div>
              <Button />
            </div>

            <div className="w-full flex flex-row items-center  gap-4">
              <div className='flex  items-center  justify-between w-full border px-5 py-2.5 rounded-sm border-gray-300 text-gray-500'>
                <p>Non adult beverage Kroger market supplier waiver and relese</p>
                <X size={24} className='text-red-500' strokeWidth={4} />
              </div>
              <Button />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='text-[#6cb1fb] font-light! text-lg uppercase'>COI PDF upload</p>

          <div className='flex flex-col gap-4'>
            <Label
              isTask2
              label="Once the following documents are signed, you'll be ready to get started"
            />

            <div className="w-full flex flex-row items-center  gap-4 mb-2">
              <div className='flex  items-center  justify-between w-full border px-5 py-2.5 rounded-sm border-gray-300 text-gray-500'>
                <p>Electronically sign the agreement(s)</p>
                <Check size={24} className='text-green-500' strokeWidth={4} />
              </div>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessInformation

