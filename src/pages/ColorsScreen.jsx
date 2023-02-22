import React, { useEffect, useState } from 'react'
import Color from '../components/Color'

const initialColors=[
    {color:'#0dcaf0', colorname: 'Bootstrap Info'}
]

const ColorsScreen = () => {

    const [ColorList, setColorList] = useState(JSON.parse(localStorage.getItem('colors'))||initialColors)
    const [NewColorName, setNewColorName] = useState()
    const [NewColor, setNewColor] = useState()

    const saveColor=()=>{
        if(NewColorName){
            let addColor={color:NewColor,colorname:NewColorName}
            setColorList([
                addColor,
                ...ColorList
            ])
        }else{
            return alert('Color name input cant be empty')
        }
    }
    
    const deleteColor=(index)=>{
        if(confirm('Are you sure?')){
            let tempColorsArray=ColorList.slice(0)
            tempColorsArray.splice(index,1)
            setColorList(tempColorsArray)
        }
    }

    useEffect(() => {
        localStorage.setItem('colors',JSON.stringify(ColorList))
    }, [ColorList])
    

  return (
    <>
    <article className="text-light container my-5">
        <header>
            <h3>Add Colors!</h3>
        </header>
        <hr />
        <main className='p-5 w-100 d-flex justify-content-center gap-3 align-items-center'>
            <input type="color" name="color" className="select-color" id="" defaultValue="#0dcaf0" onChange={(e)=>setNewColor(e.target.value)}/>
            <input type="text" className='w-50' max={20} name="color-name" id="" onChange={(e)=>setNewColorName(e.target.value)} placeholder='Insert Color Name. E: Bs-Info' />
        </main>
        <hr />
        <footer className='text-end'>
            <button onClick={saveColor}>Save</button>
        </footer>
    </article>
    <div className='container d-flex flex-wrap justify-content-center'>
    {
        ColorList.map((color,index)=>(<Color bgColor={color.color} colorName={color.colorname} key={index} deleteFunction={()=>deleteColor(index)}/>))
    }
    </div>
    </>
  )
}

export default ColorsScreen