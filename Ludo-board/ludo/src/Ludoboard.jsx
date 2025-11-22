import {useState} from 'react';

export default function Ludoboard() {
    let [moves, setMoves] = useState({
      blue: 0,
      yellow: 0,
      green: 0,
      red: 0
    });

    let update = (color) => {
        console.log(moves[color]);
        setMoves((prevMoves) => {return {...prevMoves, [color]: prevMoves[color] + 1}});
    }

  return (
    <div>
      <p>Game Begins:</p>
      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button style = {{backgroundColor: 'blue'}} onClick={() => update('blue')}>+1</button>
        <p>Yellow moves = {moves.yellow}</p>
        <button style = {{backgroundColor: 'yellow'}} onClick={() => update('yellow')}>+1</button>
        <p>Green moves = {moves.green}</p>
        <button style = {{backgroundColor: 'green'}} onClick={() => update('green')}>+1</button>
        <p>Red moves = {moves.red}</p>
        <button style = {{backgroundColor: 'red'}} onClick={() => update('red')}>+1</button>
      </div>
    </div>
    
  );
}