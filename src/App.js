import './App.css';

import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Dashboard } from './screens/dashboard.js';
import { Main} from './screens/Main.js';
import { Login} from './screens/Login.js';
import { Logout } from './screens/Logout.js';
import { Test } from './screens/test.js';
import { Resource } from './screens/Resource.js';
import { Signup } from './screens/Signup.js';


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/dashboard" element = {<Dashboard/>}></Route>
        <Route path="/test" element = {<Test/>}></Route>
        <Route path="/resource" element = {<Resource/>}></Route>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;