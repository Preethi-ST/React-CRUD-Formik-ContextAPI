import React from 'react'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError'

function Input(props) {
    const {label,name,...rest} = props
    return (
        <div className="mb-3 form-group">
            <label htmlFor = {name} className="text-info">{label}</label>
            <Field className ="form-control" id={name} name={name} {...rest} />
            <ErrorMessage name={name} component = {TextError} />
        </div>
        
    )
}

export default Input
