import React from 'react'

const InputContainer = ({ children, className }: {
  children: React.ReactNode;
  className?: string
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className || ''}`}>
      {children}
    </div>
  )
}

export default InputContainer