
const Input = ({ type, id, placeholder, className, value, disabled }: {
  type: string,
  id?: string,
  placeholder: string,
  className?: string,
  value?: string | number,
  disabled?: boolean
}) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      className={`w-full rounded-sm border-2 border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-500 focus:border-blue-400 focus:ring-blue-400 outline-none disabled:cursor-not-allowed ${className || ""}`}
      min={type === "number" ? 0 : undefined}
      disabled={disabled}
    />
  )
}

export default Input