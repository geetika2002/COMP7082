import { Link } from "react-router-dom"

export function Dashboard() {
    return (
        <> 
        <h1>This is the dashboard page!</h1>
        <Link to='/'>Logout</Link>
        </>
    )
}