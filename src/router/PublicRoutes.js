import Login from '../components/Login/Login'
import { Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import Register from '../components/Registro/Registro'
const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={ <Login/> }/>
            <Route path='*' element={ <Navigate to="/Login"/>} />
            <Route path='/Registro' element={ <Register/> }/>
        </Routes>
    )
}

export default PublicRoutes