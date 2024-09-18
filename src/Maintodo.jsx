import React from 'react'
function Maintodo({todoArray,DeleteTodo, editTodo }){
  return(
    <div className='w-full h-auto mt-10 border'>
      <ul>
        {todoArray.map((ele, index) =>{
          return (
            <li key={index} className='w-[100%] flex justify-between bg-yellow-300 mt-5 p-7 border border-gray-600 rounded-md items-center'>
              <p className='text-lg font-semibold'>{ele}</p>
              <div  className='flex gap-x-3'>
              <button onClick={()=>editTodo( ele , index)} className='border border-gray-700 rounded-md bg-sky-500 text-white font-bold px-6 py-3'>Edit</button>
              <button onClick={()=>DeleteTodo(index)} className='border border-gray-700 rounded-md bg-red-500 text-white font-bold px-6 py-3'>Remove</button>
              </div>
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default Maintodo