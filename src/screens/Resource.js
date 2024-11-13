import { Link } from "react-router-dom"
import Sidebar from '../components/sidebar';

export function Resource() {
    return (
        <> 
        <h1>This is the resources page!</h1>
        <Link to='/logout'>Logout</Link>
        </>
    )
}