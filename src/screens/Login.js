import { Link } from "react-router-dom"
import LoginForm from "../components/LoginForm.js"

export function Login() {
    return (
        <> 
        <h1>This is the login page!</h1>
        <Link to='/'>Main </Link>
        <Link to='/dashboard'>Dashboard </Link>
        <Link to='/logout'>Logout </Link>
        <LoginForm />
        </>
    )
}