import { Link } from "react-router-dom"
import SignupForm from "../components/SignupForm.js"

export function Signup() {
    return (
        <> 
        <h1>This is the signup page!</h1>
        <Link to='/'>Main </Link>
        <Link to='/dashboard'>Dashboard </Link>
        <Link to='/logout'>Logout </Link>
        <SignupForm />
        </>
    )
}