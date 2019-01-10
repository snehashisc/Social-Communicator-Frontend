import React from 'react';

const CreateFormFields = render => ({ input, label, classNameForlabel, placeHolder, classNameForElement, inputText, type, meta: { touched, error } }) => (
    <div className= {classNameForElement}>
      <label className= {classNameForlabel}>{label}</label>
      <div>
        {render (input, placeHolder, type)}
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )

 const RenderInput = CreateFormFields ((input, placeHolder, type, inputText) => 
    <input {...input} type= {type} placeholder={placeHolder}>{inputText}</input>
 )

 const RenderSelect = CreateFormFields ((input, placeHolder) => 
    <select {...input}/>
 )

 export {RenderInput, RenderSelect}