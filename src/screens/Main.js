import { Link } from "react-router-dom"

export function Main() {
    return (
        <> 
        <h1>This is the main page!</h1>
        <Link to='/login'>Login </Link>
        </>
    )
}