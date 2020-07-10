import React from 'react'

import Form from '../../organisms/form'
import InputField from '../../atoms/inputs'


const ProfessionSlide = () => {
    return (
        <Form>
            <InputField type="text" name="occupation" id="occupation">
                Profession
            </InputField>
        </Form>
    )
}

export default ProfessionSlide