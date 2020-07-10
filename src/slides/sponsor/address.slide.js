import React from 'react'

import Form from '../../organisms/form'
import InputField from '../../atoms/inputs'
import RadioField from '../../atoms/inputs/rcinput'


const AddressSlide = () => {
    return (
        <Form>
            <InputField type="text" name="address" id="address">
                Residential Address
            </InputField>

            <RadioField type="checkbox" id="permanentAdd" value="permanetAdd" onChange={e => e.target.value} checked={true}>
                Use as my permanent address
            </RadioField>
        </Form>
    )
}

export default AddressSlide