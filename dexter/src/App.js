import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './Page/Home';
import Sobre from './Page/Sobre';
import Personagens from './Page/Personagens';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Personagens" element={<Personagens />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

