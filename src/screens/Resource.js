// import { Link } from "react-router-dom"
// import Sidebar from '../components/sidebar';
import Navbar from "../components/navbar"
import "../styles/resources.css"
import ResourceGrid from "../components/resourcegrid";

export function Resource() {
    return (
        <>
        <Navbar></Navbar>
        <ResourceGrid />
        </>
    )
}