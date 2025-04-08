import Header from './componets/Header'
import Home from './Page/Home';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Excursy from './Page/Excursy';

function App() {
  return (
    <>
    <Routes>
      
    <Route path="/" element={<Excursy />} />
     


      {/* <Header />
      

        <Route path='/excursy' element={<Excursy />} />
      </Routes> */}
      </Routes>
    </>
  );
}

export default App;
