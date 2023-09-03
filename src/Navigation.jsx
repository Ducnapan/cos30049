import {NavLink} from 'react-router-dom'
import './Navigation.css'
// Navigation bar
function Navigation(){
    return (
      <nav className='navbar' style={{backgroundColor:'#F5F5F5'}}>
        <a className='navbar-brand'> CrytoFinance</a>
      <div>
      <ul className="navbar-nav mx-2 flex-row" id="navId">
        <li className="nav-item mx-2" >
         <NavLink to='/cos30049/'>Home</NavLink>
        </li>
        <li className="nav-item mx-2">
         <NavLink to='/cos30049/collections'>Collections</NavLink>
        </li>
        <li className="nav-item mx-2">
         <NavLink to='/cos30049/nftlisting'>NFTs</NavLink>
        </li>
       
        <li className="nav-item mx-2">
         <NavLink to='/cos30049/history'>History</NavLink>
        </li>
       
       
       
      </ul>
      
      
      
      
      
      </div>
      </nav>

    );
}
export default Navigation