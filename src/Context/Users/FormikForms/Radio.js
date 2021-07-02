import React from 'react'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError'
function Radio(props) {
    const {name,label,options, ...rest} = props
    return (
        <div className="form-group mb-3">
            <label htmlFor={name} className="pr-5  text-info">{label}</label>
            <Field name={name} {...rest}>
            {
                ({field}) => {
                    return(
                        options.map(option => {
                            return(
                                <React.Fragment key={option.key}>
                                    <input type="radio" id={option.value} {...field} value={option.value} checked = {field.value === option.value} />
                                    <label htmlFor={option.key} className="pr-3 pl-2">{option.value}</label>
                                </React.Fragment>
                            )
                        })
                    )
                }
            }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Radio
