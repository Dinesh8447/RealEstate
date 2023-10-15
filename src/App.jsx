import {Routes,Route} from 'react-router-dom'
import './App.css'
import Home from '../src/pages/Home'
import Sigin from '../src/pages/Sigin'
import Signout from '../src/pages/Signout'
import About from '../src/pages/About'
import Profile from '../src/pages/Profile'
function App() {

  return (
    <div>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/sigin' element={<Sigin/>}/>
    <Route path='/signout' element={<Signout/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/profile' element={<Profile/>}/>

      </Routes>
      
    </div>

  )
}

export default App
