import './App.css';
import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Dashboard } from './screens/dashboard';

function App() {


  return (
    <Router>
      <Routes> 
        <Route path="/dashboard" element = {<Dashboard/>}></Route>
      </Routes>
    </Router> 

  );
}

export default App;
