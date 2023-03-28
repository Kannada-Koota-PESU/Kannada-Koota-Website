import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function Landing() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    {/* <Route path='/' element={<Loader/>}></Route> */}
    {/* <Route path='/landing' element={<Landing/>}></Route> */}
    
    </Routes>
    </BrowserRouter>

  <p>lessgo!!</p>
</>
  );
}

export default Landing;