import { Check } from 'lucide-react'

const Success = ({ successMsg, desc, className }: {
  successMsg: string,
  desc: string,
  className?: string
}) => {
  return (
    <div className={className} >
      <div className="flex size-14 items-center justify-center rounded-full bg-green-100">
        <Check
          size={28}
          strokeWidth={3}
          className="text-green-600"
        />
      </div>

      <h2 className="mt-4 text-lg font-semibold text-gray-700">
        {successMsg}
      </h2>

      <p className="mt-2 text-center text-sm text-gray-400">
        {desc}
      </p>

      <span className="mt-2 text-xs font-medium text-gray-400">
        Redirecting to form in 5 seconds...
      </span>
    </div>
  )
}

export default Success