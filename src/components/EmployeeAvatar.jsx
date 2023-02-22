import React from 'react'
import '../css/Employee.css'
import women from '../assets/women.png'

const EmployeeAvatar = ({pic}) => {
  return (
    <div className='profile'>
        <img src={pic} alt="employee Profile" />
    </div>
  )
}

export default EmployeeAvatar