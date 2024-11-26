import { Link } from "react-router-dom"
import Navbar from "../components/navbar"

export function Test() {
    return (
        <> 
        <Navbar></Navbar>
        <h1>This page is still under construction!</h1>
        <Link to='/logout'>Logout</Link>
        </>
    )
}