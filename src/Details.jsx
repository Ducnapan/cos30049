
import { useEffect, useState } from 'react';
import './css/Details.css';
import { BarChart } from '@mui/x-charts';
import { NavLink } from 'react-router-dom';
import axios from 'axios';



function Details() {
  const [showPopup, setShowPopup] = useState(false);

  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState(0);
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [id, setID] = useState(0);
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('http://localhost/api/api_nft.php/');

  useEffect(() => {
    setName(sessionStorage.getItem("item-name"));
    setColor(sessionStorage.getItem("item-color"));
    setPrice(sessionStorage.getItem("item-price"));
    setViews(sessionStorage.getItem("item-views"));
    setLikes(sessionStorage.getItem("item-likes"));
    setID(sessionStorage.getItem("item-id"));
    
    const url = 'http://localhost/api/api_nft.php/';
        //const url = './src/api/nft.json';
        
          axios.get(url)
      .then((response) => {
        if (!response.data) {
          throw new Error('Network response was not ok');
        }
        return response.data;
      })
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const success = () => {
    const changeOwner = sessionStorage.getItem('username') ;
    fetch(url + "id/" + id, { // Use the 'url' state variable here
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        owner:changeOwner
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Update successful', data);
        // Handle success, e.g., show a success message or update your UI.
      })
      .catch((error) => {
        console.error('Error updating owner', error);
        // Handle error, e.g., show an error message.
      });
   
  };
  const fail = () => {
    sessionStorage.setItem('confirm', false);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="d-flex justify-content-center flex-column align-items-center py-5">
      <div className='detail-container d-flex justify-content-start px-5 py-5'>
        <div className='detail-container-2 justify-content-center py-5'>
          <div className="detail-img" style={{ backgroundColor: color }}></div>
        </div>
        <div className="d-flex flex-column mx-5 my-5">
          <h4>NFT</h4>
          <h2>{name}</h2>
          <p>Owned by <a href='#'>null</a></p>
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
          <div className="detail-container-3 px-3 my-3">
            <div className='detail-container-title'>
              <h5>Price</h5>
            </div>
            <h2>{price} ETH</h2>
            <div className='detail-container-btn my-3' onClick={togglePopup}> Buy Now</div>
          </div>
          {showPopup &&
            <div className="detail-container-3 px-3 my-3">
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
          <div className="detail-container-3 px-3">
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
  );
}

export default Details;
