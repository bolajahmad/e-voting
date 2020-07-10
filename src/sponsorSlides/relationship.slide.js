import React from 'react'

import Form from '../organisms/form'
import InputField from '../atoms/inputs'


const RelationshipSlide = () => {
    return (
        <Form>
            <InputField type="text" name="maritalStatus" id="maritalStatus" list="marital-status">
                Relationship Status
            </InputField>

            <datalist id="marital-status">
                <option value="single" />
                <option value="married" />
                <option value="divorced" />
            </datalist>
        </Form>
    )
}

export default RelationshipSlide