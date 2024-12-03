import { Link } from "react-router-dom"; // Import Link for routing to other pages
import Navbar from "../components/navbar"; // Import the Navbar component
import userImage from "../assests/images/logo.png"; // Import the logo image
import "../styles/main.css"; // Link to the CSS file for styling the Main component

export function Main() {
  return (
    <>
      <Navbar /> {/* Render the Navbar component at the top of the page */}
      
      <div className="main-container"> {/* Main container div for the page layout */}
        
        {/* Logo Section */}
        <div className="logo-section">
            <img src={userImage} alt="HireHero Logo" className="logo" /> {/* Display the logo image */}
        </div>

        <div className="content-wrapper"> {/* Wrapper for the content below the logo */}
          
          {/* Text and Button Section */}
          <div className="text-section">
            <h1 className="heading">Suit Up for Success!</h1> {/* Main heading of the page */}
            
            {/* Sign Up button wrapped with Link component for routing */}
            <button className="sign-up-button">
              <Link to="/create" className="button-link">Sign Up</Link> {/* Link to the sign-up page */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
