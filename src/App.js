import "./App.css";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./screens/dashboard";
import { Main } from "./screens/Main";
import { Login } from "./screens/Login";
import { Logout } from "./screens/Logout";
import { Questions } from "./screens/questions";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/questions" element={<Questions />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
