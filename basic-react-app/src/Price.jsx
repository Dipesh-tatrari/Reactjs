function Price({oldPrice, newPrice}){
    let oldStyles = {
        textDecorationLine: 'line-through',
        color: 'red'
    }

    let newStyles = {
        fontWeight: 'bold'
    }
    let styles = {
        backgroundColor: "#e0c367",
        borderRadius: "5px",
    }
    return(
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
}

export default Price