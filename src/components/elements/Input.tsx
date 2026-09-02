
type InputProps = {
  type?: string,
  id?: string,
  placeholder: string,
  className?: string,
  value?: string | number,
  disabled?: boolean,
  onChange?: (value: string) => void;
  max?: number,
  isTask2?: boolean,
  error?: string
}

const Input = ({
  type = "text",
  id, placeholder,
  className,
  value,
  disabled,
  onChange,
  max,
  isTask2 = false,
  error
}: InputProps) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        className={`w-full rounded-sm border-2 border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-500 focus:border-blue-400 focus:ring-blue-400 outline-none disabled:cursor-not-allowed ${className || ""} ${isTask2 && 'text-blue-400! placeholder:text-[#b3c3db] px-4 py-3'}`}
        min={type === "number" ? 0 : undefined}
        max={max}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {error && (
        <p className="mt-1 text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}

export default Input