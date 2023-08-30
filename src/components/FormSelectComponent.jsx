import React from 'react'

export default function FormSelectComponent({label, name, id, options, onChange, value}) {
  return (
    <div className='flex  flex-col gap-1'>
        <label className="text-white font-bold" htmlFor="base_id">{label} </label>
              <select value={value} onChange={onChange} className="p-3 rounded-lg" name={name} id={id}>
                {options.map((option) => (
                    <option key={option} value={ options.indexOf(option) + 1}>{option}</option>
                ))}
              </select>
    </div>
  )
}
