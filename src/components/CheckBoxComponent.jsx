import React from 'react';

export default function CheckBoxComponent({ label, onClick, inputs }) {
  const isSelected = inputs.ingredients.some((ingredient) => ingredient === label);

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
