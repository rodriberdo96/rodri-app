import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Alert } from "../Alert/Alert";

const Login= () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const { login, loginWithGoogle, resetPassword } = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login(user.email, user.password);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleChange = ({ target: { value, name } }) =>
        setUser({ ...user, [name]: value });

    const handleGoogleSignin = async () => {
        try {
            await loginWithGoogle();
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!user.email) return setError("Por favor ingrese su email");
        try {
            await resetPassword(user.email);
            setError('Se ha enviado un email a su casilla de correo para restablecer su contraseña');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="w-full max-w-xs m-auto">
            {error && <Alert message={error} /> }
            <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
                    <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Email
                    </label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Ingrese su mail"
                    />
                </div>
                <div className="mb-4">
                    <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Contraseña
                    </label>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="*************"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline "
                    type="submit"
                    >
                        Iniciar sesión
                    </button>
                    <a
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 appearance-none"
                    href="#!"
                    onClick={handleResetPassword}
                    >
                        Olvidaste Contraseña?
                    </a>
                </div>
            </form> 
            <p className="my-4 text-sm flex justify-between px-3">
                No tenes una cuenta?
                <Link to="/Registro" className="text-blue-700 hover:text-blue-900">
                    Registrate
                </Link>
            </p>
            <button
            onClick={handleGoogleSignin}
            className="bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-full"
            >
                iniciar sesión con Google 
            </button>
        </div>
    );
}

export default Login;