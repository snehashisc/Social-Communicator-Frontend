import React from 'react';

const CreateFormFields = render => ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        {render (input, label)}
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )

 const RenderInput = CreateFormFields ((input, label) => 
    <input {...input} placeholder={label}/>
 )

 const RenderSelect = CreateFormFields ((input, label) => 
    <select {...input}/>
 )

 export {RenderInput, RenderSelect}