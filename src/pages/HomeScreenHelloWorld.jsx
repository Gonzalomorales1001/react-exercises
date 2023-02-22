import React, { useState } from 'react'

const HomeScreenHelloWorld = ({defaultMsg="World!"}) => {

    const [MSG, setMSG] = useState()

  return (
    <div className='bg-transparent text-light'>
        <h1>Hello {defaultMsg} {MSG}</h1>
        <button onClick={()=>setMSG('(From changed state)')}>Click Me!</button>
        <button onClick={()=>setMSG('')}>X</button>
    </div>
  )
}

export default HomeScreenHelloWorld