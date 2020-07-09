import React, { useState } from 'react'

import revealPassword from './revealPassword'

import { Wrapper, Label, Div, Input, Button } from './passwordInput.styles'


const PasswordInputField = ({ children, otherProps }) => {
    const [ data, setData ] = useState({
        type: "password",
        pressed: true
    });

    const togglePassword = (e) => {
        e.preventDefault()
        

        revealPassword(data, setData);
    }

    return (
        <Wrapper>
            <Label htmlFor="password">
                {children} 
            </Label>

            <Div>
                <Input type={data.type} name="password" id="password" {...otherProps} />

                <Button onClick={togglePassword} aria-pressed={data.pressed}>
                    {
                        (data.type === "password") ? "Show" : "Hide"
                    }
                </Button>
            </Div>
        </Wrapper>
    )
}

export default PasswordInputField