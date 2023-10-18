import './css/History.css'
import { useState } from 'react';
import { TextField } from '@mui/material';
import ItemTab from './components/ItemTab';
// show User transaction history
function History(){
    const data = [
        { id:1,name: 'Man covered in Yellow', mode:'Buy', time:'8/8/2022' },
        { id:2,name: 'Man covered in Purple', mode:'Buy', time:'12/8/2022' },
        { id:3,name: 'Man covered in Yellow', mode:'Sell', time:'23/8/2022' },
        { id:4,name: 'Woman covered in Yellow', mode:'Buy', time:'28/8/2022' },
        { id:5,name: 'Child covered in Yellow', mode:'Buy', time:'8/9/2022' },
        { id:6,name: 'Child covered in Yellow', mode:'Sell', time:'11/9/2022' },
        { id:7,name: 'Man covered in Orange', mode:'Buy', time:'8/10/2022' },
        { id:8,name: 'Teacher covered in Yellow', mode:'Buy', time:'10/10/2022' },
        { id:9,name: 'Man covered in Orange', mode:'Sell', time:'18/10/2022' },
        // Add more data as needed
      ];
      const [filter, setFilter] = useState('');

      const handleFilterChange = (e) => {
        setFilter(e.target.value);
      };
    
      const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
    
      return (
        <div className='d-flex justify-content-center my-5'>
          <div className="history-container d-flex justify-content-center align-items-center flex-column">
            <div className="container-title mb-5"><h2>History</h2></div>
    
            <div className='d-flex align-items-center flex-column' style={{ width: '70%' }}>
              <TextField
               id="standard-basic"
               label="Filter"
               variant="standard"
               placeholder="Filter by name"
                className='input-container align-self-end my-4'
                value={filter}
                onChange={handleFilterChange}
              />
             <div className='d-flex history-container justify-content-center flex-column mb-4'>
              {filteredData.map((item, index) => (
                <ItemTab
                  key={index}
                  name={item.name}
                  price={0}
                  date={item.time}
                  transID={0}
                  tokenID={0}
                />
              ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    export default History