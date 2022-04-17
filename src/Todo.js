import React from 'react'
import {IoIosCheckmarkCircleOutline} from 'react-icons/io'
import {MdOutlineCancel} from 'react-icons/md'

const Todo =({todoList,removeTodo, markTodo})=> {

    return (
        <div>
            {todoList.map((todo,index)=> (
                <>
            <div className='grid grid-cols-2 font-medium text-lg mb-2' key={index}>
            <p className style={{textDecoration:todo.complete ? 'line-through': ''}}>{todo.task}</p>
            <div className='grid grid-cols-2 w-16 ml-32'>
               <div><button onClick={() => markTodo(index)}> <IoIosCheckmarkCircleOutline size={28} color='green'/></button></div>
               <div><button onClick={() => removeTodo(index)}><MdOutlineCancel size={28} color='red'/></button></div>
                </div>
                </div>
                </>
            ))}
        </div>
    )
}

export default Todo