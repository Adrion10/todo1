import React,{useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoFrom'

function TodoList() {
    const [todos, setTodos]= useState([])

const addTodo = todo =>{
    if(!todo.text || /^\s*$/.test(todo.text)){
        return
    }
    const newTodos  =[todo, ...todos]

    setTodos(newTodos)
    console.log(newTodos);
}

const updatedTodos =(todoId,newValue) =>{
    if(!newValue.text || /^\s*$/.test(newValue.text)){
        return
    }
    setTodos(perv=>perv.map(item =>(item.id=== todoId ? newValue : item)))
}

const removeTodo = id =>{
    const removeArr = [...todos].filter(todo => todo.id !==id)

    setTodos(removeArr)
}

const completeTodo =id =>{
    let updatedTodos = todos.map(todo =>{
        if(todo.id === id){
        todo.isComplete= !todo.isComplete
        }
        return todo
    })
    setTodos(updatedTodos)
}
    return (
        <div>
            <h1>What is the plan for today?</h1>
            <TodoForm onSubmit={addTodo}/> 
            <Todo todos ={todos} completeTodo={completeTodo} removeTodo ={removeTodo} updatedTodos= {updatedTodos}/>  
        </div>
    )
}

export default TodoList
