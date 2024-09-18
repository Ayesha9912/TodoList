import React, { useState } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Maintodo from './Maintodo'
function App(){
  const [todovalue, settodovalue] = useState("")
  const [todoArray, settodoArray] = useState([])
  const [edit, setedit] = useState(false)
  const [currentTodo, setcurrentTodo] = useState(null)
   const handleValue = (e)=>{
    settodovalue(e.target.value)
   }
  const AddTodo = (e)=>{
    e.preventDefault()
    if(edit){
      UpdateTodo()
    }
    else{
      settodoArray([...todoArray , todovalue])
      settodovalue("")
      console.log(todoArray, "TodoArray")
    }
  }
  const DeleteTodo = (index)=>{
   settodoArray(todoArray.filter((_,idx)=> idx !== index))
  }
  const editTodo = (ele , index)=>{
    setedit(true)
    setcurrentTodo(index)
    settodovalue(ele)
  }
  const UpdateTodo = (e)=>{
    e.preventDefault()
    const updatedTodo = [...todoArray]
    updatedTodo[currentTodo] = todovalue
    settodoArray(updatedTodo)
    settodovalue("")
    setcurrentTodo(null)
    setedit(false)
  }
  return(
    <div>
      <Navbar/>
      <Header handleValue={handleValue} todovalue={todovalue} UpdateTodo={UpdateTodo} AddTodo={AddTodo} edit={edit}/>
      <Maintodo todoArray={todoArray} editTodo={editTodo} DeleteTodo={DeleteTodo}/>
    </div>
  )
}
export default App