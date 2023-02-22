import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-info m-3 rounded-2 p-0">
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">Gonzalo</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ol className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">1,2,3. Hello World!</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/tareas">4,5. Lista de tareas</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/colors">6. Colors</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/employee">7. Lista de Empleados</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/simpleform">8. Simple Form</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/vet">9. Citas de veterinario</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/movies">10. Películas</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/news">11,12. News</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/weather">13. Weather</NavLink>
        </li> */}
      </ol>
    </div>
  </div>
</nav>
  )
}

export default Navbar