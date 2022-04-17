import React, {useState} from 'react'

const Todoform = ({addTodo}) => {
    const[inputTask, setInputTask] = useState('')

    const handleChange=(e)=> {
        setInputTask(e.target.value)
      }

      const handleSubmit=(e) => {
        e.preventDefault()
        if(!inputTask) return
        addTodo(inputTask)
        setInputTask('')
      }
    return (
        <form className='mt-12 ml-40' onSubmit={handleSubmit}>
             <input type='text' value={inputTask} className='py-2 px-2 bg-yellow-200  placeholder-slate-700 focus:outline-none focus:border-b border-slate-600' placeholder='Enter a new task here' onChange={handleChange} />
           <button className='text-white bg-black px-2 py-1 rounded-sm' type='submit'>Add</button>
        </form>
    )
}

export default Todoform
