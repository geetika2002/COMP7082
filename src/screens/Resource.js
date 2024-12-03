// import { Link } from "react-router-dom" // Uncommented import statement for Link if routing is needed in the future
// import Sidebar from '../components/sidebar'; // Uncommented import statement for Sidebar if it will be used in the future

import Navbar from "../components/navbar"; // Import Navbar component to display it at the top of the page
import "../styles/resources.css"; // Import the CSS file for styling the Resources page
import ResourceGrid from "../components/resourceGrid"; // Import ResourceGrid component to display the grid of resources

export function Resource() {
    return (
        <>
            {/* Render the Navbar at the top of the page */}
            <Navbar />
            
            {/* Render the ResourceGrid component to display the resources */}
            <ResourceGrid />
        </>
    );
}
