import {useState} from 'react';
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import {useDispatch, useSelector} from 'react-redux';
import './App.css'

function App() {

  const dispatch = useDispatch();

  const todos = useSelector((state)=>state.operationsReducer);

  const [editFormVisibility, setEditFormVisibility]=useState(false);

  const [editTodo, setEditTodo]=useState('');

  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }

  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }

    return (
    <div className="todo_app">
      <br></br>
      <h1 className="todo_heading">To-Do App </h1>
      <Form editFormVisibility={editFormVisibility} editTodo={editTodo}
      cancelUpdate={cancelUpdate}/>
      <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
     
    </div>
  );
}

export default App;
