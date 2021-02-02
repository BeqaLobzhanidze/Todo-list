import React , {useState } from 'react'
import {AiFillCloseCircle } from 'react-icons/ai'

function Todo({todos , removeTodo , completedTodo  }) {




  

  return ( 
    <div className="fairly">   
       {todos.map((item,index) => {
        return (
        <div  key={index}  
          className = {item.isComplete ? "row complete" : "row"} 
          
         >
        <div key={item.id} className = {"display"} onClick = { () => completedTodo(item.id)}>
          {item.value}
        </div>
        <AiFillCloseCircle className={"icons"} onClick = { () => removeTodo(item.id)  }/> 
        
      </div>      ) 
      })}
    </div>
  )
}

export default Todo
