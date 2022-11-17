import './Form.css'
import React,{useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, handleEditSubmit } from '../redux/todoapp/actions';

export const Form = ({editFormVisibility, editTodo, cancelUpdate}) => {

  const dispatch = useDispatch();


  const [todoValue, setTodoValue]=useState('');


  const [editValue, setEditValue]=useState('');

  useEffect(()=>{
    setEditValue(editTodo.todo);
  },[editTodo])

  const handleSubmit=(e)=>{
      e.preventDefault();
      let date = new Date();
      let time = date.getTime();
      let todoObj={
          id: time,
          todo: todoValue,
          completed: false
      }
      setTodoValue('');
      dispatch(addTodo(todoObj))
  }

  const editSubmit = (e) =>{
    e.preventDefault();
    let editedObj={
      id: editTodo.id,
      todo: editValue,
      completed: false
    }
    dispatch(handleEditSubmit(editedObj))
  }

  return (
    <>
      {editFormVisibility===false?(
        <form className='todo-form' onSubmit={handleSubmit}>
          <label>Add To-Do Items</label>
          <div className='inputbtn'>
              <input type="text"  required
              value={todoValue} onChange={(e)=>setTodoValue(e.target.value)}/>
              <button type="submit" >ADD</button>
          </div>
        </form>
      ):(
        <form className='todo-form' onSubmit={editSubmit}>
          <label>Update To-Do items</label>
          <div className='inputbtn'>
              <input type="text"  required
              value={editValue||""} onChange={(e)=>setEditValue(e.target.value)}/>
              <button type="submit">UPDATE</button>
        
          </div>
          <button type="button" className='backBtn'
          onClick={cancelUpdate}>Return</button>
        </form>
      )}
    </>
  )
}
