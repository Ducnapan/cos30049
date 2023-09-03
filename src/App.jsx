
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import NFTListing from './NFTListing'
import History from './History'
import Footer from './Footer'
import Details from './Details'
import Collections from './Collections'
import Confirm from './Confirm'
import './App.css'

//Main hosting component
function App() {
  

  return (
    <div>
      <Router>
        <div>
        <Navigation />
    <Routes>
    <Route path='/cos30049/'  element={<Home/>}/>
       <Route path='/' exact element={<Home/>}/>
        <Route path='/cos30049/nftlisting' element={<NFTListing/>} />
        <Route path='/cos30049/details' element={<Details/>} />
        <Route path='/cos30049/history' element={<History/>} />
        <Route path='/cos30049/collections' element={<Collections/>} />
        <Route path='/cos30049/confirm' element={<Confirm/>} />
    </Routes>
  
    </div>
  </Router>
  <Footer />
  
  </div>
      
   
  )
}

export default App
