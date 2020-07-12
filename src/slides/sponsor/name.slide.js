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

            <Div width="30%">
                <InputField type="text" name="lastName" id="lastName">
                    Last Name
                </InputField>
            </Div>

            <Div width="30%">
                <InputField type="text" name="firstName" id="firstName">
                    First Name
                </InputField>
            </Div>
        </Form>
    )
}

export default NameSlide;