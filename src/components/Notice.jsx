import React from 'react'

const Notice = ({sourceName,title,description,link,image}) => {
  return (
<div className="card bg-transparent border-info notice h-100">
  <div className="card-header border-info text-info">
    {sourceName}
  </div>
  <img className='card-img-top w-100' src={image} alt={title} />
  <div className="card-body d-flex justify-content-between flex-column">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={link} target="_blank" className="btn btn-info">View More</a>
  </div>
</div>
  )
}

export default Notice