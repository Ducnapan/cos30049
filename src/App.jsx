
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import Buy from './Buy'
import Items from './Items'
import History from './History'
import './App.css'


function App() {
  

  return (
    <div>
      <Router>
        <div>
      <Navigation />
    <Routes>
       <Route path='/home' element={<Home/>}/>
        <Route path='/buy' element={<Buy/>}  />
        <Route path='/items' element={<Items/>} />
        <Route path='/history' element={<History/>} />
    </Routes>
    </div>
  </Router>
  
  
  </div>
      
   
  )
}

export default App
