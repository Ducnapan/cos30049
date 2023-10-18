import './css/History.css';
import { useState } from 'react';  // Removed useEffect since it's not used
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';  // Corrected import statement
import axios from 'axios';
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const validate = (i) =>{
    if(i){
    sessionStorage.setItem('validated',true);
    sessionStorage.setItem('username',username);
    }
    else{
      sessionStorage.setItem('validated',false);
      sessionStorage.setItem('username',' ');
    }
    window.location.reload();
  }

  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    //const url = 'http://localhost/api/api_login.php/';
    const url = './src/api/login.json';
    
      axios.get(url)
      .then((response) => {
        
        
        return response.data;
      })
      .then((data) => { 
        data.forEach(element => {
          if (element.username === username && element.password === password) {
        
            validate(true);
            
          } else {
            validate(false);
          }
          
        });
        
    })
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <div className='d-flex justify-content-center my-5'>
      <div className="history-container d-flex justify-content-center align-items-center flex-column" style={{ width: "50%" }}>
        <div className="container-title mb-5"><h2>Login</h2></div>
        <form onSubmit={handleSubmit}>
          <div className='d-flex align-items-center flex-column'>
            <TextField
              id="standard-basic"
              label="Username"
              variant="standard"
              placeholder="Enter username"
              className='align-self-start'
              value={username}
              onChange={(e) => setUsername(e.target.value)}  // Added onChange handler
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              placeholder="Enter password"
              className='align-self-start my-3'
              value={password}
              onChange={(e) => setPassword(e.target.value)}  // Added onChange handler
            />
            <Button variant="outlined" color='primary' type="submit" className='my-2'>Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
