function Error(props) {
    const { message } = props
    return (
        <div style={{padding: 18, fontSize: 20, color: '#e84118'}}>
            Error: {message}
        </div>
    )
}

export default Error