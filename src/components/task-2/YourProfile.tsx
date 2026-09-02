import Input from '../elements/Input'
import InputContainer from '../elements/InputContainer'
import Label from '../elements/Label'
import StepHeading from './StepHeading'

const YourProfile = () => {
  return (
    <div className='flex flex-col items-center gap-6'>
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
          />
        </InputContainer>
        <InputContainer>
          <Label isTask2 label='Last Name' isRequired />
          <Input
            isTask2
            placeholder='Input your Last Name'
          />
        </InputContainer>
        <InputContainer>
          <Label isTask2 label='Email' isRequired />
          <Input
            isTask2
            placeholder='Input your Email'
            type='email'
          />
        </InputContainer>
        <InputContainer>
          <Label isTask2 label='Phone Number' isRequired />
          <Input
            placeholder='Input your Phone Number'
            isTask2
            type='tel'
          />
        </InputContainer>
        <InputContainer>
          <Label isTask2 label='Password' isRequired />
          <Input
            placeholder='Create Password'
            isTask2
            type='password'
          />
        </InputContainer>
        <InputContainer>
          <Label isTask2 label='Confirm Password' isRequired />
          <Input
            placeholder='Confirm Your Password'
            isTask2
            type='password'
          />
        </InputContainer>
      </div>
    </div>
  )
}

export default YourProfile