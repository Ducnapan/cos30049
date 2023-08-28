import Banner from'./Banner'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navigation from './Navigation'
import RateBar from './RateBar'
import Buy from './Buy'
import Market from './Market'
import History from './History'
import './App.css'
import TopCrypto from './TopCrypto'
import Footer from './Footer'

function App() {
  

  return (
    <div>
      <Router>
        <div>
      <Navigation />
    <Routes>
       <Route path='/'/>
        <Route path='/buy' element={<Buy/>}  />
        <Route path='/market' element={<Market/>} />
        <Route path='/history' element={<History/>} />
    </Routes>
    </div>
  </Router>
  <Banner />
  <RateBar />
  <TopCrypto />
  <Footer />
  
  </div>
      
   
  )
}

export default App
