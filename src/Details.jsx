import './css/Details.css'
import { BarChart } from '@mui/x-charts';
import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
//Show the detail of an individual NFT
function Details(){
  const [showPopup, setShowPopup] = useState(false);
// show confirmation pop-up
  
    const [name,setName] = useState('');
    const [color,setColor] = useState('');
    const [price,setPrice] = useState(0);
    const [views,setViews] = useState(0);
    const [likes,setLikes] = useState(0);

    const owner = useState('null');
   
    useEffect(() => {
        
        setName(sessionStorage.getItem("item-name"));
        setColor(sessionStorage.getItem("item-color"));
        setPrice(sessionStorage.getItem("item-price"));
        setViews(sessionStorage.getItem("item-views"));
        setLikes(sessionStorage.getItem("item-likes"));
        //set up temporary data to be transfer from the NFT listing based on the NFT the user choose
        
       
    }, []); 
    const success = ()=>{
      sessionStorage.setItem('confirm',true);

  };
  const fail = ()=>{
    sessionStorage.setItem('confirm',false);

};
    const togglePopup = () => {
      setShowPopup(!showPopup);
      //show confirmation pop-up
    };

    return(
    <div className="d-flex justify-content-center flex-column align-items-center py-5">
        <div className = 'detail-container d-flex justify-content-start px-5 py-5'>
        <div className = 'detail-container-2 justify-content-center py-5'>
        <div className="detail-img" style={{backgroundColor:color}}></div>
        </div>
        <div className="d-flex flex-column mx-5 my-5">
        <h4>NFT</h4>
        <h2>{name}</h2>
        <p>Owned by <a href='#'>{owner}</a></p>
       <div className='d-flex flex-row'>
        <div className='d-flex flex-column mx-3 align-items-center'>
            <h6>Rank #</h6>
            <p>3</p>
            
        </div>
        <div className='d-flex flex-column mx-3 align-items-center'>
            <h6>Views <i className="bi bi-eye"></i></h6>
            <p>{views}</p>
            
        </div>
        <div className='d-flex flex-column mx-3 align-items-center'>
            <h6>Likes </h6>
            <p>{likes}</p>
            
        </div>
       </div>
       <div className = "detail-container-3 px-3 my-3">
        <div className='detail-container-title'>
        <h5>Price</h5>
        </div>
        <h2>{price} ETH</h2>
        <div className='detail-container-btn my-3' onClick={togglePopup}> Buy Now</div>

       </div>
       {showPopup &&
       <div className = "detail-container-3 px-3 my-3">
        <div className='detail-container-title'>
        <h5>Confirm</h5>
        </div>
        <h2>Are you sure</h2>
        <NavLink to='/cos30049/confirm'>
        <div className='detail-container-btn my-3' onClick={success}>Yes</div>
        <div className='detail-container-btn my-3 bg-light text-black' onClick={fail}>No</div>
        </NavLink>
       </div>
         }

       <div className = "detail-container-3 px-3">
        <div className='detail-container-title'>
        <h5>Price History</h5>
        </div>
        <BarChart
  xAxis={[
    {
      id: 'barCategories',
      data: [' ', '08/08/2023', '31/08/2023'],
      scaleType: 'band',
    },
  ]}
  series={[
    {
      data: [0, price - 0.1, price],
    },
  ]}
  width={500}
  height={300}
/>

       </div>


        
        </div>
        </div>


    </div>
    )

}
export default Details