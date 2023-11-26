
import React from 'react'
import Input from './Input'
import Select from './Select'
import Inputnumber from './Inputnumber'


function FormControl({ ...props }) {
    const { control } = props
    const FieldName = {
        "input": <Input {...props} />,
        "select_custom_options": <Select {...props} />,
        "inputnumber": <Inputnumber {...props} />,
    }
    return FieldName[control]
}

export default FormControl