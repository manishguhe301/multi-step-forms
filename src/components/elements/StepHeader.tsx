
const StepHeader = ({ stepTitle, subTitle }:
  { stepTitle: string; subTitle?: string }) => {
  return (
    <div >
      <h1 className="text-center font-semibold text-xl text-gray-900">{stepTitle}</h1>
      <p className="text-center text-gray-400 text-sm tracking-tight mt-2">{subTitle}</p>
    </div>
  )
}

export default StepHeader