// import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Card from './components/Card';
import Navbar from './components/Navbar';
import Favourites from './components/Favourites';
import './App.css'

function App() {

  return (
    <div className="App px-4 sm:mx-4 md:mx-0">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
