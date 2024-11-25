import { Link} from "react-router-dom"
import Navbar from "../components/navbar"
// import userImage from "../assests/images/logo.png"
import "../styles/about.css"
import teampic from "../assests/images/team-awesome-minions.jpg"


export function About() {
    return (
        <>
        <Navbar></Navbar>
          <div className="about-container">
            <header className="about-header">
              <p className="about-subtitle">Our vision is to have a platform for jobseeker's to build confidence in their interviewing skills and secure the job they want.</p>
              <h1 className="about-title">About Team Awesome</h1>
            </header>
            <div className="about-content">
              <p className="about-team-description">
                We are first term BASc students from the Network Security and Game Development options.
              </p>
              <img src={ teampic } alt="team picture"className="team-image"></img>
          </div>
      </div>
        </>
    )
}