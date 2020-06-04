const revealPassword = (data, setData) => {
    if (data.type === "password") {
        setData({type: "text"});
    } else {
        setData({type: "password"});
    }
}


export default revealPassword