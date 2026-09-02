import { ChevronRight } from "lucide-react"

const Button = () => {
  return (
    <button
      className="flex cursor-pointer items-center gap-1 rounded-sm bg-linear-to-r from-[#8993F7] to-[#747FEA] p-2.5 shadow-sm text-sm text-white transition-all hover:opacity-90 font-bold "
    >
      <ChevronRight strokeWidth={3} />
    </button>
  )
}

export default Button