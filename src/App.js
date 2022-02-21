
import './App.css';
import Registeruser from './Components/Registeruser';
import Userlogin from './Components/Userlogin';
import Home from './Components/Home';
import {Routes,Route} from 'react-router-dom'
import Resetpassword from './Components/Resetpassword';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Userlogin/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Registeruser" element={<Registeruser/>}/>
        <Route path="/Resetpassword" element={<Resetpassword/>}/>
      </Routes>
    
     
    </div>
  );
}

export default App;
