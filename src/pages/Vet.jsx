import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import MeetPet from '../components/MeetPet'
import '../css/vet.css'

const Vet = () => {
    const [meets, setMeets] = useState(JSON.parse(localStorage.getItem('meets'))||[])
    const {register,handleSubmit,watch,formState:{errors}} = useForm()

    const vetForm=(data)=>{
        setMeets([...meets,data])
    }

    useEffect(() => {
        localStorage.setItem('meets',JSON.stringify(meets))
    }, [meets])

    const deleteMeet=(index)=>{
        let temporaryArray=meets.slice(0)
        temporaryArray.splice(index,1)
        setMeets(temporaryArray)
    }
    

  return (
    <>
    <form onSubmit={handleSubmit(vetForm)}>
    <article className='text-light add-meeting vet-shadow mb-4'>
        <header className='p-4 position-relative'>
        <h3 className='text-center'>Complete Form</h3>
            {/* {errors.pet&&<small className='text-danger bottom-0 position-absolute'>Please Check your info</small>}
            {errors.owner&&<small className='text-danger bottom-0 position-absolute'>Please Check your info</small>}
            {errors.date&&<small className='text-danger bottom-0 position-absolute'>Please Check your info</small>}
            {errors.hour&&<small className='text-danger bottom-0 position-absolute'>Please Check your info</small>}
            {errors.detail&&<small className='text-danger bottom-0 position-absolute'>Please Check your info</small>} */}
        </header>
        <main className='p-2'>
                <div className='add-meeting__inputs'>
                    <label htmlFor="">Pet's Name:</label>
                    <input type="text" {...register('pet',{required:true})}/>
                </div>
                {errors.pet&&<small className='text-danger d-block text-center'>Please Check your info</small>}
                <div className='add-meeting__inputs'>
                    <label htmlFor="">Owner's Name:</label>
                    <input type="text" {...register('owner',{required:true})}/>
                </div>
                {errors.owner&&<small className='text-danger d-block text-center'>Please Check your info</small>}
                <div className='add-meeting__inputs d-flex flex-column flex-sm-row justify-content-center'>
                    <div className='mt-2 mt-sm-0'>
                    <label htmlFor="">Date:</label>
                    <input type="date" {...register('date',{required:true})}/>
                    </div>
                    <div className='mt-2 mt-sm-0'>
                    <label htmlFor="">Hour:</label>
                    <input type="time" {...register('hour',{required:true})}/>
                    </div>
                </div>
                {errors.date&&<small className='text-danger d-block text-center'>Please Check your info</small>}
                {errors.hour&&<small className='text-danger d-block text-center'>Please Check your info</small>}
                <div className='add-meeting__inputs'>
                    <label htmlFor="">Details:</label>
                    <textarea className='textarea' {...register('detail',{required:true})} cols="30" rows="1"></textarea>
                </div>
                {errors.detail&&<small className='text-danger d-block text-center'>Please Check your info</small>}
        </main>
        <footer className='p-4 text-center'>
            <button className="btn btn-info btn-vet vet-shadow d-inline-block">Add meet</button>
        </footer>
    </article>
    </form>
    <div className="d-flex flex-wrap align-items-center justify-content-center">
    {
        meets.map((meet,index)=><MeetPet petName={meet.pet} owner={meet.owner} date={meet.date} hour={meet.hour} detail={meet.detail} deleteFunc={()=>deleteMeet(index)} key={index}/>)
    }
    </div>
    </>
  )
}

export default Vet