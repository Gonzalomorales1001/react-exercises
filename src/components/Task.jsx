import React from 'react'

const Task = ({desc,deleteTask}) => {
  return (
    <div className='d-flex justify-content-between align-items-center w-100 flex-wrap bg-transparent text-light my-2'>
      <span>{desc}</span>
      <button onClick={deleteTask}>X</button>
    </div>
  )
}

export default Task