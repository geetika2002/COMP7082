import { Link} from "react-router-dom"
import Navbar from "../components/navbar"
import userImage from "../assests/images/logo.png"

export function About() {
    return (
        <>
        <Navbar></Navbar>
        <h1>This is the About us page</h1>
        <Link to="/">Homepage</Link>
        </>
    )
}