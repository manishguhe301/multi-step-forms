
const StepHeading = ({
  currentStep,
  heading,
  desc
}: {
  currentStep: string
  heading: string
  desc: string
}) => {
  return (
    <div className='flex flex-col gap-2 items-center justify-center'>
      <p className='text-[#BDC7E8] text-[16.5px] font-normal'>Step {currentStep}</p>
      <h1 className='text-[#526991] text-3xl'>{heading}</h1>
      <p className='text-[#606C85] text-base max-w-md text-center tracking-wide'>{desc}</p>
    </div>
  )
}

export default StepHeading