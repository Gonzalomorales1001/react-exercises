import React, { useEffect, useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'

const SimpleForm = () => {

  const [customSubmitData, setCustomSubmitData] = useState()
  const {register,handleSubmit,watch,formState:{errors}} = useForm()

    const customSubmit=(data)=>{
      console.log(data)
      setCustomSubmitData(data)

      return alert('Your info has been sent successfully :)')
    }

  return (
    <>
<form className="container my-5 text-light" onSubmit={handleSubmit(customSubmit)}>
    <h1 className='text-center my-4'>Simple form</h1>
    <div className="row">
    <div className="col-12 col-md-4 offset-md-2">
        <label htmlFor="">Name</label>
      <input type="text" {...register('name',{required:true})} className="form-control" placeholder="Pablo"/>
    {errors.name?.type==="required"&&(<small className='position-absolute text-danger'>Please check your name</small>)}
    </div>
    <div className="col-12 col-md-4 mt-3 mt-md-0">
        <label htmlFor="">LastName</label>
      <input type="text" {...register('lastname',{required:true})} className="form-control" placeholder="Marino"/>
    {errors.lastname&&(<small className='position-absolute text-danger'>Please check your lastname</small>)}
    </div>
    <div className="col-12 col-md-8 offset-md-2 mt-3">
        <label htmlFor="">DNI</label>
      <input type="text" {...register('dni',{required:true,minLength:6})} className="form-control" placeholder="12.345.678"/>
    {errors.dni?.type==="required"&&(<small className='position-absolute text-danger'>Please check your dni</small>)}
    {errors.dni?.type==="minLength"&&(<small className='position-absolute text-danger'>DNI must be at least 6 characters</small>)}
    </div>
    <div className="col-12 col-md-8 offset-md-2 mt-3">
        <label htmlFor="">Email</label>
      <input type="email" {...register('email',{required:true})} className="form-control" placeholder="example@example.com"/>
    {errors.email&&(<small className='position-absolute text-danger'>Please check your email</small>)}
    </div>
    <div className="col-12 col-md-8 offset-md-2 mt-4 d-grid">
      <button className="btn btn-info" type="submit">Enviar</button>
    </div>
    </div>
<div>
    <h3 className='text-center mt-4'>Data:</h3>
    <div className="">
      <div className='text-center'>
        <h5 className='text-center'>Value Inputs</h5>
        <p>name:{watch("name")}</p>
        <p>lastname:{watch("lastname")}</p>
        <p>dni:{watch("dni")}</p>
        <p>email:{watch("email")}</p>
      </div>
      <hr />
      <div className='text-center'>
        <h5 className='text-center'>Sent Data</h5>
        <p>name:{customSubmitData?.name}</p>
        <p>lastname:{customSubmitData?.lastname}</p>
        <p>dni:{customSubmitData?.dni}</p>
        <p>email:{customSubmitData?.email}</p>
      </div>
    </div>
</div>
</form>
    </>
  )
}

export default SimpleForm