import React from 'react'

import { Div, Label, Input } from './selectFile.styles'


const UploadFile = () => {
    return (
        <Div>
            <Label htmlFor="uploadFile">
                Select file...
            </Label>

            <Input type="file" name="uploadFile" id="uploadFile" />
        </Div>
    )
}

export default UploadFile