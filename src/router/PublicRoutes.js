import LoginScreen from '../components/LoginScreen/LoginScreen'
import { Routes, Route, Navigate } from 'react-router-dom'

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={ <LoginScreen/> }/>
            <Route path='*' element={ <Navigate to="/login"/>} />
        </Routes>
    )
}

export default PublicRoutes