import { useContext, useState } from "react"
import { LoginContext } from "../../context/LoginContext"

const LoginScreen = () => {
    const {login,user} = useContext(LoginContext)
    console.log(user)

    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    } 

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login({email,password})
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="container py-5">
                <input className="form-control my-1" type={"email"} placeholder="Email" value={email} onChange={handleEmailChange}/>
                <input className="form-control my-1" type={"password"} placeholder="Password" value={password} onChange={handlePasswordChange}/>
                <button type="submit" className="btn btn-primary">Ingresar</button>
            </form>
        </div>
    )
}

export default LoginScreen