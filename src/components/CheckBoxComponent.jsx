import React from 'react';

export default function CheckBoxComponent({ label, onClick, inputs, ingredients }) {

  const isSelected = inputs.ingredients.some((ingredient) => ingredient === label) || ingredients ? ingredients.includes(label) : false; 



  return (
    <button
      type="button"
      onClick={() => onClick(label)}
      className={`${
        isSelected ? 'bg-gold text-white' : 'bg-white text-gold'
      } text-lg p-2 rounded-lg border border-gold`}
    >
      {label}
    </button>
  );
}
