import React from 'react'

export default function FormInputComponent({label, type, placeholder, name, id, onChange}) {
  return (
    <div className="flex flex-col gap-1">
              <label className="text-white font-bold" htmlFor="name">{label}</label>
              <input
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                className="p-3 rounded-lg"
                id={id}
              />
            </div>
  )
}
