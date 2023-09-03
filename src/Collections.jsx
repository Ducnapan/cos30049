import './NFTListing'
import Collection from './Collection'
import { useState } from 'react';
import { TextField } from '@mui/material';
// A listing for collections
function Collections(){
     const data = [
          {name: 'Red', color:'red', price:0.25, volume:231 },
          {name: 'Yellow', color:'yellow', price:0.35, volume:212 },
          {name: 'Green', color:'green', price:0.65, volume:400 },
          {name: 'Vanta', color:'black', price:0.45, volume:200 },
          {name: 'Bronze', color:'#CD7F32', price:0.75, volume:320 },
          {name: 'Ocean', color:'blue', price:0.85, volume:270 },
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
          <h3 className='py-3'>Popular Collections</h3>
            </div>
            <div className="d-flex flex-row justify-content-center my-3 py-5">
          <Collection name = 'Red'
               color = 'red'
               price = {0.25}
               volume={231}
          />
          <Collection name = 'Yellow'
               color = 'yellow'
               price = {0.35} 
               volume={212}
          />
          <Collection name = 'Green'
               color = 'green'
               price = {0.65} 
               volume={400}
          /> 
         </div>
        </div>
        <div className = 'blog my-5'>
        <div className='container-title'>
            <h3 className='py-3'>New Collections</h3>
            </div>
            <div className="d-flex flex-row justify-content-center my-3 py-5">
            <Collection name = 'Vanta'
               color = 'black'
               price = {0.45}
               volume={200}
          />
          <Collection name = 'Bronze'
               color = '#CD7F32'
               price = {0.75} 
               volume={320}
          />
          <Collection name = 'Ocean'
               color = 'blue'
               price = {0.85} 
               volume={270}
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
          <Collection name = {item.name}
               color = {item.color}
               price = {item.price}
               volume = {item.volume}
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
export default Collections