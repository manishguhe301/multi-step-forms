
const Input = ({ type = "text", id, placeholder, className, value, disabled, onChange, max, isTask2 = false }: {
  type?: string,
  id?: string,
  placeholder: string,
  className?: string,
  value?: string | number,
  disabled?: boolean,
  onChange?: (value: string) => void;
  max?: number,
  isTask2?: boolean
}) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      className={`w-full rounded-sm border-2 border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-500 focus:border-blue-400 focus:ring-blue-400 outline-none disabled:cursor-not-allowed ${className || ""} ${isTask2 && 'text-blue-400! placeholder:text-[#b3c3db]'}`}
      min={type === "number" ? 0 : undefined}
      max={max}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.value)}
    />
  )
}

export default Input