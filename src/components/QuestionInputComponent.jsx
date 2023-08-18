import React from 'react';

export default function QuestionInputComponent({ name, id, onChange, question, inputs, checked }) {
  return (
    <div className='flex justify-start gap-3'>
      <input
        type="checkbox"
        name={name}
        id={id}
        onChange={() => {
          const newValue = inputs[name] === 1 ? 0 : 1; // Inversez la valeur entre 1 et 0
          onChange({ target: { name, value: newValue } }); // Appelez la fonction onChange avec les valeurs mises à jour
        }}
      />
      <h1 className="font-bold text-white text-lg">{question}</h1>
    </div>
  );
}
