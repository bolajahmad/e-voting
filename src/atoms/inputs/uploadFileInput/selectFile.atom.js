import React, { useState } from 'react'

import { Form, Label, Input } from './selectFile.styles'


const UploadFile = ({ children, ...otherProps }) => {
    const [ labelState, setLabelState ] = useState("");  
    const [selectedFile, setSelectedFile] = useState('');

    const handleChange = e => {
        e.preventDefault();
        let selection = [];
        let file = e.target.files;

        for (let i = 0; i < file.length; i++) {
            selection.push(file[i].name);
            console.log(file[i].name);
            console.log(selectedFile);
        }

        setSelectedFile("select");
        console.log(selectedFile);
    }

    return (
        <>
            <ul id="uploads">
                <li>{}</li>
            </ul>

            <Form enctype="multipart/form-data">
                <Label className={(labelState === "focused") ? "focused" : ""} as="label" htmlFor="uploadFile" id="uploadLabel">
                    {children}
                </Label>

                <Input type="file" name="uploadFile"
                    onFocus={e => {
                        e.preventDefault();
                        setLabelState("focused");
                    }} onBlur={e => {
                        e.preventDefault();
                        setLabelState("");
                    }}
                    id="uploadFile" onChange={handleChange} multiple {...otherProps}
                />
            </Form>
        </>
    )
}

export default UploadFile