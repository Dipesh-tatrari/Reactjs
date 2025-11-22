import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{ id: uuidv4(), text: "sampletask", isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    function addTask(){
        console.log("Adding task:", newTodo);
        setTodos((prevTodos)=>([...prevTodos, {id: uuidv4(), text: newTodo, isDone: false}]));
        setNewTodo("");
    }
    let updateTodoValue = (e) => {
        console.log(e.target.value);
        setNewTodo(e.target.value);
    }
    let deletetodo = (id) => {
        console.log("Deleting todo with id:", id);
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }

    let markedDoneAll = () => {
       let newArr = todos.map((todo) => {
            console.log("Converting to uppercase:", todo.text);
            return {id: todo.id, text: todo.text.toUpperCase(), isDone: true};

       });
       setTodos(() => {
        return newArr;
    
    })
}

    let markedDone = (id) => {
        let newArr = todos.map((todo) => {
            if (todo.id === id) {
                return {id: todo.id, text: todo.text.toUpperCase(), isDone: true};
            } else {
                return todo;
            }
        });
        setTodos(() => {
            return newArr;
        });
    }

  return (
    <div>
        <input type="text"  placeholder="Add a task"  value={newTodo} 
        onChange={updateTodoValue}/>
        <button onClick={() => addTask()}>Add</button>
        <br /><br />
        <br /><br />
        <hr />
      <h4>Todo list</h4>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span style={{textDecoration: todo.isDone ? 'line-through' : 'none'}}>
                        {todo.text}
                    </span>&nbsp;&nbsp;
                    <button onClick={()=>{deletetodo(todo.id)}}>Delete</button>
                    &nbsp;&nbsp;
                    <button onClick={()=>{markedDone(todo.id)}}>update</button>
                </li>
            ))}
        </ul>
          <br /><br />
          <button onClick={() => markedDoneAll()}>markedDone All</button>  

    </div>
  );
}