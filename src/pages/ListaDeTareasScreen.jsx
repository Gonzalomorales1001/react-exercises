import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Task from '../components/Task'

const ListaDeTareasScreen = () => {

    const [task, setTask] = useState(JSON.parse(localStorage.getItem('tasks'))||['Estudiar','caminar'])

    const {register,handleSubmit,watch,formState:{errors}}=useForm()

    const taskForm=(data)=>{
        return setTask([...task,data.task])
    }
    
    useEffect(() => {
        localStorage.setItem('tasks',JSON.stringify(task))
    }, [task])
    
    const deleteTask=(key)=>{
        let temporaryArray=task.slice(0)
        temporaryArray.splice(key,1)
        setTask(temporaryArray)
    }
    
  return (
    <div className='text-center'>
        <section className='p-2 m-2 text-center d-inline-block bg-transparent text-light'>
            <h1>Bienvenido!</h1>
            <p>Ingresa tus tareas</p>
            <form onSubmit={handleSubmit(taskForm)}>
                <input className='d-block text-center mx-auto' type="text" {...register('task',{required:true,minLength:5})}/>
                {errors.task?.type==="minLength"&&<small className='text-info'>Mínimo 5 caracteres</small>}
                {errors.task?.type==="required"&&<small className='text-info'>Por favor introduce algo</small>}
            </form>
            <div className="m-3">
                {task.map((task,index)=>(<Task desc={task} key={index} deleteTask={()=>deleteTask(index)}/>))}
            </div>
        </section>
    </div>
  )
}

export default ListaDeTareasScreen


// const ListaDeTareasScreen = () => {

//     const [task, setTask] = useState(JSON.parse(localStorage.getItem('tasks'))||['Estudiar','caminar'])
//     const [newTask, setNewTask] = useState()

//     const addNewTask=(e)=>{
//         e.preventDefault()
//         if(newTask){
//             setTask([...task,newTask])
//             return
//         }
//         alert('Por favor introduce algo')
//     }
    
//     useEffect(() => {
//         localStorage.setItem('tasks',JSON.stringify(task))
//         setNewTask('')
//     }, [task])
    
//     const deleteTask=(key)=>{
//         let copyArray=task.slice(0)
//         copyArray.splice(key,1)
//         setTask(copyArray)
//     }
    
//   return (
//     <div className='text-center'>
//         <section className='p-2 m-2 text-center d-inline-block bg-transparent text-light'>
//             <h1>Bienvenido!</h1>
//             <p>Ingresa tus tareas</p>
//             <form onSubmit={addNewTask}>
//                 <input type="text" value={newTask} maxLength={40} onInput={(e)=>setNewTask(e.target.value.charAt(0).toUpperCase()+e.target.value.substring(1))}/>
//             </form>
//             <div className="m-3">
//                 {task.map((task,index)=>(<Task desc={task} key={index} deleteTask={()=>deleteTask(index)}/>))}
//             </div>
//         </section>
//     </div>
//   )
// }