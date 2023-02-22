import React from 'react'
import EmployeeAvatar from './EmployeeAvatar'

const EmployeeRow = ({fullName,title,department,pic}) => {
  return (
    <div className='d-flex my-2 align-items-center'>
        <EmployeeAvatar pic={pic}/>
        <div className="mx-2">
          <h4>{fullName}</h4>
          <span className="badge text-bg-info">{department}</span>
          <span className='mx-2'>{title}</span>
        </div>
    </div>
  )
}

export default EmployeeRow