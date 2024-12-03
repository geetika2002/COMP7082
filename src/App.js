// Importing the necessary CSS file for styling
import "./App.css";

// Importing components for routing
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Importing screen components for the different routes
import { Dashboard } from "./screens/dashboard";
import { Main } from "./screens/main";
import { Login } from "./screens/login";
import { Resource } from "./screens/Resource";
import { CreateUser } from "./screens/createUser";
import { About } from "./screens/about";
import { Faq } from "./screens/faq";
import { EditProfile } from "./screens/editProfile";
import { Questions } from "./screens/questions";
import { Flashcards } from "./screens/flashcards";

function App() {
    return (
        // Wrapping the routes inside the Router component
        <Router>
            <Routes>
                {/* Defining routes with their corresponding components */}
                <Route path="/" element={<Main />} /> {/* Main screen route */}
                <Route path="/login" element={<Login />} /> {/* Login screen route */}
                <Route path="/dashboard" element={<Dashboard />}></Route> {/* Dashboard screen route */}
                <Route path="/questions" element={<Questions />}></Route> {/* Questions screen route */}
                <Route path="/resource" element={<Resource />}></Route> {/* Resource screen route */}
                <Route path="/create" element={<CreateUser />}></Route> {/* Create User screen route */}
                <Route path="/about" element={<About />}></Route> {/* About screen route */}
                <Route path="/faq" element={<Faq />}></Route> {/* FAQ screen route */}
                <Route path="/edit" element={<EditProfile />}></Route> {/* Edit Profile screen route */}
                <Route path="/flashcards" element={<Flashcards />}></Route> {/* Flashcards screen route */}
            </Routes>
        </Router>
    );
}

// Exporting the App component for use in other parts of the application
export default App;
