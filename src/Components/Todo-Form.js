import React , {useState} from 'react'

function TodoForm(props) {
  const [input , setInput] = useState("")

  const handleChange = () => {
    props.onSubmit({
      id:Math.floor(Math.random()*1000) ,
      value:input ,
      isComplete: false
    })
    setInput("")
  }

  
  return (
    <div className = {"input"}>
      
      <input  
        type="text" 
        value = {input} 
        placeholder="  Update Todo" 
        onChange = {e => setInput(e.target.value)} 
      />
      <button 
        onClick = {handleChange}>Update
      </button>
    </div>
  )
}

export default TodoForm 
