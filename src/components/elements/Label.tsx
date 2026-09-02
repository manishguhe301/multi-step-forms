
const Label = ({ htmlFor, label, desc, isTask2 = false, isRequired = false }: {
  htmlFor?: string,
  label: string,
  desc?: string,
  isTask2?: boolean,
  isRequired?: boolean
}) => {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className={` capitalize ${isTask2 ? 'text-[#5c6a84] font-normal text-sm' : 'text-gray-700 font-semibold text-base'}`}
      >
        {label}{isRequired &&<span className="text-gray-400">*</span>}
      </label>
      {desc && (
        <p className="text-sm text-gray-400">
          {desc}
        </p>
      )}
    </div>
  )
}

export default Label