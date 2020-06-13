import React from 'react'

import { Wrapper, Span, UploadBox } from './votingPage.styles'

import UploadFile from '../../atoms/inputs/uploadFileInput'
import TextField from '../../atoms/inputs/textField'
import Button from '../../atoms/buttons'


const VotingPage = () => {

    return (
        <>
            <Wrapper>
                <UploadBox>
                    <UploadFile>
                        <Span>Upload image(s)..</Span><br />
                    </UploadFile>
                    <Span hint>Do not try to select more than 3 images. All images must be of same design</Span>
                </UploadBox>

                <TextField name="description" id="description" rows="5" cols="20">
                    describe your design
                </TextField>

                <Button onClick={e => alert("clicked")}>
                    Participate
                </Button>
            </Wrapper>
        </>
    )
}

export default VotingPage