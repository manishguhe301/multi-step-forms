
const Label = ({ htmlFor, label }: {
  htmlFor?: string,
  label: string
}) => {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="font-semibold text-sm text-gray-700"
      >
        {label}
      </label>
    </div>
  )
}

export default Label