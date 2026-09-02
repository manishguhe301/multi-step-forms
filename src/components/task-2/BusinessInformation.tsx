import StepHeading from './StepHeading'
import InputContainer from '../elements/InputContainer'
import Label from '../elements/Label'
import Input from '../elements/Input'
import Select from '../elements/Select'
import { CircleQuestionMark } from 'lucide-react'
import { Tooltip } from '@mui/material'

const BusinessInformation = () => {
  return (
    <div className='flex flex-col items-center gap-6'>
      <StepHeading
        currentStep='2'
        heading='Business Information'
        desc="Please, enter information about your company."
      />
      <div className='flex flex-col gap-4 items-center justify-center  w-3xl max-sm:grid-cols-1 max-sm:w-full max-md:w-full max-sm:gap-2'>
        <div>
          <p className='text-[#6cb1fb] font-light! text-lg uppercase'>General Information</p>

          <div className='grid grid-cols-2 gap-4 w-3xl max-sm:grid-cols-1 max-sm:w-full max-md:w-full mt-2'>
            <InputContainer>
              <Label isTask2 label='Brand Name' isRequired />
              <Input
                placeholder='Input your Brand Name'
                isTask2
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
              // value={formData.client}
              // onChange={(value) =>
              //   setFormData((prev) => ({
              //     ...prev,
              //     client: value,
              //   }))
              // }
              />
            </InputContainer>
            <InputContainer>
              <Label isTask2 label='Street Address' isRequired />
              <Input
                isTask2
                placeholder='Input your Street Address'
              />
            </InputContainer>
            <InputContainer>
              <Label isTask2 label='City' isRequired />
              <Input
                placeholder='Input City'
                isTask2
              />
            </InputContainer>
            <InputContainer>
              <Label isTask2 label='Zip Code' isRequired />
              <Input
                placeholder='Input Zip Code'
                isTask2
              />
            </InputContainer>
            <InputContainer>
              <Label isTask2 label='Tax ID Number' isRequired />
              <Input
                placeholder='Input Tax ID Number'
                isTask2
                type='number'
              />
            </InputContainer>
          </div>

        </div>
        <div>
          <p className='text-[#6cb1fb] font-light! text-lg uppercase'>Documents</p>
          lorem1000
        </div>
      </div>
    </div>
  )
}

export default BusinessInformation