import React, { useState } from 'react'

import { Form, Label, Input } from './selectFile.styles'
import Paragraph from '../../paragraph'


const UploadFile = ({ children, ...otherProps }) => {
    const [ labelState, setLabelState ] = useState("");  
    const [selectedFile, setSelectedFile] = useState(null);

    const handleChange = e => {
        e.preventDefault();
        
        setSelectedFile(e.target.files[0])
    }

    const fileData = () => {
        return (selectedFile) ? 
        (<div>
            <Paragraph align="center" size={2} weight={700}>
                File selected: {selectedFile.name}
            </Paragraph>
        </div>) : null
    }

    return (
        <>
            <Form enctype="multipart/form-data">
                {fileData()}
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
                    id="uploadFile" onChange={handleChange} {...otherProps}
                />
            </Form>
        </>
    )
}
 
export default UploadFile