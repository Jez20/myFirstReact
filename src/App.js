import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Message from './Components/Message';
import Button from './Components/Button';
import Hello from './Components/Hello';
import Employee from './Components/Employee';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Router from './Components/Router';

//jsx - js xml
//react not a framework!
//angular. vue
//function
function App() {  
  return (
    <div>
      <NavBar/>
       {/* <Home/> */}
       <Router/>
    </div>
  );
}

export default App;
