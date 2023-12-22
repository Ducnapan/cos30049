import './css/NFTListing.css'
import { useState,useEffect } from 'react';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import UpIcon from '@mui/icons-material/ArrowDropUp';
import DownIcon from '@mui/icons-material/ArrowDropDown';
import axios from 'axios';
// Show a listing of NFTs
function Inventory(){
     
      const [filter, setFilter] = useState('');
      const [ascDesc,setAscDesc] = useState(false);
      const [type,setType] = useState('none');
      const [uname,setUname] = useState('');
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
      ]);
 
      useEffect(() => {

             setUname(sessionStorage.getItem("username"));
          
          }, []);
        
     //Organised item into row of 3 
      const chunkArray = (array, chunkSize) => {
          const chunkedArr = [];
          for (let i = 0; i < array.length; i += chunkSize) {
            chunkedArr.push(array.slice(i, i + chunkSize));
          }
          return chunkedArr;
        };
      
        
       
        const alphaSort = (data, ascending) => {
          return data.slice().sort((a, b) => {
            if (ascending) {
              return a.name.localeCompare(b.name);
            } else {
              return b.name.localeCompare(a.name);
            }
          });
        }
        const likesSort = (data, ascending) => {
          return data.slice().sort((a, b) => {
            if (ascending) {
              return a.likes - b.likes;
            } else {
              return b.likes - a.likes;
            }
          });
        }
        const viewsSort = (data, ascending) => {
          return data.slice().sort((a, b) => {
            if (ascending) {
              return a.views - b.views;
            } else {
              return b.views - a.views;
            }
          });
        }
        const priceSort = (data, ascending) => {
          return data.slice().sort((a, b) => {
            if (ascending) {
              return a.price - b.price;
            } else {
              return b.price - a.price;
            }
          });
        }
        const allSort = (type) =>{
          let dataSort = [];
          switch(type){
            case "none":
             dataSort =  data;
             break;
            case "alpha":
              dataSort =  alphaSort(data,ascDesc); 
              break;         
            case "likes":
              dataSort =  likesSort(data,ascDesc);
              break;
            case "views":
              dataSort =  viewsSort(data,ascDesc);
              break;
            case "price":
              dataSort =   priceSort(data,ascDesc);
              break;
          }
          dataSort = dataSort.filter((item) =>
          item.owner.toLowerCase() === (uname.toLowerCase())
        )
          return dataSort;
        }
      
   
// Chunk the items into groups of 3
        const chunkedItems = chunkArray(allSort(type), 3);
   
    // Function to handle filter input changes
    const handleFilterChange = (e) => {
      setFilter(e.target.value);
    };
    
    // Filter the data based on the filter value
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    const chunkedItems_2 = chunkArray(filteredData, 3);
    const hasValue = () => {
     return filter == '';
    };
    return (
     
     <div >
         
     <div className = 'd-flex justify-content-center flex-column'>
    <div className="d-flex flex-row align-self-center mt-5">
  <TextField
    id="standard-basic"
    label="Filter"
    variant="standard"
    placeholder="Filter by name"
    className='input-container'
    style={{ width: "80%" }}
    value={filter}
    onChange={handleFilterChange}
  />
   <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Sort by</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={type}
        onChange={(e) => setType(e.target.value)} // Handle the change
            
      >
        <MenuItem value={"none"}>
          <em>None</em>
        </MenuItem>
        <MenuItem value={"alpha"}>A-Z</MenuItem>
        <MenuItem value={"likes"}>Likes</MenuItem>
        <MenuItem value={"views"}>Views</MenuItem>
        <MenuItem value={"price"}>Price</MenuItem>
      </Select>
    </FormControl>
    <Button onClick={() => setAscDesc(!ascDesc)}>
            {ascDesc ? <UpIcon /> : <DownIcon />}
          </Button>
</div>
     {hasValue() ? (
      <div className='container d-flex justify-content-center flex-column align-items-center my-5'>
     <div className = 'blog my-5'>
       <div className='container-title'>
       <h3 className='py-3'>Inventory</h3>
         </div>
         {chunkedItems.map((group, groupIndex) => (
        <div key={groupIndex} className="d-flex flex-row justify-content-center my-3 py-5">
          {group.map((item, index) => (
            <div className="item-container-3 mx-4">
        <div className="item-img" style={{backgroundColor:item.color}}></div>
        <h5 className='item-title'>{item.name}</h5>
        <div className="justify-content-center">
            <p><strong>Price</strong></p>
            <p>{item.price}</p>
            <p><strong>Address</strong></p>
            <p>{item.address}</p>
            <p><strong>Transaction ID</strong></p>
            <p>{item.transID}</p>
            <p><strong>Token ID</strong></p>
            <p>{item.tokenID}</p>
        </div>
        </div>
          ))}
        </div>
      ))}
     </div>
     
     </div>
):(
  <div className='container d-flex justify-content-center flex-column align-items-center my-5'>
     <div className = 'blog search-blog my-5'>
     <div className='container-title'>
         <h3 className='py-3'>Search for <i>{filter}</i></h3>
         </div>
         {chunkedItems_2.map((group, groupIndex) => (
        <div key={groupIndex} className="d-flex flex-row justify-content-center my-3 py-5">
          {group.map((item, index) => (
          <div className="item-container-3 mx-4">
          <div className="item-img" style={{backgroundColor:item.color}}></div>
          <h5 className='item-title'>{item.name}</h5>
          <div className="justify-content-center">
              <p><strong>Price</strong></p>
              <p>{item.price}</p>
              <p><strong>Address</strong></p>
              <p>{item.address}</p>
              <p><strong>Transaction ID</strong></p>
              <p>{item.transID}</p>
              <p><strong>Token ID</strong></p>
              <p>{item.tokenID}</p>
          </div>
          </div>
          ))}
        </div>
      ))}
     </div>
     </div>
)}

     </div>
    
     </div>
    
 )

}
export default Inventory