import React, { useState, useRef } from 'react'

import { Form, Label, Input } from './selectFile.styles'


const UploadFile = ({ children, ...otherProps }) => {
    const [values, setValues] = useState([]);

    const inputRef = useRef();

    const handleChange = (e) => {
        e.preventDefault();

        var fileCount = inputRef.current.files,
            uploads = document.getElementById("uploads");
    }

    return (
        <>
            <ul id="uploads">
            </ul>

            <Form enctype="multipart/form-data">
                <Label as="label" htmlFor="uploadFile" id="uploadLabel">
                    {children}
                </Label>

                <Input type="file" name="uploadFile"
                    id="uploadFile" ref={inputRef} onChange={handleChange}
                />
            </Form>
        </>
    )
}

export default UploadFile