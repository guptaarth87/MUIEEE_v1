import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Teams from './Components/Teams';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Teams' element={<Teams/>} />
          <Route path='/Contact/Teams' element={<Teams/>} />
          
        </Routes>
      </main>
     
    </div>
  );
}

export default App;
