import React from 'react'

interface SelectValueProps {
  placeholder: number
}

const SelectValue: React.FC<SelectValueProps> = ({ placeholder }) => {
  return <div>{placeholder}</div>
}

export default SelectValue
