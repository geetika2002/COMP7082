import { Link } from "react-router-dom"  // Importing Link for routing
import Navbar from "../components/navbar"  // Importing Navbar component
import "../styles/about.css"  // Importing the CSS file for styling the about page
import teampic from "../assests/images/team-awesome-minions.jpg"  // Importing the team image

export function About() {
    return (
        <>
        <Navbar />  {/* Navbar component */}
          <div className="about-container">  {/* Main container for the about page */}
            <header className="about-header"> 
              <p className="about-subtitle">Our vision is to have a platform for jobseeker's to build confidence in their interviewing skills and secure the job they want.</p>
              <h1 className="about-title">About Team Awesome</h1>  {/* Main title of the about section */}
            </header>
            <div className="about-content">
              <p className="about-team-description">  {/* Description of the team */}
                We are first term BASc students from the Network Security and Game Development options.
              </p>
              <img src={ teampic } alt="team picture" className="team-image"></img> {/* Team picture */}
          </div>
      </div>
        </>
    )
}
