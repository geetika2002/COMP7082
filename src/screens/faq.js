import { Link} from "react-router-dom"
import Navbar from "../components/navbar"
import userImage from "../assests/images/logo.png"

export function Faq() {
    return (
        <>
        <Navbar></Navbar>
        <h1>This is the Faq us page</h1>
        <Link to="/">Homepage</Link>
        </>
    )
}