import React from 'react'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError';

function Select(props) {
    const {label,name,options, ...rest} = props;
    return (
        <div className="mb-3 form-group">
            <label htmlFor={name} className="text-info">{label}</label>
            <Field as="select" name={name} id={name} className="form-control" {...rest}>
                <option value=""></option>
                {
                    options.map(option => {
                        return (
                            <option key={option.value} value={option.value}>{option.key}</option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component = {TextError} />
        </div>
    )
}

export default Select
