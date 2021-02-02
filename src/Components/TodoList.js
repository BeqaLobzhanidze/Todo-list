import React , {useState , useEffect} from 'react'
import Todo from './Todo'
import TodoForm from './Todo-Form'


function TodoList() {

  const initialState = JSON.parse(localStorage.getItem("DataBase")) || []
  const [todos , setTodos] = useState(initialState)

  useEffect(()=> {
    localStorage.setItem("DataBase" , JSON.stringify(todos))
  } , [todos])

  const addTodo = todo => {
    if(todo.value === ""){
      return
    }
   
      setTodos([...todos , todo])
    
  }
  const removeTodo = todo => {
    console.log(todo)
    const removeArr = [...todos].filter(item => item.id !== todo)
    setTodos(removeArr)
  }

  const completedTodo = id => {
    let completeInfo = todos.map(item => {
      if(item.id===id) {
        item.isComplete = !item.isComplete
      }
      
      return item
    }) 
    setTodos(completeInfo)
  }


  return (
    <div className={"main"}> 
      <h1 className={"title"}>Todo App</h1>
      <div className={"container"}>
      <TodoForm onSubmit = {addTodo}/>
      <Todo todos = {todos} removeTodo = {removeTodo} completedTodo = {completedTodo}  />
      </div>
      
    </div>
  )
}

export default TodoList
