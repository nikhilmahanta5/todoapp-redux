import './Todos.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'
import { removeTodo, handleCheckbox } from '../redux/todoapp/actions';

export const Todos = ({handleEditClick, editFormVisibility}) => {
  const dispatch = useDispatch();
const todos = useSelector((state)=>state.operationsReducer);
  return todos.map((todo)=>(
    <div key={todo.id} className='todoBox'>
        <div className='content'>
            {editFormVisibility===false&&(
              <input type="checkbox" checked={todo.completed}
              onChange={()=>dispatch(handleCheckbox(todo.id))}></input>
            )}
            <p style={todo.completed===true?{color:'grey',fontStyle:'italic' }:{}}>
                {todo.todo}
            </p>
        </div>
        <div className='editDelete'>
              {editFormVisibility===false&&(
                <>
                  <span className='edit-icon' onClick={()=>handleEditClick(todo)}><Icon icon={edit2}/></span>
                  <span className = 'delete-icon' onClick={()=>dispatch(removeTodo(todo.id))}><Icon icon={trash}/></span>
                </>
              )}
        </div>
    </div>
  ))
}
