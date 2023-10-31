import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { CardSection } from './Components/CardSection';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Home } from './Home';
import { All } from './Components/All';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path='/get_all' element={<All></All>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
