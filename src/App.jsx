

import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Animal1 } from './components/Animal1'
import { Animal2 } from './components/Animal2'
import { Animal3 } from './components/Animal3'
import { Animal4 } from './components/Animal4'
import { Animal5 } from './components/Animal5'
import { Animal6 } from './components/Animal6'
import { Navigation } from './components/Navigation'

function App() {


  return (
  <>
    <BrowserRouter>
      <div>
        <h1 id="title"  className='text-center my-4' >Gallery Project</h1>
      </div>
      <div  id='main-img-container' >
        <Routes>
          <Route path="/zorro"    element={<Animal1 className="image-size" /> } />
          <Route path="/leopardo" element={<Animal2 className="image-size" /> } />
          <Route path="/mapache"  element={<Animal3 className="image-size" /> } />
          <Route path="/gato"     element={<Animal4 className="image-size" /> } />
          <Route path="/hamster"  element={<Animal5 className="image-size" /> } />
          <Route path="/colibri"  element={<Animal6 className="image-size" /> } />
        </Routes>
      </div>
      
        <Navigation />
      
    </BrowserRouter>  
  </>
  )
}

export default App
