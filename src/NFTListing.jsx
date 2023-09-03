import './NFTListing.css'
import NFT from './NFT'
import { useState } from 'react';
import { TextField } from '@mui/material';
// Show a listing of NFTs
function Items(){
     const data = [
          {name: 'Man covered in Yellow', color:'aqua', price:'0.25' },
          {name: 'Woman with alot of Purple', color:'purple', price:'0.35' },
          {name: 'Child covered in Pink paint', color:'violet', price:'0.65' },
          {name: 'Police covered in Yellow paint', color:'yellow', price:'0.45' },
          {name: 'Teacher covered in Green paint',color:'teal', price:'0.75' },
          {name: 'Doctor covered in Orange paint',color:'orange', price:'0.85' },
          // Add more data as needed
        ];
      const [filter, setFilter] = useState('');
      
    
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
         <div className="d-flex flex-row justify-content-center my-3 py-5">
       <NFT name =  'Man covered in Yellow'
            color ='aqua'
            price = {0.25}
           
       />
       <NFT name= 'Woman with alot of Purple'
            color='purple'
            price = {0.35} 
           
       />
       <NFT name= 'Child covered in Pink paint'
            color='violet'
            price = {0.65} 
            
       /> 
      </div>
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