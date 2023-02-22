import React, { useState } from 'react'
import EmployeeRow from '../components/EmployeeRow'
import {empleados} from '../data/Employee.js'

const employee=empleados

const EmployeeListScreen = () => {


  return (
    <div className='card bg-transparent text-light container'>
      {
        empleados.map((empleado,index)=>{
          return (<EmployeeRow 
            fullName={empleado.fullName} 
            title={empleado.title} 
            department={empleado.department} 
            pic={empleado.pic}
            key={empleado.id} 
            className="text-center"
            />)
      })
      
      }
    </div>
  )
}

export default EmployeeListScreen