import React from 'react'

import Form from '../organisms/form'
import InputField from '../atoms/inputs'


const AddressSlide = () => {
    return (
        <Form>
            <InputField type="text" name="address" id="address">
                Residential Address
            </InputField>

            <InputField type="checkbox" id="permanentAdd" value="permanetAdd">
                Use as my permanent address
            </InputField>
        </Form>
    )
}

export default AddressSlide