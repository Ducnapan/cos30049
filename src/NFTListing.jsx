import './css/NFTListing.css'
import NFT from './components/NFT'
import { useState,useEffect } from 'react';
import { TextField } from '@mui/material';
// Show a listing of NFTs
function Items(){
     
      const [filter, setFilter] = useState('');
      const [data, setData] = useState([]);
     

      useEffect(() => {
        
          fetch('src/api_nft.php/')
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
             
              return response.json();
            })
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
        }, []);
        
     //Organised item into row of 3 
      const chunkArray = (array, chunkSize) => {
          const chunkedArr = [];
          for (let i = 0; i < array.length; i += chunkSize) {
            chunkedArr.push(array.slice(i, i + chunkSize));
          }
          return chunkedArr;
        };
      
        // Chunk the items into groups of 3
        const chunkedItems = chunkArray(data, 3);
      
    
    // Function to handle filter input changes
    const handleFilterChange = (e) => {
      setFilter(e.target.value);
    };
    
    // Filter the data based on the filter value
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    const hasValue = () => {
     return filter == '';
    };
    return (
     
     <div >
         
     <div className = 'd-flex justify-content-center flex-column'>
    
     <TextField id="standard-basic" label="Filter" variant="standard"
      placeholder="Filter by name"
      className='input-container align-self-center mx-5 mb-5'
     value={filter}
     onChange={handleFilterChange} />
     {hasValue() ? (
      <div className='container d-flex justify-content-center flex-column align-items-center my-5'>
     <div className = 'blog'>
       <div className='container-title'>
       <h3 className='py-3'>Popular Items</h3>
         </div>
         {chunkedItems.map((group, groupIndex) => (
        <div key={groupIndex} className="d-flex flex-row justify-content-center my-3 py-5">
          {group.map((item, index) => (
           <NFT name = {item.name}
                color = {item.color}
                price = {item.price}
           />
          ))}
        </div>
      ))}
     </div>
     <div className = 'blog my-5'>
     <div className='container-title'>
         <h3 className='py-3'>New Items</h3>
         </div>
         <div className="d-flex flex-row justify-content-center my-3 py-5">
         <NFT name= 'Police covered in Yellow paint' 
              color='yellow'
            price = {0.45}
           
       />
       <NFT name= 'Teacher covered in Green paint'
           color='teal'
            price = {0.75} 
            
       />
       <NFT name= 'Doctor covered in Orange paint'
           color='orange'
            price = {0.85} 
           
       /> 
      </div> 
     </div>
     </div>
):(
  <div className='container d-flex justify-content-center flex-column align-items-center my-5'>
     <div className = 'blog search-blog my-5'>
     <div className='container-title'>
         <h3 className='py-3'>Search for "{filter}"</h3>
         </div>
         <div className="d-flex flex-row justify-content-center my-3 py-5">
         {filteredData.map((item) => (
       <NFT name = {item.name}
            color = {item.color}
            price = {item.price}
           
       />
       ))}

      
      
      </div> 
     </div>
     </div>
)}

     </div>
    
     </div>
    
 )

}
export default Items