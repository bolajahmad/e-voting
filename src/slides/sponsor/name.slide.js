import React from 'react';

import { Div } from '../slide.styles'

import Form from '../../organisms/form';
import InputField from '../../atoms/inputs'


export const NameSlide = () => {
    return (
        <Form direction="row">
            <Div width="20%">
                <InputField type="text" name="title" id="title" list="choose-title">
                    Title
                </InputField>

                <datalist id="choose-title">
                    <option value="Mr." />
                    <option value="Mrs." />
                    <option value="Miss" />
                </datalist>
            </Div>

            <Div width="70%">
                <InputField type="text" name="fullName" id="fullName">
                    Full Name (Last Name or Surname first)
                </InputField>
            </Div>
        </Form>
    )
}

export default NameSlide;