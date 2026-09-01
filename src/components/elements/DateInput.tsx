import { Calendar } from "lucide-react";

const DateInput = ({
  id,
  min,
  value,
  onChange,
}: {
  id?: string;
  min?: string;
  value?: string;
  onChange?: (value: string) => void;
}) => {
  return (
    <div className="relative w-full">
      <Calendar
        size={20}
        strokeWidth={2.5}
        className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-gray-400"
      />

      <input
        type="date"
        id={id}
        min={min}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full appearance-none rounded-sm border-2 border-gray-300 bg-gray-50 py-2 pl-10 pr-3 text-sm text-gray-500 outline-none focus:border-blue-400 focus:ring-blue-400"
      />
    </div>
  );
};

export default DateInput;