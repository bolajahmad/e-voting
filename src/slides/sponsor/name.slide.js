import React from 'react';

import { TitleSelectBox } from '../slide.styles'

import Form from '../../organisms/form';
import InputField from '../../atoms/inputs'


export const NameSlide = () => {
    return (
        <Form direction="row">
            <TitleSelectBox>
                <InputField type="text" name="title" id="title" list="choose-title">
                    Title
                </InputField>

                <datalist id="choose-title">
                    <option value="Mr." />
                    <option value="Mrs." />
                    <option value="Miss" />
                </datalist>
            </TitleSelectBox>

            <InputField type="text" name="lastName" id="lastName">
                Last Name
            </InputField>

            <InputField type="text" name="firstName" id="firstName">
                First Name
            </InputField>
        </Form>
    )
}

export default NameSlide;