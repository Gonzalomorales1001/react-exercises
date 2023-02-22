import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ColorsScreen from './pages/ColorsScreen'
import EmployeeListScreen from './pages/EmployeeListScreen'
import Error404 from './pages/Error404'
import HomeScreenHelloWorld from './pages/HomeScreenHelloWorld'
import ListaDeTareasScreen from './pages/ListaDeTareasScreen'
import MoviesScreen from './pages/MoviesScreen'
import NewsPageScreen from './pages/NewsPageScreen'
import SimpleForm from './pages/SimpleForm'
import Vet from './pages/Vet'
import WeatherScreen from './pages/WeatherScreen'


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeScreenHelloWorld defaultMsg='My Friend!'/>}/>
        <Route path="/tareas" element={<ListaDeTareasScreen/>} />
        <Route path="/colors" element={<ColorsScreen/>}/>
        <Route path="/employee" element={<EmployeeListScreen/>}></Route>
        <Route path="/simpleform" element={<SimpleForm/>}></Route>
        <Route path="/vet" element={<Vet/>}></Route>
        <Route path="/movies" element={<MoviesScreen/>}/>
        <Route path="/news" element={<NewsPageScreen/>}/>
        <Route path="/weather" element={<WeatherScreen/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
