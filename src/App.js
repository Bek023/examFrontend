import Header from './componets/Header'
import Home from './Page/Home';
import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
       <Routes>
         <Route path="/" element={<Home />} />
         {/* <Route exact path="/about" element={<About />} /> */}
         {/* <Route exact path="/contact" element={<Contact />} /> */}
       </Routes>
    </>
  );
}

export default App;
