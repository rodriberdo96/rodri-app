import { createContext, useContext, useState } from "react";

export const LoginContext = createContext();

const usuarios = [
    {
        email: "antonio@hotmail.com",
        nombre: "Antonio",
        password: "1234",
    },
    {
        email: "rodrigonzales@gmail.com",
        nombre: "Rodrigo",
        password: "1235",
    },
    {
        email: "javiergonzales@gmail.com",
        nombre: "Javier",
        password: "1236",
    },
];


export const LoginProvider = ({children}) => {
    
        const [user, setUser] = useState({
            user:"rodrigonzales@gmail.com",
            loggedIn: true,
            error:""
        });
    
        const login = (values) => {
            const match = usuarios.find(user => user.email === values.email)
    
            if (match) {
                if (match.password === values.pass) {
                    setUser({
                        user: match.email,
                        logged: true,
                        error: ''
                    })
                } else {
                    setUser({
                        user: '',
                        logged: false,
                        error: "Password incorrecto"
                    })
                }
            } else {
                setUser({
                    user: '',
                    logged: false,
                    error: "Email incorrecto"
                })
            }
        }
        const logout = () => {
            setUser({
                user: "",
                loggedIn: false,
            });
        };
        
        return(
            <LoginContext.Provider value={{
                user,
                login,
                logout
            }}>
                {children}
            </LoginContext.Provider> 
        )
    }

export const useLoginContext = () => {
    return useContext(LoginContext)
}