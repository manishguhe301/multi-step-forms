import { ChevronDown } from "lucide-react";

type SelectProps = {
  id?: string;
  textToShow?: string;
  options: {
    value: string;
    label: string;
  }[];
  className?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  isTask2?: boolean,
  error?: string
}

const Select = ({
  id,
  options,
  textToShow = "Select an option",
  className = "",
  defaultValue = "",
  value,
  onChange,
  isTask2 = false,
  error
}: SelectProps) => {
  return (
    <div className={`w-full ${className}`}>
      <div className={`relative w-full`}>
        <select
          id={id}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          defaultValue={defaultValue}
          className={`w-full appearance-none rounded-sm border-2 border-gray-300 bg-gray-50 pr-10 text-sm text-gray-500! outline-none focus:border-blue-400 focus:ring-blue-400 ${isTask2 ? 'px-4 py-3' : ' px-3 py-2'}`}
        >
          <option value="" disabled>
            {textToShow}
          </option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          strokeWidth={2.5}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
      {error && (
        <p className="mt-1 text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Select;