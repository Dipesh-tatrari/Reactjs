import { useState } from 'react';
function genrateno(){
    let num = Math.floor(Math.random()*1000);
    console.log(num);
    return num;
}

export default function Lottery(){
    let [lotteryNo, setLotteryNo] = useState(null);

    let addto15 = (num) => {
        let sum = 0;
        while(num > 0){
            let digit = num % 10;
            num = Math.floor(num / 10);
            sum += digit;
        }
        if(sum === 15){
            return true;
        } else {
            return false;
    }
    }
    return(
        <>
        <h1>Lottery</h1>
        {lotteryNo !== null && (
            addto15(lotteryNo) ? <p style={{color: 'green'}}>You won the lottery!</p> : <p style={{color: 'red'}}>Better luck next time!</p>
        )}
        <p>Lottery no. {lotteryNo}</p>
        <button onClick={()=>{setLotteryNo(genrateno())}}>Generate</button>
        </>
    )
}
