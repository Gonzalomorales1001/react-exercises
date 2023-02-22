import React, { useEffect, useState } from 'react'
import MovieData from '../components/MovieData'
import { useForm } from 'react-hook-form'

const initialMovies=[{
  name: 'Spiderman: No Way Home',
  description: 'Tras descubrirse la identidad secreta de Peter Parker como Spider-Man, la vida del joven se vuelve una locura. Peter le pide ayuda al Doctor Strange para recuperar su vida, pero algo sale mal y provoca una fractura en el multiverso.',
  category: 'Acción',
},
{
  name:'Matrix: Resurrección',
  description:'Acosado por extraños recuerdos, la vida de Neo toma un giro inesperado al encontrarse, nuevamente, dentro de la Matrix.',
  category:'Ciencia Ficción',
}
]

const MoviesScreen = () => {

  const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('movies'))||initialMovies)
  const {register,handleSubmit,watch,formState:{errors}}=useForm()

  const movieForm=(data)=>{
    setMovies([...movies,data])
  }

  const deleteMovie=(index)=>{
    let temporaryArray=movies.slice(0)
    temporaryArray.splice(index,1)
    setMovies(temporaryArray)
  }

  useEffect(() => {
    localStorage.setItem('movies',JSON.stringify(movies))
  }, [movies])
  

  return (
    <>
    <h1 className='text-center'>Mis películas</h1>
    <form action="" className="container mb-3" onSubmit={handleSubmit(movieForm)}>
        <label htmlFor="">Nombre de la pelicula</label>
        <input type="text" {...register('name',{required:true})} className='form-control mb-2' />
        {errors.name?.type==='required'&&<small className='text-info d-block'>Por favor introduce un nombre</small>}
        <label htmlFor="">descripcion de la pelicula</label>
        <textarea name="desc" {...register('description',{required:true})} id="" cols="30" rows="10" className='form-control mb-2'></textarea>
        {errors.description?.type==='required'&&<small className='text-info d-block'>Escribe una descripción</small>}
        <label htmlFor="">elige una categoria</label>
        <select className="form-select mb-2" defaultValue={'Drama'} {...register('category',{required:true})} aria-label="Elige una categoria">
            <option value="Comedia">Comedia</option>
            <option value="Drama">Drama</option>
            <option value="Infantil">Infantil</option>
            <option value="Terror">Terror</option>
        </select>
        {errors.category?.type==='required'&&<small className='text-info d-block'>Selecciona una categoria</small>}
        <button type='submit' className="btn btn-info">Añadir película</button>
    </form>

    <div className="container">
        {
          movies.map((movie,index)=><MovieData name={movie.name} desc={movie.description} category={movie.category} deleteFunc={()=>deleteMovie(index)} key={index}/>)
        }
        </div>

    </>
  )
}

export default MoviesScreen