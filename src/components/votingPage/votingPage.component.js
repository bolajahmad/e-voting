import React from 'react'

import InputField from '../../atoms/inputs'
import PasswordInputField from '../../atoms/inputs/passwordInput'
import UploadFile from '../../atoms/inputs/uploadFileInput'
import TextField from '../../atoms/inputs/textField'
import Button from '../../atoms/buttons'


const VotingPage = () => {
    return (
        <>
            <div>
                <InputField id="email" name="email" type="email">email</InputField>

                <InputField id="fullName" name="fullName" type="text">name</InputField>

                <PasswordInputField>
                    password
                </PasswordInputField>

                <UploadFile>Select file to upload:</UploadFile>

                <TextField name="description" id="description" rows="5" cols="20">
                    describe your design
                </TextField>

                <Button onClick={e => alert("clicked")}>
                    Participate
                </Button>
            </div>
        </>
    )
}

export default VotingPage