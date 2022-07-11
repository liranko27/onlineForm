import React from 'react'
import { useState } from 'react'
import "./FormInput.css"
function FormInput(props) {
    const [focus,setFocus] = useState(false)
    const {label,errorMessage,onChange,...inputSetting} = props
    const handleFocus= ()=>{
setFocus(true)
    }
  return (
    <div className="form-input">
        <label >{label}</label>
        <input {...inputSetting} onChange={onChange} onBlur={handleFocus} focused={focus.toString()}/>
        <span>{errorMessage}</span>
    </div>    
  )
}

export default FormInput