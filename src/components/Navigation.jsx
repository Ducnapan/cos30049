import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../css/Navigation.css';

// Navigation bar
function Navigation() {
  const [login, setLogin] = useState(false);
  const [username, setName] = useState('');

  const clearLogin = () => {
    sessionStorage.setItem('validated', false);
    sessionStorage.setItem('username', ' ');
    window.location.reload();
  };

  useEffect(() => {
    // Use strict equality (===) to compare with boolean
    if (sessionStorage.getItem('validated') === 'true') {
      setLogin(true);
    } else {
      setLogin(false);
    }

    setName(sessionStorage.getItem('username'));
  }, []);

  return (
    <nav className='navbar' style={{ backgroundColor: '#F5F5F5' }}>
      <a className='navbar-brand'>CryptoFinance</a>
      <div>
        <ul className='navbar-nav mx-2 flex-row' id='navId'>
          <li className='nav-item mx-2'>
            <NavLink to='/cos30049/'>Home</NavLink>
          </li>
          <li className='nav-item mx-2'>
            <NavLink to='/cos30049/collections'>Collections</NavLink>
          </li>
          <li className='nav-item mx-2'>
            <NavLink to='/cos30049/nftlisting'>NFTs</NavLink>
          </li>
          <li className='nav-item mx-2'>
            <NavLink to='/cos30049/history'>History</NavLink>
          </li>
          |
          {login ? (
            <li className='nav-item mx-2'>
              <NavLink onClick={clearLogin}>Welcome, {username.slice(0,4)}</NavLink>
            </li>
          ) : (
            <li className='nav-item mx-2'>
              <NavLink to='/cos30049/login'>Login</NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
