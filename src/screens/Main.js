import { Link } from "react-router-dom"
import Navbar from "../components/navbar"
import userImage from "../assests/images/logo.png"

export function Main() {
    return (
      <>
        <Navbar />
        <div
          style={{
            backgroundColor: '#D6E2E8',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          {/* Container for Logo and Sign-Up Box */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '60px',
            }}
          >
            {/* Logo Image */}
            <img
              src={userImage}
              alt="User Logo"
              style={{ width: '400px', 
                height: '400px', 
                position: 'relative', 
                bottom: '100px'}}
            />
  
            {/* Sign-Up Box */}
            <div
              style={{
                backgroundColor: '#91C1D8',
                width: '300px',
                height: '330px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center', 
                position: 'relative', 
                bottom: '100px'
              }}
            >
              <div
                style={{
                  color: 'white',
                  fontFamily: 'Avenir',
                  fontSize: '40px',
                  textAlign: 'center',
                  marginBottom: '10px',
                }}
              >
                Suit Up for Sucess!
              </div>
              <button
                style={{
                  backgroundColor: '#003371',
                  width: '150px',
                  padding: '10px',
                  borderRadius: '30px',
                  color: 'white',
                  fontFamily: 'Avenir',
                  fontSize: '16px',
                  border: 'none',
                  cursor: 'pointer',
                  position: 'relative', 
                  top: '40px'
                }}
              >
                <Link to="/create">Sign Up</Link>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }