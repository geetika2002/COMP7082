import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Main} from './screens/Main';
import { Login} from './screens/Login';
import { Logout } from './screens/Logout';

function App() {


  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
    </Router>
  )
}

export default App;
