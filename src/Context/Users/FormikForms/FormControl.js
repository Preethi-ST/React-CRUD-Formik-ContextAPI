import React from 'react'
import Input from './Input'
import Select from './Select'
import Radio from './Radio'

function FormControl(props) {
    const {control, ...rest} = props
    switch(control){
        case 'input':
            return <Input {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'radio':
            return <Radio {...rest} />
    }
}

export default FormControl
