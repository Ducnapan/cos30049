import {NavLink} from 'react-router-dom'
import './Navigation.css'
function Navigation(){
    return (
      <nav className='navbar navbar-light'>
        <a className='navbar-brand'> CrytoFinance</a>
      <div>
      <ul className="navbar-nav mx-2 flex-row" id="navId">
        <li className="nav-item mx-2" >
         <NavLink to='/home'>Home</NavLink>
        </li>
        <li className="nav-item mx-2">
         <NavLink to='/buy'>Buy</NavLink>
        </li>
        <li className="nav-item mx-2">
         <NavLink to='/items'>NFTs</NavLink>
        </li>
        <li className="nav-item mx-2">
         <NavLink to='/history'>History</NavLink>
        </li>
       
       
      </ul>
      
      
      
      
      
      </div>
      </nav>

    );
}
export default Navigation