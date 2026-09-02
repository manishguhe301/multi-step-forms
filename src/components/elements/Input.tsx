import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

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
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password" && showPassword ? "text" : type;

  return (
    <>
      <div className="relative">
        <input
          type={inputType}
          id={id}
          placeholder={placeholder}
          value={value}
          className={`w-full rounded-sm border-2 border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-500 focus:border-blue-400 focus:ring-blue-400 outline-none disabled:cursor-not-allowed ${className || ""} ${isTask2 && 'text-blue-400! placeholder:text-[#b3c3db] px-4 py-3'}`}
          min={type === "number" ? 0 : undefined}
          max={max}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.value)}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-0 text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </>
  )
}

export default Input