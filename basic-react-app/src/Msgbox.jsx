function Msgbox({ userName, textColor }) {
    let style = { color: textColor || 'black' };
    return (
     <div>
      <h1 style={style}>Hello, {userName}!</h1>
    </div>
    )
}

export default Msgbox