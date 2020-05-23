import React from 'react';
import './FormInput.scss'

const Form = ({handleChange, label, ...otherProps})=>(
    <div className='group'>
        <input className='form-input' type={`${otherProps.type}`} onChange={handleChange}/>
        {
            label?
                (<label 
                    className={`${otherProps.value.length 
                        ? 'shrink' : ''} form-input-label`}>
                        {label}
                </label>)
                :null
        }
    </div>
)
export default Form;