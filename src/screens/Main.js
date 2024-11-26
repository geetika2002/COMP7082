import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import userImage from "../assests/images/logo.png"; // Ensure the path to your image is correct
import "../styles/main.css"; // Link to the CSS file 

export function Main() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        {/* Logo Section */}
        <div className="logo-section">
            <img src={userImage} alt="HireHero Logo" className="logo" />
          </div>
        <div className="content-wrapper">
          {/* Text and Button Section */}
          <div className="text-section">
            <h1 className="heading">Suit Up for Success!</h1>
            <button className="sign-up-button">
              <Link to="/create" className="button-link">Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
