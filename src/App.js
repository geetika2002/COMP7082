import './App.css';

import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Dashboard } from './screens/dashboard';
import { Main} from './screens/Main';
import { Login} from './screens/Login';
import { Logout } from './screens/Logout';
import { Test } from './screens/test';
import { Resource } from './screens/Resource';
import { CreateUser } from './screens/createUser';
import { About } from './screens/about';
import { Faq } from './screens/faq';
import { EditProfile } from './screens/editProfile';
import ForgotPasswordPage from './screens/forgotPassword';



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
        <Route path="/create" element = {<CreateUser/>}></Route>
        <Route path="/about" element = {<About/>}></Route>
        <Route path="/faq" element = {<Faq/>}></Route>
        <Route path="/edit" element = {<EditProfile/>}></Route>
        <Route path="/forgot" element = {<ForgotPasswordPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;