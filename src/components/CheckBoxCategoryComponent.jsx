import React from 'react'
import CheckBoxComponent from './CheckBoxComponent'

export default function CheckBoxCategoryComponent({name, elements, onChange, inputs}) {
  return (
    <div className='m-3'>
        <p className="text-gold font-bold text-center text-lg mb-2">{name ? <span>{name} :</span> : <span></span>}</p>
            <div className="flex flex-row gap-7 justify-between">
                {elements.map((element) => (
                    <CheckBoxComponent key={element} label={element} id={element} name={element} onClick={onChange} inputs={inputs}/>
                ))}
            </div>
    </div>
  )
}
