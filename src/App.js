import './App.css';

import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Dashboard } from './screens/dashboard';
import { Main} from './screens/Main';
import { Login} from './screens/Login';
import { Logout } from './screens/Logout';


function App() {


  return (
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/dashboard" element = {<Dashboard/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
