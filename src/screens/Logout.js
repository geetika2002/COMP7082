import { Link} from "react-router-dom"

export function Logout() {
    return (
        <> 
        <h1>This is the logout page!</h1>
        <Link to='/'>Main </Link>
        <Link to='/login'>Login </Link>
        <Link to='/logout'>Logout </Link>
        </>
    )
}