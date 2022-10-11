import { BrowserRouter } from "react-router-dom"
import { useAuth} from "../context/AuthContext"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"
import React from 'react'



const AppRouter = () => {

    const {user} = useAuth()

    return (
        <BrowserRouter>
            {
                user 
                ? <PrivateRoutes/> 
                : <PublicRoutes/>
            }
        </BrowserRouter>
    )
}

export default AppRouter