import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// show confirmation
function Confirm() {
  const [confirm, setConfirm] = useState(null);

  useEffect(() => {
    const storedConfirm = sessionStorage.getItem("confirm");
    if (storedConfirm !== null) {
      // Parse the storedConfirm string as a boolean
      setConfirm(JSON.parse(storedConfirm));
    } else {
      // Default to false if not found in sessionStorage
      setConfirm(false);
    }
  }, []);

  return (
    <div className = 'd-flex justify-content-center flex-column'>
    <div className='container d-flex justify-content-center flex-column align-items-center my-5'>
       <div className = 'blog'>
          <div className='container-title'>
          <h3 className='py-3'>Popular Collections</h3>
          </div>
            <div className="d-flex flex-row justify-content-center flex-column my-3 py-5">
      {confirm ? (
        <h4>Your purchase is successful</h4>
      ) : (
        <h4>Your purchase has failed</h4>
      )}
      <NavLink to='/cos30049/'>Return to Home</NavLink>
    </div>
    </div>
    </div>
    </div>
  );
  
}

export default Confirm;
