
const Input = ({ type, id, placeholder }: {
  type: string,
  id?: string,
  placeholder: string
}) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="w-full rounded-sm border-2 border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-500 focus:border-blue-400 focus:ring-blue-400 outline-none "
    />
  )
}

export default Input