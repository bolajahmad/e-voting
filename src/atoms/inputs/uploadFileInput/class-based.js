class UploadFile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFile: null,
            isFocused: false
        };
    }

    onFileChange = (e) => {
        e.preventDefault();

        this.setState({ selectedFile: e.target.files[0]})
        console.log(this.selectedFile)
    }

    handleClick = e => {
        e.preventDefault()
        const formData = new FormData();

        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        console.log(this.state.selectedFile)
    }

    fileData = () => {
        return (this.state.selectedFile) ? 
        (<div>
            <ul>
                <li>File name: {this.state.selectedFile.name}</li>
            </ul>
        </div>) :
        (<p>
            Choose a file
        </p>)
    }

    render() {
        return (
            <Form enctype="multipart/form-data">
                <Label className={(this.isFocused) ? "focused" : ""} as="label" htmlFor="uploadFile" id="uploadLabel">
                    {this.children}
                </Label>

                <Input type="file" name="uploadFile"
                    onFocus={e => {
                        e.preventDefault();
                        this.setState({ isFocused: true });
                    }} onBlur={e => {
                        e.preventDefault();
                        this.setState({ isFocused: false });
                    }} onChange={this.onFileChange}
                />
                {this.fileData()}
            </Form>
        )
    }
}