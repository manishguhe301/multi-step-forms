import { ChevronDown } from "lucide-react";

const Select = ({
  id,
  options,
  textToShow = "Select an option",
  className = "",
  defaultValue = "",
}: {
  id?: string;
  textToShow?: string;
  options: {
    value: string;
    label: string;
  }[];
  className?: string;
  defaultValue?: string;
}) => {
  return (
    <div className= {`relative w-full ${className} `}>
      <select
        id={id}
        defaultValue={defaultValue}
        className={`w-full appearance-none rounded-sm border-2 border-gray-300 bg-gray-50 px-3 py-2 pr-10 text-sm text-gray-500! outline-none focus:border-blue-400 focus:ring-blue-400 $`}
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
  );
};

export default Select;