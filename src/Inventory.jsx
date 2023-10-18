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
      const [data, setData] = useState([]);
      const [ascDesc,setAscDesc] = useState(false);
      const [type,setType] = useState('none');
      const [uname,setUname] = useState('');
 
      useEffect(() => {
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