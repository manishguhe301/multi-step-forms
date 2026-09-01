
const Label = ({ htmlFor, label, desc }: {
  htmlFor?: string,
  label: string,
  desc?: string
}) => {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="font-semibold text-base text-gray-700 capitalize"
      >
        {label}
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