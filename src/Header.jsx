import React from 'react'
function Header({ todovalue, UpdateTodo, AddTodo, handleValue, edit }) {
  return(
    <div>
      <form onSubmit={ edit? UpdateTodo : AddTodo} className='w-full flex justify-center items-center'>
        <input
          value={todovalue}
          onChange={handleValue}
          className='w-[90%] md:w-[400px] h-10 mt-5 border border-gray-600 rounded-md' type="text" placeholder='Enter your task' />
          <button type='submit' className='w-[150px] h-10 bg-pink-500 rounded-md mt-5 ml-3 text-white font-bold'>{edit ? "UpdateTodo": "Add Todo"}</button>
      </form>
    </div>
  )
}
export default Header;