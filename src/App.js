import './App.css';

import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Dashboard } from './screens/dashboard';
import { Main} from './screens/Main';
import { Login} from './screens/Login';
import { Logout } from './screens/Logout';
import { Test } from './screens/test';
import { Resource } from './screens/Resource';


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
      </Routes>
    </Router>
  );
}

export default App;