import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Edu from './pages/Edu'
import Cont from './pages/Cont'
import Prof from './pages/Prof'

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/prof' element={<Prof/>}/>
          <Route path='/cont' element={<Cont/>}/>
          <Route path='/edu' element={<Edu/>}/>
        </Routes>
      </Router> 
  )
}

export default App