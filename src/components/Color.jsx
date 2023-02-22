import React from 'react'
import '../css/Color.css'

const Color = ({bgColor,colorName,deleteFunction}) => {
  return (
    <article className='text-light color-article text-center'>
        <header>
            <h3>{colorName}</h3>
        </header>
        <hr />
        <main className=''>
            {/* <div className="color-detail d-inline-block">{bgColor}</div> */}
            <input type="color" className='color-preview' disabled value={bgColor} name="color-detail" id="" />
        </main>
        <hr />
        <footer className='text-center'>
            <button onClick={deleteFunction}>Delete</button>
        </footer>
    </article>
  )
}

export default Color