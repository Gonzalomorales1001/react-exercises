import React from 'react'

const MovieData = ({name,desc,category,deleteFunc}) => {
  return (
    <div className="card border-info bg-dark d-block my-2">
    <div className="card-header text-info d-flex justify-content-between align-items-center">
        <h3>{name}</h3>
        <button className="btn btn-info" onClick={deleteFunc}>Quitar</button>
    </div>
    <div className="card-body">
        <blockquote className="blockquote mb-0">
            <p>{desc}</p>
            <footer className="blockquote-footer">{category}</footer>
        </blockquote>
    </div>
</div>
  )
}

export default MovieData