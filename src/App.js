import Header from './componets/Header'
import Home from './Page/Home';
import Excursy from './Page/Excursy';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import A_tour from './Page/a_tour';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Экскурсии" element={<Excursy />} />
        <Route path=':id' element={<A_tour />} />
      </Routes>

    </>
  );
}

export default App;