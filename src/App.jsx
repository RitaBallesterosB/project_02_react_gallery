

import './App.css'
import { Animal1 } from './components/Animal1'
import { Animal2 } from './components/Animal2'
import { Animal3 } from './components/Animal3'
import { Animal4 } from './components/Animal4'
import { Animal5 } from './components/Animal5'
import { Animal6 } from './components/Animal6'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/zorro"    element={<Animal1 /> } />
        <Route path="/leopardo" element={<Animal2 /> } />
        <Route path="/mapache"  element={<Animal3 /> } />
        <Route path="/gato"     element={<Animal4 /> } />
        <Route path="/hamster"  element={<Animal5 /> } />
        <Route path="/colibri"  element={<Animal6 /> } />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
