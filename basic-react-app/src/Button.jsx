let counter = 0;
function count(){
    counter += 1;
    console.log(counter);
}

function Button(){
    return(
        <>
        <button onClick={count}>Click Me</button>
        </>
    )
}

export default Button;