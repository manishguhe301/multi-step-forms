import type { ProfileFormData } from '../../utils/helper'
import Input from '../elements/Input'
import InputContainer from '../elements/InputContainer'
import Label from '../elements/Label'
import StepHeading from './StepHeading'

export type ProfileProps = {
  formData: ProfileFormData
  setFormData: React.Dispatch<React.SetStateAction<ProfileFormData>>
  errors: Partial<Record<keyof ProfileFormData, string>>
}

const YourProfile = ({ errors, formData, setFormData }: ProfileProps) => {
  return (
    <div className='flex flex-col items-center gap-8'>
      <StepHeading
        currentStep='1'
        heading='Your Profile'
        desc="Enter the login information for your account. You will be able to create additional users after registering."
      />

      <div className='grid grid-cols-2 gap-4 w-3xl max-sm:grid-cols-1 max-sm:w-full max-md:w-full max-sm:gap-2'>
        <InputContainer>
          <Label isTask2 label='First Name' isRequired />
          <Input
            placeholder='Input your First Name'
            isTask2
            value={formData.firstName}
            onChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                firstName: value,
              }))
            }
            error={errors.firstName}
          />
        </InputContainer>
        <InputContainer>
          <Label isTask2 label='Last Name' isRequired />
          <Input
            isTask2
            placeholder='Input your Last Name'
            value={formData.lastName}
            onChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                lastName: value,
              }))
            }
            error={errors.lastName}
          />
        </InputContainer>
        <InputContainer>
          <Label isTask2 label='Email' isRequired />
          <Input
            isTask2
            placeholder='Input your Email'
            type='email'
            value={formData.email}
            onChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                email: value,
              }))
            }
            error={errors.email}
          />
        </InputContainer>
        <InputContainer>
          <Label isTask2 label='Phone Number' isRequired />
          <Input
            placeholder='Input your Phone Number'
            isTask2
            type='tel'
            value={formData.phoneNumber}
            onChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                phoneNumber: value,
              }))
            }
            error={errors.phoneNumber}
          />
        </InputContainer>
        <InputContainer>
          <Label isTask2 label='Password' isRequired />
          <Input
            placeholder='Create Password'
            isTask2
            type="password"
            value={formData.password}
            onChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                password: value,
              }))
            }
            error={errors.password}
          />
        </InputContainer>
        <InputContainer>
          <Label isTask2 label='Confirm Password' isRequired />
          <Input
            placeholder='Confirm Your Password'
            isTask2
            type='password'
            value={formData.confirmPassword}
            onChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                confirmPassword: value,
              }))
            }
            error={errors.confirmPassword}
          />
        </InputContainer>
      </div>
    </div>
  )
}

export default YourProfile