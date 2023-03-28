import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Loader from './components/loader';
import Landing from './components/landing';
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Loader/>}></Route>
    <Route path='/landing' element={<Landing/>}></Route>
    
    </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
