import { Link } from "react-router-dom"
import Sidebar from '../components/sidebar';
import Navbar from "../components/navbar"

export function Resource() {
    return (
        <> 
        <Navbar></Navbar>
        <h1>This is the resources page!</h1>
        <Link to='/logout'>Logout</Link>
        </>
    )
}