import {useState} from 'react'
import data from './data.json'
import './App.css';
import Todoform from './Todoform';
import Todo from './Todo';

function App() {
  const [todoList, setTodoList] = useState(data)

  const addTodo=(task) => {
    const newTodos = [...todoList,{task}]
    setTodoList(newTodos)
  }

  const markTodo = index => {
    const newTodos = [...todoList]
    newTodos[index].complete = true;
    setTodoList(newTodos)
  }

  const removeTodo = index => {
    const newTodos =[...todoList]
    newTodos.splice(index,1)
    setTodoList(newTodos)
  }

  
  return (
    <div className="App flex justify-center mt-24">
      <div className=''>
        <div className='flex items-center border-b-2 border-current mb-8'>
        <p className='text-xl font-bold mr-80 mb-2'>WORK</p> 
         <p className='mb-2'>{todoList.length}</p>
        </div>
         <Todo todoList={todoList} removeTodo={removeTodo} markTodo={markTodo}/>
         <Todoform addTodo={addTodo} />
      </div>
      
    </div>
  );
}

export default App;
