
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
  const [data, setData] = useState([
    {"id":"1","name":"Man covered in Yellow","color":"#00FFFF","price":"0.25","views":"1289","likes":"57","collection":"yellow","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"2","name":"Woman with a lot of Purple","color":"#800080","price":"0.35","views":"3497","likes":"82","collection":"vanta","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"3","name":"Child covered in Pink paint","color":"#EE82EE","price":"0.65","views":"2098","likes":"44","collection":"vanta","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"4","name":"Police covered in Yellow paint","color":"#FFFF00","price":"0.45","views":"4226","likes":"63","collection":"yellow","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"5","name":"Teacher covered in Green paint","color":"#008080","price":"0.75","views":"5794","likes":"91","collection":"green","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"6","name":"Doctor covered in Orange paint","color":"#FFA500","price":"0.85","views":"3152","likes":"75","collection":"bronze","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"7","name":"Artist with a Blue Palette","color":"#0000FF","price":"0.55","views":"2467","likes":"29","collection":"ocean","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"8","name":"Firefighter in Red Uniform","color":"#FF0000","price":"0.65","views":"4235","likes":"68","collection":"red","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"9","name":"Dancer in Sparkling Silver","color":"#C0C0C0","price":"0.45","views":"1984","likes":"53","collection":"bronze","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"10","name":"Construction Worker in Safety Yellow","color":"#FFFF00","price":"0.55","views":"3625","likes":"36","collection":"yellow","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"11","name":"Chef in Apron of Red Stripes","color":"#FF0000","price":"0.75","views":"4789","likes":"77","collection":"red","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"12","name":"Pilot in Sky-Blue Uniform","color":"#87CEEB","price":"0.85","views":"2573","likes":"48","collection":"bronze","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"13","name":"Athlete in Sports Gear","color":"#FF4500","price":"0.65","views":"5874","likes":"69","collection":"bronze","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"14","name":"Scientist in Lab Coat","color":"#FFFFFF","price":"0.55","views":"3147","likes":"41","collection":"ocean","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"15","name":"Musician in Shiny Gold Outfit","color":"#FFD700","price":"0.95","views":"3982","likes":"72","collection":"ocean","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"16","name":"Journalist with a Green Notebook","color":"#008000","price":"0.45","views":"2325","likes":"27","collection":"green","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"17","name":"Photographer with a Black Camera","color":"#000000","price":"0.35","views":"1589","likes":"38","collection":"ocean","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"18","name":"Actor in Dramatic Costume","color":"#800000","price":"0.75","views":"4623","likes":"53","collection":"red","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"19","name":"Model in Elegant White Dress","color":"#FFFFFF","price":"0.65","views":"3256","likes":"46","collection":"yellow","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"20","name":"Gardener in Green Overalls","color":"#008000","price":"0.45","views":"2765","likes":"29","collection":"green","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"21","name":"Singer in Vibrant Purple Attire","color":"#800080","price":"0.55","views":"3894","likes":"65","collection":"vanta","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"22","name":"Surgeon in Sterile Blue Scrubs","color":"#87CEEB","price":"0.85","views":"4987","likes":"71","collection":"bronze","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"23","name":"Sailor in Navy Blue Uniform","color":"#000080","price":"0.65","views":"3620","likes":"54","collection":"green","owner":"none","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"},
    {"id":"24","name":"Police Officer in Dark Blue","color":"#00008B","price":"0.75","views":"4342","likes":"59","collection":"red","owner":"ducnapan","transID":"0xFFFFFFFFFF","tokenID":"0xFFFFFFFFFF","address":"0xFFFFFFFFFF"}
  ]
  );
 
  useEffect(() => {
    setName(sessionStorage.getItem("item-name"));
    setColor(sessionStorage.getItem("item-color"));
    setPrice(sessionStorage.getItem("item-price"));
    setViews(sessionStorage.getItem("item-views"));
    setLikes(sessionStorage.getItem("item-likes"));
    setID(sessionStorage.getItem("item-id"));
    
   
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
